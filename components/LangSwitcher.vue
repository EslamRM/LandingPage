<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
    <a class="bg-white hover:bg-gray-100 mx-3 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-3xl shadow"
        href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)">{{
            locale.name }}</a>
</template>