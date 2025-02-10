<script setup>
import { useI18n } from "vue-i18n";
import { reactive } from "vue";
import { ref } from "vue";
import section4Usage from "./home/section4Usage.vue";
import customSelect from "@/components/customSelect.vue";
import { store } from '@/store';

const platinium = new URL('/src/assets/platinium.png', import.meta.url).href
const platinium_plus = new URL('/src/assets/platinium_plus.png', import.meta.url).href
const gold = new URL('/src/assets/gold.png', import.meta.url).href
const stopIcon = new URL('/src/assets/stop.svg', import.meta.url).href
const tickIcon = new URL('/src/assets/tick.svg', import.meta.url).href
const d17 = new URL('/src/assets/d17.png', import.meta.url).href
const paymentCards = new URL('/src/assets/bank-card.png', import.meta.url).href
const mobilePayment = new URL('/src/assets/mobile-payment.png', import.meta.url).href
const tnPost = new URL('/src/assets/tunisian-post.png', import.meta.url).href
const { t } = useI18n();

const selectedLevel = ref("1");

const levelsOptions = ref([
  { label: t('OUR_OFFERS_LEVEL_1'), value: "1" },
  { label: t('OUR_OFFERS_LEVEL_2'), value: "2" },
  { label: t('OUR_OFFERS_LEVEL_3'), value: "3" },
  { label: t('OUR_OFFERS_LEVEL_4'), value: "4" },
]);

const frequencies = reactive([
    {label: '1 mois', selected: true},
    {label: '3 mois', selected: false},
    {label: "Reste de l'année", selected: false}
])

const packsLabels = [
    t('PACKS_INCLUDE_1'),
    t('PACKS_INCLUDE_2'),
    t('PACKS_INCLUDE_3'),
    t('PACKS_INCLUDE_4'),
]
const platiniumPackFeatures = [false, false, true, true]
const platiniumPlusPackFeatures = [false, true, true, true]
const goldPackFeatures = [true, true, true, true]

const levelSelected = (level) => {
    selectedLevel.value = level;
}

const frequencySelected = (frequencyIndex) => {
    frequencies.forEach((frequency, i) => frequency.selected = i === frequencyIndex)
}
</script>

<template>
    <div :class="`our-offers-container ${store.lang === 'ar' ? 'rtl' : ''}`">
        <div class="our-offers-main-section">
            <h1>{{ t('OUR_OFFERS_MAIN_SECTION_TITLE') }}</h1>

            <div class="level-selector">
                <BButton pill v-for="(level, i) in levelsOptions" :class="{ selected: level.value === selectedLevel }" :key="`level-${i}`" @click="levelSelected(level.value)">
                    {{ level.label }}
                </BButton>
            </div>

            <customSelect 
                v-model="selectedLevel" 
                :options="levelsOptions" 
            />

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
                            <div v-for="(feature, i) in packsLabels" class="pack-feature">
                                <span :class="{ included: platiniumPackFeatures[i] }">
                                    {{ feature }}
                                </span>
                                <img :src="platiniumPackFeatures[i] ? tickIcon : stopIcon" />
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
                            <div v-for="(feature, i) in packsLabels" class="pack-feature">
                                <span :class="{ included: platiniumPlusPackFeatures[i] }">
                                    {{ feature }}
                                </span>
                                <img :src="platiniumPlusPackFeatures[i] ? tickIcon : stopIcon" />
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
                            <div v-for="(feature, i) in packsLabels" class="pack-feature">
                                <span :class="{ included: goldPackFeatures[i] }">
                                    {{ feature }}
                                </span>
                                <img :src="goldPackFeatures[i] ? tickIcon : stopIcon" />
                            </div>
                        </div>
                        <BButton pill class="accent-btn accent-btn-md">{{ t('HOME_SECTION1_BUTTON') }}</BButton>
                    </div>
                </div>

            </div>
        </div>

        <div class="sections-group">
            <div class="our-offers-usage-section">
                <section4Usage/>
            </div>
    
            <div class="payment-methods">
                <div class="payment-methods-wrapper">
                    <h1>{{ t('PAYMENT_METHODS_1') }} <span>{{ t('PAYMENT_METHODS_2') }}</span></h1>
                    <p>{{ t('PAYMENT_METHODS_DESCRIPTION') }}</p>
                    <div class="methods">
                        <div class="payment-method">
                            <div>
                                <img :src="d17" />
                                <div>
                                    <p>D17</p>
                                    <p>DIGIPOSTBANK</p>
                                </div>
                            </div>
                        </div>
                        <div class="payment-method">
                            <div>
                                <img :src="paymentCards" />
                                <div>
                                    <p>Versement</p>
                                    <p>Bancaire</p>
                                </div>
                            </div>
                        </div>
                        <div class="payment-method">
                            <div>
                                <img :src="mobilePayment" />
                                <div>
                                    <p>Paiement</p>
                                    <p>en ligne</p>
                                </div>
                            </div>
                        </div>
                        <div class="payment-method">
                            <div>
                                <img :src="tnPost" />
                                <div>
                                    <p>Versement</p>
                                    <p>par Poste</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BButton pill class="accent-btn accent-btn-md">{{ t('HOME_SECTION1_BUTTON') }}</BButton>
                </div>
            </div>
        </div>

    </div>
</template>