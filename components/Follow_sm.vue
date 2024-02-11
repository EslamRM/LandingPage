
<template>
    <div class="">
        <div class="flex flex-col justify-center mr-6 mt-11">
            <div>
                <div class="text-base flex flex-col font-bold text-indigo-950">
                    <p class="text-orange-600 text-lg font-bold mb-8 text-center">{{ $t("follow") }}</p>
                    <div class="">
                        <div class="flex relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                            <span class="mx-4 rounded-full bg-orange-600"></span>
                            <div>
                                <p>{{ $t("f1") }}</p>
                                <p>{{ $t("f1_") }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="flex relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                            <span class="mx-4 rounded-full bg-orange-600"></span>
                            <div>
                                <p class="">{{ $t("f2") }}</p>
                                <p>{{ $t("f2_") }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="flex relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                            <span class="mx-4 rounded-full bg-orange-600"></span>
                            <div>
                                <p class="">{{ $t("f3") }}</p>
                                <p>{{ $t("f3_") }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-11">
            <NuxtImg format="webp" class="w-full" src="/images/sm2.png" alt="" />
        </div>

        <div class="flex flex-col items-center justify-center w-full mt-11">
            <div class=" w-[300px] text-center text-lg font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                {{ $t("adv") }}</div>
            <div class="text-lg font-bold text-indigo-950 m-4">
                {{ $t("adv_desc") }}
            </div>
        </div>
        <div class="flex flex-col items-center justify-center w-full mt-11">
            <div class=" w-[300px] text-center text-lg font-bold gradient text-white font-bold py-3 px-8 rounded-full">
                {{ $t("down") }}</div>
            <div class="mt-11">
                <NuxtImg format="webp" class="w-full" src="/images/sm3.png" alt="" />
            </div>

            <div class="flex flex-col justify-center items-center">
                <div class="my-4"><a target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.sellotion.catering">
                        <NuxtImg format="webp" class="w-[365px]" src="/images/gp.png" alt="" />
                    </a></div>
                <div class="my-4"><a target="_blank" href="https://apps.apple.com/us/app/catering-gate/id6443517673">
                        <NuxtImg format="webp" class="w-[365px]" src="/images/as.png" alt="" />
                    </a></div>
            </div>
        </div>
        <div class="h-32"></div>
    </div>
</template>
<script>
export default {
    name: "Follow",
    props: ['head']
};
</script>
<style></style>
  