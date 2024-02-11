<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
  <div>
    <div class="hidden md:block">
      <Header />
      <Banner />
      <About :head="head" />
      <Why :head="head" />
      <Requests :head="head" />
      <Follow :head="head" />
    </div>
    <div class="hidden lg:block">
      <Footer :head="head" />
    </div>
    <div class="block md:hidden">
      <Header />
      <Banner />
      <AboutSm :head="head" />
      <WhySm :head="head" />
      <ReqSm :head="head" />
      <FollowSm :head="head" />
    </div>
    <div class="block lg:hidden">
      <FooterSm />
    </div>
  </div>

  </Html>
</template>

<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
useHead({
  title: 'CATERING GATE',
  meta: [
    { name: 'description', content: 'Comprehensive Professional Platform Specialized in enabling customers to browse, compare products, and place food orders for all their public and private events' }
  ]
})
</script>