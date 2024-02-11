
<template>
    <div class="flex relative w-full req">

        <div class="flex flex-col w-full mr-6">
            <div>
                <div class="text-base flex flex-col font-bold text-indigo-950">
                    <p class="text-orange-600 text-lg font-bold my-6 text-center"> {{ $t("req") }}</p>
                    <div class="flex relative" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
                        <span>{{ $t("req1") }}</span>
                    </div>
                     <div class="flex relative mt-8" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
                        <span>{{ $t("req2") }}</span>
                    </div>
                     <div class="flex relative mt-8" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
                        <span>{{ $t("req3") }}</span>
                    </div>
                     <div class="flex relative mt-8" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
                        <span>{{ $t("req4") }}</span>
                    </div>
                     <div class="flex relative mt-8" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
                        <span>{{ $t("req5") }}</span>
                    </div>
                     <div class="flex relative mt-8" :class="head.htmlAttrs.dir === 'ltr' ? 'dot' : 'dot2'">
                        <span class="mx-4 rounded-full bg-orange-600"></span>
                        <span>{{ $t("req6") }}</span>
                    </div>
                </div>
            </div>
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
  