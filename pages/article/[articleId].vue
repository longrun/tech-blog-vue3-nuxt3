<template>
  <Header />
  <Categories />
  <Related />
  <Entry :articleId="$route.params.articleId" />
  <Footer />
</template>
