<script setup>
    import { useI18n } from "vue-i18n";
    import section4Usage from "./section4Usage.vue";
    import { store } from '@/store';

    const { t } = useI18n();
    const star = new URL('/src/assets/star.svg', import.meta.url).href
    const avatar = new URL('/src/assets/avatar2.png', import.meta.url).href
</script>

<template>
    <section class="section">
        <div class="section4">
            <h2>{{ t('HOME_SECTION4_TITLE') }}</h2>
            <div :class="`testimonials-wrapper ${store.lang === 'ar' ? 'rtl' : ''}`">
                <div v-for="i in 3" class="testimonial-card">
                    <div class="stars">
                        <img v-for="i in 5" :src="star"/>
                    </div>
                    <p class="testimonial">{{ t('HOME_SECTION4_TESTIMONY') }}</p>
                    <div class="owner">
                        <div class="owner-info">
                            <h4>{{ t('HOME_SECTION4_TESTIMONY_OWNER') }}</h4>
                            <p>{{ t('HOME_SECTION4_TESTIMONY_ROLE') }}</p>
                        </div>
                        <div class="owner-photo">
                            <img :src="avatar"/>
                        </div>
                    </div>
                </div>
            </div>

            <section4Usage/>

        </div>
    </section>
</template>