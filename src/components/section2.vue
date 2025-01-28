<script setup>
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();
</script>

<template>
    <section class="section">
        <div class="section2">
            <div class="section2-card">
                <h2 class="section-title">{{ t('HOME_SECTION2_CARD_TITLE') }}</h2>
                <p>{{ t('HOME_SECTION2_CARD_DESCRIPTION1') }} <span>{{ t('HOME_SECTION2_CARD_DESCRIPTION2') }}</span> {{ t('HOME_SECTION2_CARD_DESCRIPTION3') }}</p>
                <BButton pill class="accent-btn">{{ t('HOME_SECTION2_CARD_BUTTON') }}</BButton>
            </div>
        </div>
    </section>
</template>