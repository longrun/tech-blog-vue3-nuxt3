<template>
  <div>
    <Header />
    <div>
      <NavBar />
      <Related />
    </div>
    <Entry :articleId="$route.params.articleId" />
    <Featured />
    <Footer />
  </div>
</template>
