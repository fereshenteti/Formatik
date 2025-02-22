<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import { store } from '@/store';
    import { vIntersectionObserver } from '@vueuse/components';
    import { isIntersecting } from '@/components/intersector.ts';

    const { t } = useI18n();

    const usageIcon1 = new URL('/src/assets/usage-icon1.svg', import.meta.url).href
    const usageIcon2 = new URL('/src/assets/usage-icon2.svg', import.meta.url).href
    const usageIcon3 = new URL('/src/assets/usage-icon3.svg', import.meta.url).href
    const usageIcon4 = new URL('/src/assets/usage-icon4.svg', import.meta.url).href
</script>

<template>
    
    <h2>{{ t('HOME_SECTION4_TITLE2_pt1') }} <span>{{ t('HOME_SECTION4_TITLE2_pt2') }}</span> {{ t('HOME_SECTION4_TITLE2_pt3') }}</h2>

    <div :class="`usage-wrapper ${store.lang === 'ar' ? 'rtl' : ''}`">
        <div class="usage-card-wrapper">
            <div class="card-number">
                <span>01</span>
            </div>
            <div class="usage-card">
                <div class="usage-icon">
                    <img :src="usageIcon1"/>
                </div>
                <div class="usage-text">
                    {{ t('HOME_SECTION4_USAGE_1') }}
                </div>
            </div>
            <div class="step-links"></div>
        </div>
        <div class="usage-card-wrapper">
            <div class="card-number">
                <span>02</span>
            </div>
            <div class="usage-card">
                <div class="usage-icon">
                    <img :src="usageIcon2"/>
                </div>
                <div class="usage-text">
                    {{ t('HOME_SECTION4_USAGE_2') }}
                </div>
            </div>
            <div class="step-links"></div>
        </div>
        <div class="usage-card-wrapper">
            <div class="card-number">
                <span>03</span>
            </div>
            <div class="usage-card">
                <div class="usage-icon">
                    <img :src="usageIcon3"/>
                </div>
                <div class="usage-text">
                    {{ t('HOME_SECTION4_USAGE_3') }}
                </div>
            </div>
            <div class="step-links"></div>
        </div>
        <div class="usage-card-wrapper">
            <div class="card-number">
                <span>04</span>
            </div>
            <div class="usage-card">
                <div class="usage-icon">
                    <img :src="usageIcon4"/>
                </div>
                <div class="usage-text">
                    {{ t('HOME_SECTION4_USAGE_4') }}
                </div>
            </div>
        </div>
    </div>

    <BButton pill class="accent-btn accent-btn-md">{{ t('HOME_SECTION1_BUTTON') }}</BButton>

</template>