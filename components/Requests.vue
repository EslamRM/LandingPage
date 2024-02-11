
<template>
    <div class="flex relative w-full req pt-24">

        <div class="flex flex-col items-end" :class="head.htmlAttrs.dir === 'ltr' ? 'ml-6 items-center' : 'mr-6'" >
            <div>
                <div class="text-xl xl:text-2xl flex flex-col font-bold text-indigo-950">
                    <p class="text-orange-600 text-2xl xl:text-3xl font-bold mb-8"> {{ $t("req") }}</p>
                    <div class="flex">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'mr-4' : 'ml-4'" class="rounded-full bg-orange-600 w-8 md:w-0 xl:w-8"></span>
                        <span>{{ $t("req1") }}</span>
                    </div>
                    <div class="flex mt-8">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'mr-4' : 'ml-4'" class="rounded-full bg-orange-600 w-8 md:w-0 xl:w-8"></span>
                        <span>{{ $t("req2") }}</span>
                    </div>
                    <div class="flex mt-8">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'mr-4' : 'ml-4'" class="rounded-full bg-orange-600 w-8 md:w-0 xl:w-8"></span>
                        <span>{{ $t("req3") }}</span>
                    </div>
                    <div class="flex mt-8">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'mr-4' : 'ml-4'" class="rounded-full bg-orange-600 w-8 md:w-0 xl:w-8"></span>
                        <span>{{ $t("req4") }}</span>
                    </div>
                    <div class="flex mt-8">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'mr-4' : 'ml-4'" class="rounded-full bg-orange-600 w-8 md:w-0 xl:w-8"></span>
                        <span>{{ $t("req5") }}</span>
                    </div>
                    <div class="flex mt-8">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'mr-4' : 'ml-4'" class="rounded-full bg-orange-600 w-8 md:w-0 xl:w-8"></span>
                        <span>{{ $t("req6") }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <img class="absolute-image" src="/images/reqimg.webp" alt="requests image" />
        </div>
    </div>
</template>
<script>
export default {
    name: "Requests",
    props: ['head']
};
</script>
<style>
.req {
    max-width: 100%;
}

.absolute-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
  