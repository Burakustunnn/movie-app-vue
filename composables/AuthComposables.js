import { reactive } from "vue";
import Cookie from "js-cookie"
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/index";
import useAuthStore from "../stores/authStore";

export default function () {
  const authStore = useAuthStore();
  const router = useRouter();
  const inputData = reactive({
    fullname: "",
    email: "",
    password: "",
    tel: "",
  });

  //! Register işlemi
  const createUser = async () => {
    const data = { email: inputData.email, password: inputData.password };
    try {
    await createUserWithEmailAndPassword(
        auth,
        inputData.email,
        inputData.password
      );
      authStore.authSuccess(data);
      router.push("/");
    } catch (error) {
      console.log("hata oldu");
    }
  };

  //! LOGİN İŞLEMİ
  const signIn = async () => {
    const data = { email: inputData.email, password: inputData.password };
    try {
     await signInWithEmailAndPassword(
        auth,
        inputData.email,
        inputData.password
      );
      authStore.authSuccess(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  //! ÇIKIŞ İŞLEMİ
  const logOut = async () => {
    signOut(auth);
    localStorage.clear();
    authStore.authFail();
  };

  //! GİRİŞ_CIKIŞ KONTROL
  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        const { email, displayName, photoURL } = user;
        authStore.authSuccess({ email, displayName, photoURL });
        Cookie.set("auth", JSON.stringify({ email, displayName, photoURL }))
        // Cookie.set("auth", JSON.stringify({ email, displayName, photoURL }),{ expires:2})
        // istersem veriyi cookide 2 gün boyunca tutarım 
      } else {
        authStore.authFail();
      }
    });
  };

  //! Google ile girişi

  const signUpProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    signIn,
    createUser,
    logOut,
    inputData,
    userObserver,
    signUpProvider,
  };
}
