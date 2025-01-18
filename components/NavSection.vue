<template>
  <!-- Nav Section -->
  <div class="flex w-full h-20 justify-between items-center">
    <!-- Logo -->
    <img
      src="../assets/Pictures/Nav/Logo.png"
      alt="Logo"
      class="object-contain h-20 w-20"
    />
    <!-- Nav -->
    <nav class="flex flex-row justify-between xl:w-[50%] md:w-[70%]">
      <!-- Home -->
      <a href="#"
        ><NuxtImg
          src="../public/Home.png"
          alt="Home's Link"
          class="object-contain w-20"
      /></a>
      <!-- Blog -->
      <a href="#">
        <NuxtImg
          src="../public/Blog.png"
          alt="Blog's Link"
          class="object-contain w-20"
      /></a>
      <!-- About -->
      <a href="#">
        <NuxtImg
          src="../public/About.png"
          alt="About's Link"
          class="object-contain w-[100px]"
      /></a>
      <!-- Contact -->
      <a href="#">
        <NuxtImg
          src="../public/Contact.png"
          alt="Contact's Link"
          class="object-contain w-32"
      /></a>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped></style>
