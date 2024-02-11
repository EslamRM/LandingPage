
<template>
    <div>
        <div><NuxtImg format="webp" src="/images/sm1.png" class="w-full" alt="" /></div>
        <div class="flex flex-col mr-6 mb-11">
            <div>
                <div class="text-base flex flex-col font-bold text-indigo-950">
                    <p class="text-orange-600 text-lg font-bold mb-8 text-center">{{ $t("why") }}</p>
                    <div class="flex relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
                        <span>{{ $t("why1") }}</span>
                    </div>
                    <div class="flex mt-8 relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
                        <span>{{ $t("why2") }}</span>
                    </div>
                    <div class="flex mt-8 relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
                        <span>{{ $t("why3") }}</span>
                    </div>
                    <div class="flex mt-8 relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
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
<style></style>
  