<script setup>
    import { ref } from "vue";
    import { useI18n } from "vue-i18n";
    
    const { t } = useI18n();
    const logo = new URL('/src/assets/LogoFormatic.png', import.meta.url).href
    const props = defineProps(['lang'])
    const lang = props?.lang

    // State for menu toggle
    const isMenuOpen = ref(false);

    // Toggle function
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };
</script>

<template>
    <div class="header-nav">
        <div :class="`header-wrapper ${lang === 'ar' ? 'rtl' : ''}`">
            <div class="header-right">
                <img :src="logo" />
            </div>

            <!-- Hamburger Button for Small Screens -->
            <button @click="toggleMenu" class="hamburger-btn">
                <span :class="{'open': isMenuOpen}"></span>
                <span :class="{'open': isMenuOpen}"></span>
                <span :class="{'open': isMenuOpen}"></span>
            </button>

            <BNav v-if="!isMenuOpen" class="header-left">
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
                    <BButton pill class="header-btn secondary-btn">
                        {{ t('HEADER_NAV_SIGNIN') }}
                    </BButton>
                    <BButton pill class="header-btn accent-btn">
                        {{ t('HEADER_NAV_SIGNUP') }}
                    </BButton>
                </BNav>

            <!-- Navigation Menu -->
            <transition name="expand">
                <div :class="`mobile-menu ${isMenuOpen ? 'open-menu' : ''}`">
                    <BNav class="mobile-menu-wrapper">
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
                        <BButton pill class="header-btn secondary-btn">
                            {{ t('HEADER_NAV_SIGNIN') }}
                        </BButton>
                        <BButton pill class="header-btn accent-btn">
                            {{ t('HEADER_NAV_SIGNUP') }}
                        </BButton>
                    </BNav>
                </div>
            </transition>
        </div>
    </div>
</template>