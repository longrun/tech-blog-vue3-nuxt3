<script lang="ts" setup>
// TODO change dynamic
const navLinks = [
  { tagid: "development", title: "Development" },
  { tagid: "operation", title: "Operation" },
  { tagid: "cafebreak", title: "CafeBreak☕️" },
  { tagid: "culture", title: "Culture🦄" },
];
</script>

<template>
  <nav class="card nav__categories py-2 pl-6">
    <div class="card-container flex flex-wrap">
      <div
        v-for="navLink in navLinks"
        class="flex-initial flex align-items-center justify-content-center text-white border-round px-3 py-2 mr-2"
      >
        <NuxtLink :to="`/category/${navLink.tagid}`">{{
          navLink.title
        }}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav__categories {
  background-color: var(--surface-0);
  font-size: 1.2rem;

  a {
    color: var(--text-color);
  }

  a:hover {
    color: var(--text-color);
  }
}
</style>
