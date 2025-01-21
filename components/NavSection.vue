<template>
  <!-- Nav Section -->
  <div class="flex w-full h-20 justify-between items-center">
    <!-- Nav -->
    <nav class="flex flex-row justify-between w-full">
      <!-- Home -->
      <a
        @click="scrollToSection('Home')"
        class="font-bold md:text-3xl text-accent-primary text-lg"
        >Home</a
      >
      <!-- Blog -->
      <a
        @click="scrollToSection('Blog')"
        class="font-bold md:text-3xl text-accent-primary text-lg"
      >
        Blog</a
      >
      <!-- About -->
      <a
        @click="scrollToSection('About')"
        class="font-bold md:text-3xl text-accent-primary text-lg"
      >
        About Him</a
      >
      <!-- Contact -->
      <a
        @click="scrollToSection('Contact')"
        class="font-bold md:text-3xl text-accent-primary text-lg"
      >
        Contact Him</a
      >
    </nav>
  </div>
</template>

<script setup>
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
  font-family: "Rock Salt";
}
</style>
