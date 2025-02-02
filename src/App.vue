<script setup>
  import { lang } from './App';
  import Header from './components/header.vue'
  import Section1 from './components/section1.vue'
  import Section2 from './components/section2.vue'
  import Section3 from './components/section3.vue'
  import Section4 from './components/section4.vue'
  import Section5 from './components/section5.vue'
  import Footer from './components/footer.vue'
</script>

<template>
  <Header :lang="lang"/>
  <Section1 :lang="lang"/>
  <Section2 :lang="lang"/>
  <Section3 :lang="lang"/>
  <Section4 :lang="lang"/>
  <Section5 :lang="lang"/>
  <Footer :lang="lang"/>
</template>

