<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import { vIntersectionObserver } from '@vueuse/components';
    import { store } from '@/store';
    import { isIntersecting } from '@/components/intersector.ts';

    const { t } = useI18n();
    const plusIcon = new URL('/src/assets/plus.svg', import.meta.url).href

    const toggleCollapse = ($event: any) => {
        $event.stopPropagation();
        $event.srcElement?.classList?.toggle('active')
        const content = $event.srcElement?.nextElementSibling;
        if(content){
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 100 + "px";
            }
        }
    }
</script>

<template>
    <section id="faq" class="section" v-intersection-observer="[isIntersecting,  { threshold: 0.2 }]">
        <div class="section5">
            <h2>{{ t('HOME_SECTION5_TITLE1') }} <span>{{ t('HOME_SECTION5_TITLE2') }}</span></h2>

            <div :class="`qa-section ${store.lang === 'ar' ? 'rtl' : ''}`">
                <button class="collapsible" @click="toggleCollapse($event)">
                    <h4>{{ t('HOME_SECTION5_QA_Q1') }}</h4>
                    <img class="plus-icon" :src="plusIcon"/>
                </button>
                <div class="collapsible-content">
                    <p>{{ t('HOME_SECTION5_QA_A1') }}</p>
                </div>
                <button class="collapsible" @click="toggleCollapse($event)">
                    <h4>{{ t('HOME_SECTION5_QA_Q2') }}</h4>
                    <img class="plus-icon" :src="plusIcon"/>
                </button>
                <div class="collapsible-content">
                    <p>{{ t('HOME_SECTION5_QA_A2') }}</p>
                </div>
                <button class="collapsible" @click="toggleCollapse($event)">
                    <h4>{{ t('HOME_SECTION5_QA_Q3') }}</h4>
                    <img class="plus-icon" :src="plusIcon"/>
                </button>
                <div class="collapsible-content">
                    <p>{{ t('HOME_SECTION5_QA_A3') }}</p>
                </div>
                <button class="collapsible" @click="toggleCollapse($event)">
                    <h4>{{ t('HOME_SECTION5_QA_Q4') }}</h4>
                    <img class="plus-icon" :src="plusIcon"/>
                </button>
                <div class="collapsible-content">
                    <p>{{ t('HOME_SECTION5_QA_A4') }}</p>
                </div>
                <button class="collapsible" @click="toggleCollapse($event)">
                    <h4>{{ t('HOME_SECTION5_QA_Q5') }}</h4>
                    <img class="plus-icon" :src="plusIcon"/>
                </button>
                <div class="collapsible-content">
                    <p>{{ t('HOME_SECTION5_QA_A5') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
