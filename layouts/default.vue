<template>
  <div>
    <Header />
    <NavBar />
    <div class="grid grid-nogutter py-6 mx-auto" style="max-width: 1200px">
      <NuxtPage class="col-9" />
      <PopularArticles class="col-3" />
    </div>
    <Footer />
  </div>
</template>
