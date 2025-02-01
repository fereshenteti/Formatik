<script setup>
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();
    const logo = new URL('/src/assets/LogoFormatic.png', import.meta.url).href
    const facebook = new URL('/src/assets/facebook.svg', import.meta.url).href
    const instagram = new URL('/src/assets/instagram.svg', import.meta.url).href
    const youtube = new URL('/src/assets/youtube.svg', import.meta.url).href
    const tiktok = new URL('/src/assets/tiktok.svg', import.meta.url).href
</script>

<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-list footer-social">
                <h4>{{ t('FOOTER_GET_IN_TOUCH') }}</h4>
                <div class="social-links">
                    <img :src="facebook"/>
                    <img :src="instagram"/>
                    <img :src="youtube"/>
                    <img :src="tiktok"/>
                </div>
            </div>
            <div class="footer-list ar">
                <h4>{{ t('FOOTER_LINKS') }}</h4>
                <a href="#"><p>{{ t('FOOTER_WHO_ARE_WE') }}</p></a>
                <a href="#"><p>{{ t('FOOTER_WHAT_DO_WE_OFFER') }}</p></a>
                <a href="#"><p>{{ t('FOOTER_HOW_TO_USE') }}</p></a>
                <a href="#"><p>{{ t('FOOTER_OUR_OFFERS') }}</p></a>
            </div>
            <div class="footer-list">
                <h4 class="legal-list-title">Legal</h4>
                <a href="#"><p>Terms of use</p></a>
                <a href="#"><p>Privacy policy</p></a>
                <a href="#"><p>Legal notice</p></a>
            </div>
            <div class="footer-list ar">
                <h4>{{ t('FOOTER_OUR_ADDRESS') }}</h4>
                <p>{{ t('FOOTER_ADDRESS') }}</p>
                <h4>{{ t('FOOTER_CALL_US') }}</h4>
                <p><span class="footer-label">{{ t('FOOTER_PHONE') }} : </span><span class="phone-number">56 09 50 68</span></p>
                <p><span class="footer-label">{{ t('FOOTER_EMAIL') }} : </span>formaticacademy@gmail.com</p>
            </div>
            <div class="footer-logo"><img :src="logo"/></div>
        </div>
        <div class="footer-copyright">{{ t('FOOTER_COPYRIGHT') }}</div>
    </footer>
</template>