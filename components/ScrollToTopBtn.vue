<template>
  <div
    ref="scrollTopButton"
    class="invisible sticky w-full flex justify-start bottom-0 pb-3 pl-3 transition"
  >
    <div class="text-gray-400 hover:text-blue-400 transition">
      <img
        width="64"
        height="64"
        src="../public/Scroll-Up.png"
        alt="circled-up-2"
        @click="scrollToTop"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const scrollTopButton = ref(null);

const handleScroll = () => {
  if (window.scrollY > 0) {
    scrollTopButton.value?.classList.remove("invisible");
  } else {
    scrollTopButton.value?.classList.add("invisible");
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
