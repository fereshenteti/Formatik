<script setup>
    import { useI18n } from "vue-i18n";
    import { ROUTE_CONSTS } from '@/router.js';
    import { store } from '@/store';

    const { t } = useI18n();
    const logo = new URL('/src/assets/LogoFormatic.png', import.meta.url).href
    const facebook = new URL('/src/assets/facebook.svg', import.meta.url).href
    const instagram = new URL('/src/assets/instagram.svg', import.meta.url).href
    const youtube = new URL('/src/assets/youtube.svg', import.meta.url).href
    const tiktok = new URL('/src/assets/tiktok.svg', import.meta.url).href
</script>

<template>
    <footer class="footer">
        <div :class="`footer-container ${store.lang === 'ar' ? 'rtl' : ''}`">
            <div class="footer-logo"><img :src="logo"/></div>
            <div class="footer-list footer-address">
                <h4>{{ t('FOOTER_OUR_ADDRESS') }}</h4>
                <p>{{ t('FOOTER_ADDRESS') }}</p>
                <h4>{{ t('FOOTER_CALL_US') }}</h4>
                <p><span class="footer-label">{{ t('FOOTER_PHONE') }} : </span><span class="phone-number">56 09 50 68</span></p>
                <p><span class="footer-label">{{ t('FOOTER_EMAIL') }} : </span>formaticacademy@gmail.com</p>
            </div>
            <!-- <div class="footer-list">
                <h4 class="legal-list-title">Legal</h4>
                <a href="#"><p>Terms of use</p></a>
                <a href="#"><p>Privacy policy</p></a>
                <a href="#"><p>Legal notice</p></a>
            </div> -->
            <div class="footer-list footer-links">
                <h4>{{ t('FOOTER_LINKS') }}</h4>
                <RouterLink to="/" class="nav-link">
                    {{ t('FOOTER_WHO_ARE_WE') }}
                </RouterLink>
                <RouterLink to="/" class="nav-link">
                    {{ t('FOOTER_WHAT_DO_WE_OFFER') }}
                </RouterLink>
                <RouterLink to="/" class="nav-link">
                    {{ t('FOOTER_HOW_TO_USE') }}
                </RouterLink>
                <RouterLink :to="ROUTE_CONSTS.OFFERS" class="nav-link">
                    {{ t('FOOTER_OUR_OFFERS') }}
                </RouterLink>
            </div>
            <div class="footer-list footer-social">
                <h4>{{ t('FOOTER_GET_IN_TOUCH') }}</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com/profile.php?id=61551638202391" target="_blank">
                        <img :src="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/formatic.academy" target="_blank">
                        <img :src="instagram"/>
                    </a>
                    <a href="https://www.youtube.com/@Formaticacademy" target="_blank">
                        <img :src="youtube"/>
                    </a>
                    <a href="https://www.tiktok.com/@formatic.academy" target="_blank">
                        <img :src="tiktok"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">{{ t('FOOTER_COPYRIGHT') }}</div>
    </footer>
</template>