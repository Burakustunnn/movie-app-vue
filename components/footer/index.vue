<template>
  <FwbFooter footer-type="logo">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <fwb-footer-brand
          href="https://flowbite.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
        />
        <FwbFooterLinkGroup
          class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <FwbFooterLink href="/"> About </FwbFooterLink>
          <FwbFooterLink href="/"> Privacy Policy </FwbFooterLink>
          <FwbFooterLink href="/"> Licensing </FwbFooterLink>
          <FwbFooterLink href="/"> Contact </FwbFooterLink>
        </FwbFooterLinkGroup>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <FwbFooterCopyright href="/" by="Flowbite™" />
    </div>
  </FwbFooter>
</template>

<script>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from "flowbite-vue";
export default {
  components: {
    FwbFooter,
    FwbFooterCopyright,
    FwbFooterLink,
    FwbFooterLinkGroup,
  },
};
</script>
