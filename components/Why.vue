
<template>
    <div class="why pt-24 bg-[url('/images/whyimg.webp')]">
        <div class="flex w-[70%] flex-col items-end" :class="head.htmlAttrs.dir === 'ltr' ? 'items-center w-[80%]' : ''">
            <div>
                <div class="text-xl xl:text-2xl flex flex-col font-bold text-indigo-950">
                    <p class="text-orange-600 text-2xl xl:text-3xl font-bold mb-8">{{ $t("why") }}</p>
                    <div class="flex">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-4' : ''" class="ml-4 rounded-full bg-orange-600 w-8"></span>
                        <span>{{ $t("why1") }}</span>
                    </div>
                    <div class="flex mt-8">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-4' : ''" class="ml-4 rounded-full bg-orange-600 w-8"></span>
                        <span>{{ $t("why2") }}</span>
                    </div>
                    <div class="flex mt-8">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-4' : ''" class="ml-4 rounded-full bg-orange-600 w-8"></span>
                        <span>{{ $t("why3") }}</span>
                    </div>
                    <div class="flex mt-8">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-4' : ''" class="ml-4 rounded-full bg-orange-600 w-8"></span>
                        <span>{{ $t("why4") }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Why",
    props: ['head']
};
</script>
<style>
.why {
    max-width: 100%;
    height: 635px;
    background-repeat: no-repeat;
    background-size: 1000px;
    background-position-y: top;
    background-position-x: right;
}
</style>
  