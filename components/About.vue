<template>
    <div class="section1 bg-[url('/images/styleimg.webp')]">
        <header class=" text-2xl xl:text-3xl font-bold text-center text-indigo-950 p-24">
            <span class="text-orange-600"> {{ $t("title") }}</span>
            <span class="text-indigo-950">{{ $t("title2") }}</span>
        </header>
        <div :class="head.htmlAttrs.dir === 'ltr' ? 'justify-evenly' : ''" class="flex flex-col items-center">
            <div class="flex justify-center items-center w-full">
                <div :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-16' : ''"
                    class="md:self-baseline w-1/5 text-center ml-16 text-xl xl:text-2xl font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                    {{ $t("vision") }}</div>
                <div class="w-full xl:w-2/6 text-xl xl:text-2xl font-bold text-indigo-950">{{ $t("vision_desc") }}</div>
            </div>
            <div class="flex justify-center w-full mt-16">
                <div :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-16' : ''"
                    class="md:self-baseline w-1/5 text-center ml-16 text-xl xl:text-2xl font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                    {{ $t("message") }}</div>
                <div class="w-full xl:w-2/6 text-xl xl:text-2xl font-bold text-indigo-950">
                    {{ $t("message_desc") }}
                </div>
            </div>
            <div class="flex justify-center w-full mt-16">
                <div :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-16' : ''"
                    class="md:self-baseline w-1/5 text-center ml-16 text-xl xl:text-2xl font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                    {{ $t("goals") }}</div>
                <div class="w-full xl:w-2/6 text-xl xl:text-2xl flex flex-col font-bold text-indigo-950">
                    <div class="flex">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-4' : ''" class="ml-4 rounded-full bg-orange-600 w-[25px] h-[25px]"></span>
                        <span>{{ $t("g1") }}</span>
                    </div>
                    <div class="flex mt-4">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-4' : ''" class="ml-4 rounded-full bg-orange-600 w-[25px] h-[25px]"></span>
                        <span>{{ $t("g2") }}</span>
                    </div>
                    <div class="flex mt-4">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-4' : ''" class="ml-4 rounded-full bg-orange-600 w-[25px] h-[25px]"></span>
                        <span>{{ $t("g2") }}</span>
                    </div>
                    <div class="flex mt-4">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-4' : ''" class="ml-4 rounded-full bg-orange-600 w-[25px] h-[25px]"></span>
                        <span>{{ $t("g3") }}</span>
                    </div>
                    <div class="flex mt-4">
                        <span :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-4' : ''" class="ml-4 rounded-full bg-orange-600 w-[25px] h-[25px]"></span>
                        <span>{{ $t("g4") }}</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full mt-16">
                <div :class="head.htmlAttrs.dir === 'ltr' ? 'ml-0 mr-16' : ''"
                    class="md:self-baseline w-1/5 text-center ml-16 text-xl xl:text-2xl font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                    {{ $t("service") }}</div>
                <div class="w-full xl:w-2/6 text-xl xl:text-2xl font-bold text-indigo-950">
                    {{ $t("service_desc") }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "About",
    props: ['head']
};
</script>
<style>
.section1 {
    max-width: 100%;
    background-repeat: no-repeat;
    background-size: 500px;
    background-position: left;
}

.gradient {
    background: rgb(54, 22, 74);
    background: linear-gradient(90deg, rgba(54, 22, 74, 1) 50%, rgba(228, 64, 68, 1) 100%);
}
</style>
  