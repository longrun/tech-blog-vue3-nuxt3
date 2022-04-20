<template>
  <div>
    <SiteHeader />
    <NavBar />

    <div class="grid grid-nogutter py-6 mx-auto" style="max-width: 1200px">
      <div class="col">
        <NuxtPage />
      </div>
      <aside class="col-fixed" style="width: 320px">
        <PopularArticles />
      </aside>
    </div>

    <SiteFooter />
  </div>
</template>
