<template>
  <div
    class="w-[100%] h-[500px] bg-primary-color mt-16 rounded-2xl relative overflow-hidden"
  >
    <img
      src="../assets/Pictures/Home/HeaderBG.png"
      alt=""
      class="opacity-10 absolute scale-125 z-0"
    />
    <div class="w-full h-full flex flex-row">
      <div class="mt-32 ml-9">
        <h1 class="z-10 text-7xl text-secondary-color font-semibold">
          Welcome To MehrCode<span class="text-accent-secondary">!</span>
        </h1>
        <h2 class="z-10 text-4xl font-thin mt-10 text-justify">
          This website began as a promise to my professor<span>,</span> Dr<span
            >.</span
          >
          Pouria Khanzadi<span>,</span> to create a small project using software
          engineering principles<span>.</span> That promise brought MehrCode to
          life<span>—</span>my personal space to share and create<span>.</span>
        </h2>
      </div>
      <img src="../assets/Pictures/Home/Header.png" alt="" class="z-10" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
span {
  color: #ff5733;
}
</style>
