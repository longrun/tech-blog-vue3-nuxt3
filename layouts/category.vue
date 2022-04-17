<template>
  <div>
    <Header />
    <div>
      <NavBar />
      <Related />
    </div>
    <CategoryEntries :categoryId="$route.params.categoryId" />
    <Featured />
    <Footer />
  </div>
</template>
