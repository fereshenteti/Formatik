<script setup>
  import { lang } from '@/App';
  import Section1 from './section1.vue'
  import Section2 from './section2.vue'
  import Section3 from './section3.vue'
  import Section4 from './section4.vue'
  import Section5 from './section5.vue'
</script>

<template>
  <Section1 :lang="lang"/>
  <Section2 :lang="lang"/>
  <Section3 :lang="lang"/>
  <Section4 :lang="lang"/>
  <Section5 :lang="lang"/>
</template>

