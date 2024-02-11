<template>
    <div class="footer flex justify-around items-center p-6 mt-4 border-2 border-t-[#eee] w-full">

        <div>
            <div class="text-left text-base font-semibold text-indigo-950">
                Follow Us
            </div>
            <div class="flex items-center justify-between mt-4">
                <!-- <div class="mx-2">
                    <a target="_blank" href=""><NuxtImg format="webp" src="/images/l.png" alt="image" /></a>
                </div> -->
                <div class="mx-2">
                    <a target="_blank" href="https://twitter.com/CateringGateSA?t=PduNMMscGj5IA2omXEXj8A&s=08">
                        <NuxtImg class="w-[25px]" format="webp" src="/images/x.png" alt="image" />
                    </a>
                </div>
                <!-- <div class="mx-2">
                    <a target="_blank" href="http://"><NuxtImg format="webp" src="/images/f.png" alt="image" /></a>
                </div> -->
                <div class="mx-2">
                    <a target="_blank" href="https://t.snapchat.com/ezY8wcSX">
                        <NuxtImg class="w-[25px]" format="webp" src="/images/Snap.png" alt="image" />
                    </a>
                </div>
                <div class="mx-2">
                    <a target="_blank" href="https://www.tiktok.com/@cateringgatesa?_t=8apRIHlkO13&_r=1">
                        <NuxtImg class="w-[25px]" format="webp" src="/images/Tik.png" alt="image" />
                    </a>
                </div>
                <div class="mx-2">
                    <a target="_blank" href="https://wa.link/aknmvb">
                        <NuxtImg class="w-[25px]" format="webp" src="/images/Whats.png" alt="image" />
                    </a>
                </div>
                <div class="mx-2">
                    <a target="_blank" href="https://instagram.com/cateringgatesa?igshid=YmMyMTA2M2Y=">
                        <NuxtImg class="w-[25px]" format="webp" src="/images/Inst.png" alt="image" />
                    </a>
                </div>
            </div>
        </div>
        <div class="text-left">
            <div class="text-base font-semibold text-indigo-950">
                Contact Us
            </div>
            <div class="flex justify-center items-start mt-4">
                <div class="text-sm font-light text-neutral-500" :class="head.htmlAttrs.dir === 'ltr' ? 'mr-3' : 'ml-3'">
                    <p aria-label="Location">info@categate.com</p>
                </div>
                <div class="text-sm font-light text-neutral-500">
                    <p aria-label="Location"><a href="tel:00966530664125">00966-53-066-4125</a></p>
                </div>
            </div>
        </div>


        <div class="text-base font-semibold text-indigo-950 flex items-center justify-between">

            <div class="text-sm font-light text-neutral-500 text-left ml-4">
                <p aria-label="Location">Al Fayhaa district, Jeddah, Saudi Arabia</p>
                <p aria-label="Location">© Copyright 2024</p>
            </div>
            <div class="flex items-center">
                <NuxtImg format="webp" src="/images/logo.png" alt="logo"
                    class="object-center w-[200px]" />
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "Footer",
    props: ["head"],

};
</script>