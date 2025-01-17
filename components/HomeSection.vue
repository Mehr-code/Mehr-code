<template>
  <div
    class="w-[100%] h-[500px] bg-primary-color mt-10 rounded-2xl relative overflow-hidden pt-8"
  >
    <img
      src="../assets/Pictures/Home/HeaderBG.svg"
      alt=""
      class="opacity-10 w-screen absolute scale-150 p-12"
    />

    <div class="w-full h-full flex flex-row">
      <div class="mt-32 ml-9">
        <h1 class="z-10 text-5xl text-secondary-color font-bold italic">
          Welcome To MehrCode<span class="text-accent-secondary">!</span>
        </h1>
        <h2 class="z-10 text-3xl font-thin mt-10 text-justify w-[550px]">
          This website began as a promise to my professor<span>,</span
          ><b> Dr<span>.</span>Pouria Khanzadi</b><span>,</span> to create a
          small project using software engineering principles<span>.</span> That
          promise brought MehrCode to life<span>—</span>my personal space to
          share and create<span>.</span>
        </h2>
      </div>
      <img
        src="../assets/Pictures/Home/Header.png"
        alt=""
        class="z-10 object-contain w-[580px]"
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
