<script setup>
    import { useI18n } from "vue-i18n";
    import { store } from '@/store';
    import { vIntersectionObserver } from '@vueuse/components';
    import { isIntersecting } from '@/components/intersector.ts';

    const { t } = useI18n();
    const bg = new URL('/src/assets/bg-texture.svg', import.meta.url).href
    const bgMobile = new URL('/src/assets/bg-texture-mobile.svg', import.meta.url).href
    const avatar = new URL('/src/assets/avatar.png', import.meta.url).href
</script>

<template>
    <section id="mainSection" :class="`section main-section ${store.lang === 'ar' ? 'rtl' : ''}`" v-intersection-observer="[isIntersecting,  { threshold: 0.2 }]">
        <div class="main-section-bg">
            <img :src="bg" class="main-section-bg-desktop"/>
            <img :src="bgMobile" class="main-section-bg-mobile"/>
        </div>
        <div class="main-section-wrapper">
            <div class="section-left">
                <h1>{{ t('HOME_SECTION1_TITLE') }}</h1>
                <h2>{{ t('HOME_SECTION1_SUBTITLE') }}</h2>
                <p>{{ t('HOME_SECTION1_DESCRIPTION') }} <strong>{{ t('HOME_SECTION1_DESCRIPTION2') }}</strong></p>
                <BButton pill class="accent-btn accent-btn-md">{{ t('HOME_SECTION1_BUTTON') }}</BButton>
            </div>
            <div class="section-right">
                <img :src="avatar"/>
            </div>
        </div>
    </section>
</template>