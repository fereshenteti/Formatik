<script setup>
import { useI18n } from "vue-i18n";
import { reactive } from "vue";
import section4Usage from "./home/section4Usage.vue";

const platinium = new URL('/src/assets/platinium.png', import.meta.url).href
const platinium_plus = new URL('/src/assets/platinium_plus.png', import.meta.url).href
const gold = new URL('/src/assets/gold.png', import.meta.url).href
const stopIcon = new URL('/src/assets/stop.svg', import.meta.url).href
const tickIcon = new URL('/src/assets/tick.svg', import.meta.url).href

const { t } = useI18n();
const levels = reactive([
    {label: t('OUR_OFFERS_LEVEL_1'), selected: true},
    {label: t('OUR_OFFERS_LEVEL_2'), selected: false},
    {label: t('OUR_OFFERS_LEVEL_3'), selected: false},
    {label: t('OUR_OFFERS_LEVEL_4'), selected: false}
])
const frequencies = reactive([
    {label: '1 month', selected: true},
    {label: '3 months', selected: false},
    {label: 'Rest of the year', selected: false}
])
const platiniumPackFeatures = reactive([
    {label: t('PACKS_INCLUDE_1'), included: false},
    {label: t('PACKS_INCLUDE_2'), included: false},
    {label: t('PACKS_INCLUDE_3'), included: true},
    {label: t('PACKS_INCLUDE_4'), included: true},
])
const platiniumPlusPackFeatures = reactive([
    {label: t('PACKS_INCLUDE_1'), included: false},
    {label: t('PACKS_INCLUDE_2'), included: true},
    {label: t('PACKS_INCLUDE_3'), included: true},
    {label: t('PACKS_INCLUDE_4'), included: true},
])
const goldPackFeatures = reactive([
    {label: t('PACKS_INCLUDE_1'), included: true},
    {label: t('PACKS_INCLUDE_2'), included: true},
    {label: t('PACKS_INCLUDE_3'), included: true},
    {label: t('PACKS_INCLUDE_4'), included: true},
])

const levelSelected = (levelIndex) => {
    levels.forEach((level, i) => level.selected = i === levelIndex)
}

const frequencySelected = (frequencyIndex) => {
    frequencies.forEach((frequency, i) => frequency.selected = i === frequencyIndex)
}
</script>

<template>
    <div class="our-offers-container">
        <div class="our-offers-main-section">
            <h1>{{ t('OUR_OFFERS_MAIN_SECTION_TITLE') }}</h1>

            <div class="level-selector">
                <BButton pill v-for="(level, i) in levels" :class="{ selected: level.selected }" :key="i" @click="levelSelected(i)">
                    {{ level.label }}
                </BButton>
            </div>

            <div class="packs-container">

                <div class="pack">
                    <div class="pack-image">
                        <img :src="platinium" />
                    </div>
                    <div class="pack-details">
                        <h4 class="pack-name">
                            <span class="platinium">Platinium</span>
                            {{ t('OUR_OFFERS_PACK') }}
                        </h4>
                        <div class="pack-prices">
                            <span class="old-price">99</span>
                            <span class="new-price">75</span>
                        </div>
                        <div class="frequencies">
                            <span v-for="(frequency, i) in frequencies" :class="{ selected: frequency.selected }" @click="frequencySelected(i)">
                                {{ frequency.label }}
                            </span>
                        </div>
                        <div class="pack-features">
                            <div v-for="feature in platiniumPackFeatures" class="pack-feature">
                                <span :class="{ included: feature.included }">
                                    {{ feature.label }}
                                </span>
                                <img :src="feature.included ? tickIcon : stopIcon" />
                            </div>
                        </div>
                        <BButton pill class="accent-btn accent-btn-md">{{ t('HOME_SECTION1_BUTTON') }}</BButton>
                    </div>
                </div>

                <div class="pack">
                    <div class="pack-image">
                        <img :src="platinium_plus" />
                    </div>
                    <div class="pack-details">
                        <h4 class="pack-name">
                            <span class="platinium">Platinium</span>
                            <span class="plus">Plus</span>
                            {{ t('OUR_OFFERS_PACK') }}
                        </h4>
                        <div class="pack-prices">
                            <span class="old-price">650</span>
                            <span class="new-price">400</span>
                        </div>
                        <div class="frequencies">
                            <span v-for="(frequency, i) in frequencies" :class="{ selected: frequency.selected }" @click="frequencySelected(i)">
                                {{ frequency.label }}
                            </span>
                        </div>
                        <div class="pack-features">
                            <div v-for="feature in platiniumPlusPackFeatures" class="pack-feature">
                                <span :class="{ included: feature.included }">
                                    {{ feature.label }}
                                </span>
                                <img :src="feature.included ? tickIcon : stopIcon" />
                            </div>
                        </div>
                        <BButton pill class="accent-btn accent-btn-md">{{ t('HOME_SECTION1_BUTTON') }}</BButton>
                    </div>
                </div>

                <div class="pack">
                    <div class="pack-image gold-pack">
                        <img :src="gold" />
                    </div>
                    <div class="pack-details">
                        <h4 class="pack-name">
                            <span class="gold">Gold</span>
                            {{ t('OUR_OFFERS_PACK') }}
                        </h4>
                        <div class="pack-prices">
                            <span class="old-price">2150</span>
                            <span class="new-price">1500</span>
                        </div>
                        <div class="frequencies">
                            <span v-for="(frequency, i) in frequencies" :class="{ selected: frequency.selected }" @click="frequencySelected(i)">
                                {{ frequency.label }}
                            </span>
                        </div>
                        <div class="pack-features">
                            <div v-for="feature in goldPackFeatures" class="pack-feature">
                                <span :class="{ included: feature.included }">
                                    {{ feature.label }}
                                </span>
                                <img :src="feature.included ? tickIcon : stopIcon" />
                            </div>
                        </div>
                        <BButton pill class="accent-btn accent-btn-md">{{ t('HOME_SECTION1_BUTTON') }}</BButton>
                    </div>
                </div>

            </div>
        </div>

        <div class="our-offers-usage-section">
            <section4Usage/>
        </div>

    </div>
</template>