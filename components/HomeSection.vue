<template>
  <!-- Home Section -->
  <div
    class="w-[100%] h-[500px] bg-primary-color mt-10 rounded-2xl relative overflow-hidden pt-8"
  >
    <!-- Main Content for Home -->
    <div
      class="w-full h-full flex md:flex-row relative flex-col justify-center items-center"
    >
      <!-- Backgroud -->
      <div
        class="absolute inset-0 bg-[url('~/assets/Pictures/Home/HeaderBG.svg')] bg-cover opacity-10"
      ></div>
      <!-- Text Content -->
      <div class="mt-10 w-full p-8 pb-0 pt-0">
        <h1
          class="z-10 lg:text-4xl text-secondary-color font-bold italic md:text-3xl text-2xl"
        >
          Welcome To MehrCode<span class="text-accent-secondary">!</span>
        </h1>
        <h2
          class="z-10 lg:text-2xl font-thin mt-10 text-justify text-xl w-full"
        >
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
        class="z-10 md:w-1/2 md:h-full w-64 h-64"
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
