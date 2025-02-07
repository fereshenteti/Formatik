<script setup>
  import { lang } from './App';
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
</script>

<template>
  <Header :lang="lang"/>
  <RouterView />
  <Footer :lang="lang"/>
</template>

