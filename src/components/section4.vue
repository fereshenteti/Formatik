<script setup>
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();
    const star = new URL('/src/assets/star.svg', import.meta.url).href
    const avatar = new URL('/src/assets/avatar2.png', import.meta.url).href
    const usageIcon1 = new URL('/src/assets/usage-icon1.svg', import.meta.url).href
    const usageIcon2 = new URL('/src/assets/usage-icon2.svg', import.meta.url).href
    const usageIcon3 = new URL('/src/assets/usage-icon3.svg', import.meta.url).href
    const usageIcon4 = new URL('/src/assets/usage-icon4.svg', import.meta.url).href
    const props = defineProps(['lang'])
    const lang = props?.lang
</script>

<template>
    <section class="section">
        <div class="section4">
            <h2>{{ t('HOME_SECTION4_TITLE') }}</h2>
            <div :class="`testimonials-wrapper ${lang === 'ar' ? 'rtl' : ''}`">
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

            <h2>{{ t('HOME_SECTION4_TITLE2_pt1') }} <span>{{ t('HOME_SECTION4_TITLE2_pt2') }}</span> {{ t('HOME_SECTION4_TITLE2_pt3') }}</h2>

            <div :class="`usage-wrapper ${lang === 'ar' ? 'rtl' : ''}`">
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

        </div>
    </section>
</template>