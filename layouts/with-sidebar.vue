<template>
  <div>
    <SiteHeader />
    <NavBar />
    <div class="grid grid-nogutter mx-auto" style="max-width: 1200px">
      <div class="col-12 lg:col-9">
        <NuxtPage />
      </div>
      <aside class="col-12 lg:col-3">
        <PopularArticles />
      </aside>
    </div>
    <SiteFooter />
  </div>
</template>
