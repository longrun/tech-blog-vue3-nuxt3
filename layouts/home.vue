<script lang="ts" setup>
const config = useRuntimeConfig();
useHead({
  title: config.TEAM_STATEMENT,
});
</script>

<template>
  <div>
    <Header />
    <div>
      <NavBar />
      <Related />
    </div>
    <Entries />
    <Featured />
    <Footer />
  </div>
</template>
