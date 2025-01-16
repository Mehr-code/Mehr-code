<template>
  <!-- About Section -->
  <div class="mt-32 w-full mb-32 flex flex-col gap-10">
    <!-- Title -->
    <div class="w-full flex justify-center relative">
      <h2 class="text-primary-color text-5xl font-bold z-10">
        Bits of Me<span>!</span>
      </h2>

      <!-- Ink -->
      <img
        src="../assets/Pictures/About/UnderLine.png"
        alt=""
        class="w-80 z-0 absolute top-[-20px]"
      />
    </div>

    <!-- Content -->
    <div class="flex w-full relative">
      <!-- Khanzadi PIC -->
      <div class="w-[50%]">
        <img
          src="../assets/Pictures/About/khanzadiPic.png"
          alt=""
          class="w-[500px]"
        />
      </div>
      <!-- Items About me -->
      <div class="w-[50%] p-8 flex flex-col gap-3">
        <!-- Item 1 -->
        <div class="w-full h-[33%] bg-primary-color rounded-xl p-5">
          <h4 class="text-accent-secondary font-bold text-2xl mb-3">
            Personal Info
          </h4>
          <p class="text-secondary-color font-thin text-xl text-justify">
            I'm a tech lover who enjoys building cool projects and keeping
            active with daily workouts.
          </p>
        </div>

        <!-- Item 2 -->
        <div class="w-full h-[33%] bg-primary-color rounded-xl p-5">
          <h4 class="text-accent-secondary font-bold text-2xl mb-3">
            Experience
          </h4>
          <p class="text-secondary-color font-thin text-xl text-justify">
            I'm a computer science student with a passion for coding. I share my
            journey and projects on Instagram, constantly exploring new
            technologies.
          </p>
        </div>

        <!-- Item 3 -->
        <div class="w-full h-[33%] bg-primary-color rounded-xl p-5">
          <h4 class="text-accent-secondary font-bold text-2xl mb-3">
            Future Goals
          </h4>
          <p class="text-secondary-color font-thin text-xl text-justify">
            My goal is to master LPIC-1 and LPIC-2, read more software
            engineering books like Somerville’s, and build even more projects.
          </p>
        </div>
      </div>

      <!-- Img Behind the items -->
      <img
        src="../assets/Pictures/About/InfoBG.png"
        alt=""
        class="opacity-15 absolute right-0 w-[50%] top-[-40px]"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
span {
  color: #ff5733;
}
</style>
