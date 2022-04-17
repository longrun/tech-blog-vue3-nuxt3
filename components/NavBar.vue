<script lang="ts" setup>
const navLinks = [
  { slug: "developmpent", title: "Development" },
  { slug: "operation", title: "Operation" },
  { slug: "cafebreak", title: "CafeBreak☕️" },
  { slug: "culture", title: "Culture🦄" },
];
</script>
<template>
  <nav class="card nav__categories py-2 pl-6">
    <div class="card-container flex flex-wrap">
      <div
        v-for="navLink in navLinks"
        class="flex-initial flex align-items-center justify-content-center text-white border-round px-3 py-2 mr-2"
      >
        <a :href="`/category/${navLink.slug}`" no-prefetch>{{
          navLink.title
        }}</a>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.nav__categories {
  background-color: var(--surface-0);
  font-size: 1.2rem;
}
.nav__categories a {
  color: var(--surface-700);
}
.nav__categories a:hover {
  color: var(--surface-600);
}
</style>
