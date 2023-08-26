<template>
  <div>
    <v-img src="img/logo_d24.png" :width="300"></v-img>
    <div style="text-align: center; font-size: 28pt; font-weight: bold;">Display.24</div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
})
const { locale } = useI18n({ useScope: 'global' })
const indexStore = useIndexStore()
locale.value = indexStore.locale

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>