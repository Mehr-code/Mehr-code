<template>
  <!-- Home Section -->
  <div
    class="w-[100%] h-[500px] bg-primary-color mt-10 rounded-2xl relative overflow-hidden pt-8"
  >
    <!-- Main Content for Home -->
    <div class="w-full h-full flex flex-row relative">
      <div
        class="absolute inset-0 bg-[url('~/assets/Pictures/Home/HeaderBG.svg')] bg-cover opacity-10"
      ></div>
      <!-- Text Content -->
      <div class="mt-10 ml-9 w-[70%]">
        <h1
          class="z-10 lg:text-5xl text-secondary-color font-bold italic md:text-3xl"
        >
          Welcome To MehrCode<span class="text-accent-secondary">!</span>
        </h1>
        <h2 class="z-10 lg:text-3xl md:text-2xl font-thin mt-10 text-justify">
          This website began as a promise to my professor<span>,</span
          ><b> Dr<span>.</span>Pouria Khanzadi</b><span>,</span> to create a
          small project using software engineering principles<span>.</span> That
          promise brought MehrCode to life<span>—</span>my personal space to
          share and create<span>.</span>
        </h2>
      </div>

      <!-- My PIC -->
      <NuxtImg
        preload
        src="../public/Header.png"
        class="z-10 w-[50%]"
        alt="Important Pic"
        :placeholder="[50, 25, 75, 5]"
      />
    </div>
  </div>
</template>

<script setup>
// Component for Backgroud IMG for Header
import headerBG from "~/assets/Pictures/Home/HeaderBG.svg";
</script>

<style scoped>
span {
  color: #ff5733;
}
</style>
