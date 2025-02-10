<script setup>
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();
    const bg = new URL('/src/assets/bg-texture.svg', import.meta.url).href
    const avatar = new URL('/src/assets/avatar.png', import.meta.url).href
    import { lang } from '@/App';
</script>

<template>
    <section :class="`section main-section ${lang === 'ar' ? 'rtl' : ''}`">
        <div class="main-section-bg">
            <img :src="bg"/>
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