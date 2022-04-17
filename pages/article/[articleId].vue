<template>
  <Header />
  <Categories />
  <Entry :articleId="$route.params.articleId" />
  <Footer />
</template>
