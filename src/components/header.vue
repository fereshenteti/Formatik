<script setup>
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();
    const logo = new URL('/src/assets/LogoFormatic.png', import.meta.url).href
    const props = defineProps(['lang'])
    const lang = props?.lang
</script>

<template>
    <BNav class="header-nav">
        <div class="header-wrapper">
            <div class="header-left">
                <BButton pill class="header-btn accent-btn">{{ t('HEADER_NAV_SIGNUP') }}</BButton>
                <BButton pill class="header-btn secondary-btn">{{ t('HEADER_NAV_SIGNIN') }}</BButton>
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
            </div>
            <div class="header-right">
                <img :src="logo"/>
            </div>
        </div>
    </BNav>
</template>