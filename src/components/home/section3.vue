<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import { store } from '@/store';
    import { vIntersectionObserver } from '@vueuse/components';
    import { isIntersecting } from '@/components/intersector.ts';

    const { t } = useI18n();
    const card1 = new URL('/src/assets/card1.svg', import.meta.url).href
    const card2 = new URL('/src/assets/card2.svg', import.meta.url).href
    const card3 = new URL('/src/assets/card3.svg', import.meta.url).href
    const card4 = new URL('/src/assets/card4.svg', import.meta.url).href
</script>

<template>
    <section id="ourServices" class="section" v-intersection-observer="[isIntersecting,  { threshold: 0.2 }]">
        <div class="section3">
            <h2>{{ t('HOME_SECTION3_TITLE') }}</h2>
            <div class="section3-cards">
                <div class="cards-bg"></div>
                <div :class="`cards-wrapper ${store.lang === 'ar' ? 'rtl' : ''}`">

                    <div class="card-container">
                        <div class="card">
                            <h4>{{ t('HOME_SECTION3_CARD1_TEXT') }}</h4>
                            <div class="card-img">
                                <img :src="card1"/>
                            </div>
                        </div>
                    </div>

                    <div class="card-container">
                        <div class="card">
                            <h4>{{ t('HOME_SECTION3_CARD2_TEXT') }}</h4>
                            <div class="card-img">
                                <img :src="card2"/>
                            </div>
                        </div>
                    </div>

                    <div class="card-container">
                        <div class="card">
                            <h4>{{ t('HOME_SECTION3_CARD3_TEXT') }}</h4>
                            <div class="card-img">
                                <img :src="card3"/>
                            </div>
                        </div>
                    </div>

                    <div class="card-container">
                        <div class="card">
                            <h4>{{ t('HOME_SECTION3_CARD4_TEXT') }}</h4>
                            <div class="card-img">
                                <img :src="card4"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>