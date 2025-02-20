<script setup>
    import { ref, watch, onMounted, onUnmounted } from "vue";
    import { useI18n } from "vue-i18n";
    import { ROUTE_CONSTS } from '@/router.js';
    import customSelect from "@/components/customSelect.vue";
    import { store } from '@/store';
    import { useRoute } from "vue-router";

    const { t, availableLocales } = useI18n();
    const logo = new URL('/src/assets/LogoFormatic.png', import.meta.url).href
    
    const route = useRoute();
    const currentHash = ref(route.hash);

    const selectedLang = ref(store.lang);
    const langOptions = ref(availableLocales.map(locale => {
        return {label: locale, value: locale}
    }));

    // State for menu toggle
    const isMenuOpen = ref(false);

    // Toggle function
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const isActive = (hash) => {
        return currentHash.value.endsWith(hash);
    };

    watch(selectedLang, () => {
        store.changeLang(selectedLang.value);
    });

    watch(() => route.fullPath, (newHash) => {
        currentHash.value = newHash;
    })

</script>

<template>
    <div class="header-nav">
        <div :class="`header-wrapper ${store.lang === 'ar' ? 'rtl' : ''}`">
            <div class="header-right" v-on:click="isMenuOpen = false">
                <RouterLink :to="ROUTE_CONSTS.HOME">
                    <img :src="logo" />
                </RouterLink>
            </div>

            <!-- Hamburger Button for Small Screens -->
            <button @click="toggleMenu" class="hamburger-btn">
                <div>
                    <span :class="{'open': isMenuOpen}"></span>
                    <span :class="{'open': isMenuOpen}"></span>
                    <span :class="{'open': isMenuOpen}"></span>
                </div>
            </button>

            <BNav v-if="!isMenuOpen" class="header-left">
                <li class="nav-item">
                    <RouterLink :to="'/#whoAreWe'" :class="`nav-link ${isActive('#whoAreWe') ? 'formatik-active-link' : ''}`">
                    {{ t('HEADER_NAV_WHO_ARE_WE') }}
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="'/#ourServices'" :class="`nav-link ${isActive('#ourServices') ? 'formatik-active-link' : ''}`">
                    {{ t('HEADER_NAV_WHAT_DO_WE_OFFER') }}
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="'/#howToUse'" :class="`nav-link ${isActive('#howToUse') ? 'formatik-active-link' : ''}`">
                    {{ t('HEADER_NAV_HOW_TO_USE') }}
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="ROUTE_CONSTS.OFFERS" :class="`nav-link ${isActive(ROUTE_CONSTS.OFFERS) ? 'formatik-active-link' : ''}`">
                        {{ t('HEADER_NAV_OUR_OFFERS') }}
                    </RouterLink>
                </li>
                <BButton pill class="header-btn secondary-btn">
                    {{ t('HEADER_NAV_SIGNIN') }}
                </BButton>
                <BButton pill class="header-btn accent-btn">
                    {{ t('HEADER_NAV_SIGNUP') }}
                </BButton>
                <!-- <customSelect 
                    v-model="selectedLang" 
                    :options="langOptions" 
                /> -->
            </BNav>
        </div>

        <!-- Navigation Menu -->
        <div :class="`mobile-menu ${isMenuOpen ? 'open-menu' : ''}`">
            <BNav class="mobile-menu-wrapper">
                <li class="nav-item" v-on:click="isMenuOpen = false">
                    <RouterLink :to="'/#whoAreWe'" :class="`nav-link ${isActive('#whoAreWe') ? 'formatik-active-link' : ''}`">
                    {{ t('HEADER_NAV_WHO_ARE_WE') }}
                    </RouterLink>
                </li>
                <li class="nav-item" v-on:click="isMenuOpen = false">
                    <RouterLink :to="'/#ourServices'" :class="`nav-link ${isActive('#ourServices') ? 'formatik-active-link' : ''}`">
                    {{ t('HEADER_NAV_WHAT_DO_WE_OFFER') }}
                    </RouterLink>
                </li>
                <li class="nav-item" v-on:click="isMenuOpen = false">
                    <RouterLink :to="'/#howToUse'" :class="`nav-link ${isActive('#howToUse') ? 'formatik-active-link' : ''}`">
                    {{ t('HEADER_NAV_HOW_TO_USE') }}
                    </RouterLink>
                </li>
                <li class="nav-item" v-on:click="isMenuOpen = false">
                    <RouterLink :to="ROUTE_CONSTS.OFFERS" :class="`nav-link ${isActive(ROUTE_CONSTS.OFFERS) ? 'formatik-active-link' : ''}`">
                        {{ t('HEADER_NAV_OUR_OFFERS') }}
                    </RouterLink>
                </li>
                <BButton pill class="header-btn secondary-btn">
                    {{ t('HEADER_NAV_SIGNIN') }}
                </BButton>
                <BButton pill class="header-btn accent-btn">
                    {{ t('HEADER_NAV_SIGNUP') }}
                </BButton>
            </BNav>
        </div>
    </div>
    <div v-if="isMenuOpen" class="backdrop-layer" v-on:click="isMenuOpen = false"></div>
</template>