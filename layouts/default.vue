<template>
  <div>
    <Header />
    <NavBar />

    <div class="grid grid-nogutter py-6 mx-auto" style="max-width: 1200px">
      <div class="col">
        <NuxtPage />
      </div>
      <aside class="col-fixed" style="width: 320px">
        <PopularArticles />
      </aside>
    </div>

    <Footer />
  </div>
</template>
