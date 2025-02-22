<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import { store } from '@/store';
    import { vIntersectionObserver } from '@vueuse/components';
    import { isIntersecting } from '@/components/intersector.ts';
    const { t } = useI18n();
</script>

<template>
    <section id="whoAreWe" class="section" v-intersection-observer="[isIntersecting,  { threshold: 0.2 }]">
        <div :class="`section2 ${store.lang === 'ar' ? 'rtl' : ''}`">
            <div class="section2-card">
                <h2 class="section-title">{{ t('HOME_SECTION2_CARD_TITLE') }}</h2>
                <p>{{ t('HOME_SECTION2_CARD_DESCRIPTION1') }} <span>{{ t('HOME_SECTION2_CARD_DESCRIPTION2') }}</span> {{ t('HOME_SECTION2_CARD_DESCRIPTION3') }}</p>
                <BButton pill class="accent-btn accent-btn-md">{{ t('HOME_SECTION2_CARD_BUTTON') }}</BButton>
            </div>
        </div>
    </section>
</template>