<template>
  <!-- Nav Section -->
  <div class="flex w-full h-20 justify-between items-center">
    <!-- Nav -->
    <nav class="flex flex-row justify-between w-full">
      <!-- Home -->
      <a
        @click="scrollToSection('Home')"
        class="font-bold text-3xl text-accent-primary"
        >Home</a
      >
      <!-- Blog -->
      <a
        @click="scrollToSection('Blog')"
        class="font-bold text-3xl text-accent-primary"
      >
        Blog</a
      >
      <!-- About -->
      <a
        @click="scrollToSection('About')"
        class="font-bold text-3xl text-accent-primary"
      >
        About Him</a
      >
      <!-- Contact -->
      <a
        @click="scrollToSection('Contact')"
        class="font-bold text-3xl text-accent-primary"
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
