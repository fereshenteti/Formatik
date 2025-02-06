<script setup>
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();
    const logo = new URL('/src/assets/LogoFormatic.png', import.meta.url).href
    const props = defineProps(['lang'])
    const lang = props?.lang
</script>

<template>
    <BNav class="header-nav">
        <div :class="`header-wrapper ${lang === 'ar' ? 'rtl' : ''}`">
            <div class="header-right">
                <img :src="logo"/>
            </div>
            <div class="header-left">
                <BNavItem href="#">
                    {{ t('HEADER_NAV_OUR_OFFERS') }}
                </BNavItem>
                <BNavItem href="#">
                    {{ t('HEADER_NAV_HOW_TO_USE') }}
                </BNavItem>
                <BNavItem href="#">
                    {{ t('HEADER_NAV_WHAT_DO_WE_OFFER') }}
                </BNavItem>
                <BNavItem href="#">
                    {{ t('HEADER_NAV_WHO_ARE_WE') }}
                </BNavItem>
                <BButton pill class="header-btn secondary-btn">{{ t('HEADER_NAV_SIGNIN') }}</BButton>
                <BButton pill class="header-btn accent-btn">{{ t('HEADER_NAV_SIGNUP') }}</BButton>
            </div>
        </div>
    </BNav>
</template>