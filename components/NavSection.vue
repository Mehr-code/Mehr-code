<template>
  <!-- Nav Section -->
  <div class="flex w-full h-20 justify-between items-center">
    <!-- Logo -->
    <!-- <img
      src="../assets/Pictures/Nav/Logo.png"
      alt="Logo"
      class="object-contain h-20 w-20"
    /> -->
    <!-- Nav -->
    <nav class="flex flex-row justify-between w-full">
      <!-- Home -->
      <a href="#"
        ><NuxtImg
          src="../public/Home.png"
          alt="Home's Link"
          class="object-contain md:w-20 w-16"
      /></a>
      <!-- Blog -->
      <a href="#">
        <NuxtImg
          src="../public/Blog.png"
          alt="Blog's Link"
          class="object-contain md:w-20 w-16"
      /></a>
      <!-- About -->
      <a href="#">
        <NuxtImg
          src="../public/About.png"
          alt="About's Link"
          class="object-contain md:w-[100px] w-20"
      /></a>
      <!-- Contact -->
      <a href="#">
        <NuxtImg
          src="../public/Contact.png"
          alt="Contact's Link"
          class="object-contain md:w-32 w-[100px]"
      /></a>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped></style>
