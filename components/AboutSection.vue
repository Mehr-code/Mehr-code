<template>
  <!-- About Section -->
  <div class="mt-32 w-full mb-32 flex flex-col gap-10">
    <!-- Title -->
    <div class="w-full flex justify-center relative">
      <h2 class="md:text-4xl text-3xl text-primary-color font-bold z-20">
        Bits of Me<span>!</span>
      </h2>

      <!-- Ink -->
      <img
        src="../assets/Pictures/About/UnderLine.png"
        alt=""
        class="md:w-80 w-40 absolute md:top-[-20px] top-0 z-10"
      />
    </div>

    <!-- Content -->
    <div
      class="flex w-full relative md:flex-row flex-col justify-center items-center"
    >
      <!-- Khanzadi PIC -->
      <div class="md:w-1/2 h-full z-0">
        <!-- <img
          src="../assets/Pictures/About/khanzadiPic.png"
          alt=""
          class="w-[500px]"
        /> -->
        <NuxtImg
          preload
          src="../public/KhanzadiPIC.png"
          class="object-contain"
          alt="Important Pic"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>

      <!-- Items About me -->
      <div class="md:w-[50%] w-full p-8 flex flex-col gap-3">
        <!-- Item 1 -->
        <div class="w-full h-[33%] bg-primary-color rounded-xl p-5">
          <h4 class="text-accent-secondary font-bold md:text-2xl text-lg mb-3">
            Personal Info
          </h4>
          <p
            class="text-secondary-color font-thin md:text-xl text-base text-justify"
          >
            I'm a tech lover who enjoys building cool projects and keeping
            active with daily workouts.
          </p>
        </div>

        <!-- Item 2 -->
        <div class="w-full h-[33%] bg-primary-color rounded-xl p-5">
          <h4 class="text-accent-secondary font-bold md:text-2xl text-lg mb-3">
            Experience
          </h4>
          <p
            class="text-secondary-color font-thin md:text-xl text-base text-justify"
          >
            I'm a computer science student with a passion for coding. I share my
            journey and projects on Instagram, constantly exploring new
            technologies.
          </p>
        </div>

        <!-- Item 3 -->
        <div class="w-full h-[33%] bg-primary-color rounded-xl p-5">
          <h4 class="text-accent-secondary font-bold md:text-2xl text-lg mb-3">
            Future Goals
          </h4>
          <p
            class="text-secondary-color font-thin md:text-xl text-base text-justify"
          >
            My goal is to master LPIC-1 and LPIC-2, read more software
            engineering books like Somerville’s, and build even more projects.
          </p>
        </div>
      </div>

      <!-- Img Behind the items -->
      <img
        src="../assets/Pictures/About/InfoBG.png"
        alt=""
        class="opacity-15 absolute right-0 md:w-[50%] w-full md:top-[20px] bottom-0"
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
