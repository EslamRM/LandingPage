<template>
  <header class="bg-white py-2 px-6 flex justify-between items-center">
    <!-- Right side: Button -->
    <div class="flex justify-between items-center">
      <a target="_blank" href="https://admin.cateringgate.co/">
        <button class="gradient text-white font-bold py-2 px-8 rounded-2xl">
          {{ $t("inter") }}
        </button>
      </a>

      <LangSwitcher />
    </div>
    <!-- Left side: Icon -->
    <div class="flex items-center">
      <NuxtImg format="webp" src="/images/logo.png" alt="logo" class="object-center aspect-[2.86] w-[200px]" />
    </div>


  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
