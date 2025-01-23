<template>
  <!-- Nav Section -->
  <div class="flex w-full h-20 justify-between items-center">
    <!-- Nav -->
    <nav class="flex flex-row justify-between w-full bg-secondary-color pt-3">
      <!-- Logo -->
      <div class="w-[10%] items-center flex">
        <NuxtImg
          preload
          src="../public/Logo3.png"
          class="w-28"
          alt="Logo"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>
      <!-- Links -->
      <div class="w-[80%] flex flex-row justify-around items-center">
        <!-- Home -->

        <a
          @click="scrollToSection('Home')"
          class="font-bold md:text-3xl text-accent-primary text-lg"
        >
          Home</a
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
      </div>
      <!-- Options -->
      <div class="w-[10%] flex flex-row justify-around items-center">
        <NuxtImg
          preload
          src="../public/Lang.png"
          class="w-10 h-10"
          alt="Language Swittcher"
          :placeholder="[50, 25, 75, 5]"
        />
        <NuxtImg
          preload
          src="../public/DarkMode.png"
          class="w-10 h-10"
          alt="Language Swittcher"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>
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
