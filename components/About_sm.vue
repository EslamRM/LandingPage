
import type { Style } from '#build/components';
<template>
    <div class="section1 bg-[url('/images/styleimg.webp')]">
        <header class="text-2xl font-bold text-center text-indigo-950 my-6">
            <span class="text-orange-600"> {{ $t("title") }}</span>
            <span class="text-indigo-950">{{ $t("title2") }}</span>
        </header>
        <div class="flex flex-col items-center h-[1030px] text-center">
            <div class="flex justify-center flex-col items-center w-full mt-11">
                <div
                    class="md:self-baseline mb-11 w-[300px] text-center text-lg font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                    {{ $t("vision") }}</div>
                <div class="text-lg font-bold text-indigo-950">{{ $t("vision_desc") }}</div>
            </div>
            <div class="flex flex-col items-center justify-center w-full mt-11">
                <div
                    class="md:self-baseline mb-11 w-[300px] text-center text-lg font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                    {{ $t("message") }}</div>
                <div class="text-lg font-bold text-indigo-950">
                    {{ $t("message_desc") }}
                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-full mt-11">
                <div
                    class="md:self-baseline mb-11 w-[300px] text-center text-lg font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                    {{ $t("goals") }}</div>
                <div class="text-lg flex w-full items-start flex-col font-bold text-indigo-950">
                    <div class="flex items-center mt-4 relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="rounded-full bg-orange-600 mx-4"></span>
                        <span>{{ $t("g1") }}</span>
                    </div>
                    <div class="flex items-center mt-4 relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="rounded-full bg-orange-600 mx-4"></span>
                        <span>{{ $t("g2") }}</span>
                    </div>
                    <div class="flex items-center mt-4 relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="rounded-full bg-orange-600 mx-4"></span>
                        <span>{{ $t("g3") }}</span>
                    </div>
                    <div class="flex items-center mt-4 relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="rounded-full bg-orange-600 mx-4"></span>
                        <span>{{ $t("g3") }}</span>
                    </div>
                    <div class="flex items-center mt-4 relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="rounded-full bg-orange-600 mx-4"></span>
                        <span>{{ $t("g4") }}</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-full mt-11">
                <div
                    class="md:self-baseline mb-11 w-[300px] text-center text-lg font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                    {{ $t("service") }}</div>
                <div class="text-lg font-bold text-indigo-950">
                    {{ $t("service_desc") }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "About",
    props: ["head"]
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

.dot::before {
    content: "";
    position: absolute;
    left: 5px;
    width: 20px;
    height: 20px;
    background-color: #FF5722;
    border-radius: 50%;
}
.dot2::before {
    content: "";
    position: absolute;
    right: 5px;
    width: 20px;
    height: 20px;
    background-color: #FF5722;
    border-radius: 50%;
}
</style>
  