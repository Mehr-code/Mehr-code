<template>
  <div class="bg-secondary-color w-full h-full pr-52 pl-52 pt-6 pb-32">
    <NavSection />
    <HomeSection />
    <BlogSection />
    <AboutSection />
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  head: {
    link: [
      {
        rel: "preload",
        href: "../assets/Pictures/Home/HeaderBG.webp",
        as: "image",
      },
    ],
  },
});
</script>

<style scoped></style>
