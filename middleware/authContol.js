export default defineNuxtRouteMiddleware(async(to,form)=>{
    console.log('middleware/auth')
    console.log('to', to)
    console.log('from', from)
})