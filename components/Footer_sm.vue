<template>
    <div class="footer flex flex-col justify-between items-center p-6 mt-4 border-2 border-t-[#eee] w-full">
        <div class="text-center w-full">
            <div class="text-lg font-semibold text-indigo-950">
                Contact Us
            </div>
            <div class="flex justify-between items-start mt-4">
                <div class="text-sm font-light text-neutral-500">
                    <p aria-label="Location">info@categate.com</p>
                </div>
                <div class="text-sm font-light text-neutral-500">
                    <p aria-label="Location"><a href="tel:00966530664125">00966-53-066-4125</a></p>
                </div>
            </div>
        </div>
        <div class="w-full">
            <div class="text-lg text-center font-semibold text-indigo-950 mt-6">
                Follow Us
            </div>
            <div class="flex items-center justify-evenly mt-4">
                <!-- <div>
                    <a target="_blank" href="">
                        <NuxtImg format="webp" src="/images/Linkedin.png" alt="image" />
                    </a>
                </div> -->
                <div>
                    <a target="_blank" href="https://twitter.com/CateringGateSA?t=PduNMMscGj5IA2omXEXj8A&s=08">
                        <NuxtImg class="w-[35px]" format="webp" src="/images/Twitter.png" alt="image" />
                    </a>
                </div>
                <!-- <div>
                    <a target="_blank" href="http://">
                        <NuxtImg format="webp" src="/images/Facebook.png" alt="image" />
                    </a>
                </div> -->
                <div>
                    <a target="_blank" href="https://t.snapchat.com/ezY8wcSX">
                        <NuxtImg class="w-[35px]" format="webp" src="/images/SnapChat.png" alt="image" />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.tiktok.com/@cateringgatesa?_t=8apRIHlkO13&_r=1">
                        <NuxtImg class="w-[35px]" format="webp" src="/images/Tiktok.png" alt="image" />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://wa.link/aknmvb">
                        <NuxtImg class="w-[35px]" format="webp" src="/images/Whatsapp.png" alt="image" />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://instagram.com/cateringgatesa?igshid=YmMyMTA2M2Y=">
                        <NuxtImg class="w-[35px]" format="webp" src="/images/Instagram.png" alt="image" />
                    </a>
                </div>
            </div>
        </div>



        <div class="text-base font-semibold text-indigo-950 flex flex-col items-center justify-between">
            <div class="flex items-center my-8">
                <NuxtImg format="webp" src="/images/cater.png" alt="logo"
                    class="object-center h-[90px] w-[90px] aspect-[2.86]" />
            </div>
            <div class="text-sm font-light text-neutral-500 text-center">
                <p aria-label="Location">Al Fayhaa district, Jeddah, Saudi Arabia</p>
                <p aria-label="Location">© Copyright 2024 </p>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    name: "Footer"
};
</script>