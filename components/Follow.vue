
<template>
    <div class="pt-24 bg-[url('/images/follow.webp')]">
        <div class="flex ml-11 xl:ml-24 flex-col h-[32rem]"
            :class="head.htmlAttrs.dir === 'ltr' ? 'ml-11 items-start' : 'items-end '">
            <div>
                <div class="mt-24 text-xl xl:text-2xl flex flex-col font-bold text-indigo-950">
                    <p class="text-orange-600 text-2xl xl:text-3xl font-bold mb-8">{{ $t("follow") }}</p>
                    <div class="">
                        <p>{{ $t("f1") }}</p>
                        <p>{{ $t("f1_") }}</p>
                    </div>
                    <div class="mt-4">
                        <p class="">{{ $t("f2") }}</p>
                        <p>{{ $t("f2_") }}</p>
                    </div>
                    <div class="mt-4">
                        <p class="">{{ $t("f3") }}</p>
                        <p>{{ $t("f3_") }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center w-full mt-36">
            <div :class="head.htmlAttrs.dir === 'ltr' ? 'ml-3 lg:ml-16' : 'mr-3 lg:mr-16'"
                class=" w-1/4 lg:w-1/5 text-center text-xl xl:text-2xl font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                {{ $t("adv") }}</div>
            <div class="text-xl xl:text-2xl font-bold text-indigo-950 mt-16"
                :class="head.htmlAttrs.dir === 'ltr' ? 'ml-3 lg:ml-16' : 'mx-3 lg:mx-16'">
                <p>{{ $t("adv_desc") }}</p>
            </div>
        </div>
        <div class="flex flex-col justify-center w-full h-[35rem] bg-[url('/images/follow.webp')">
            <div :class="head.htmlAttrs.dir === 'ltr' ? 'ml-3 lg:ml-16' : 'mr-3 lg:mr-16'"
                class=" w-1/4 lg:w-1/5 text-center text-xl xl:text-2xl font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                {{ $t("down") }}</div>

            <div class="mt-24 mr-0 xl:mr-6 2xl:mr-16 flex flex-col md:items-center xl:items-start"
                :class="head.htmlAttrs.dir === 'ltr' ? 'ml-16 xl:items-end' : 'xl:items-start'">
                <div class="my-4"><a target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.sellotion.catering">
                        <NuxtImg quality="100" format="webp" class="w-[365px]" src="/images/gp.png" alt="" />
                    </a></div>
                <div class="my-4"><a target="_blank" href="https://apps.apple.com/us/app/catering-gate/id6443517673">
                        <NuxtImg quality="100" format="webp" class="w-[365px]" src="/images/as.png" alt="" />
                    </a></div>
            </div>
        </div>
        <div class="h-32"></div>
    </div>
</template>
<script>
export default {
    name: "Follow",
    props: ["head"],
};
</script>
<style></style>
  