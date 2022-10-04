<template>
  <header
    class="
      absolute
      flex
      justify-center
      items-center
      right-0
      shadow-sm
      h-16
      duration-100
    "
    :class="headerMainClass"
  >
    <div class="input_search relative flex items-center">
      <input
        type="text"
        class="ring-1 ring-slate-300 outline-none rounded-md py-1 px-3"
      />
      <a href="#" class="absolute right-3">
        <img src="../assets/icons/search.svg" />
      </a>
    </div>
  </header>
  <aside
    class="
      fixed
      bg-wht
      md:absolute
      shadow-md
      md:left-0
      h-screen
      duration-150
      overflow-hidden
    "
    :class="sidebarClass"
  >
    <div class="flex justify-end py-4 px-3">
      <button
        class="
          outline-none
          border-none
          fixed
          md:relative
          top-6
          left-4
          md:inset-0
        "
        @click="toggleSidebar = !toggleSidebar"
      >
        <img src="../assets/icons/align-justify.svg" />
      </button>
    </div>
    <nav class="mt-20">
      <ul class="flex flex-col">
        <li>
          <router-link
            to="/"
            active-class="bg-slate-200"
            class="flex gap-7 items-center px-6 py-3 hover:bg-slate-200"
          >
            <div class="flex justify-center items-center min-w-[32px]">
              <img src="../assets/icons/home.svg" />
            </div>
            Dasboard</router-link
          >
        </li>
        <li>
          <router-link
            to="/surveys"
            class="flex gap-7 items-center px-6 py-3 hover:bg-slate-200"
            active-class="bg-slate-200"
          >
            <div class="flex justify-center items-center min-w-[32px]">
              <img src="../assets/icons/list.svg" />
            </div>
            Survey</router-link
          >
        </li>
      </ul>
    </nav>
  </aside>
  <main class="absolute right-0 top-16 p-5" :class="headerMainClass">
    <router-view></router-view>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";

const toggleSidebar = ref(false);
const sidebarClass = computed(() => {
  return toggleSidebar.value
    ? "w-[254px] md:w-[254px]"
    : "w-0 md:w-[calc(32px+48px)]";
});
const headerMainClass = computed(() => {
  return toggleSidebar.value
    ? "w-full md:w-[calc(100%-254px)]"
    : "w-full  md:w-[calc(100%-84px)]";
});
</script>

<style>
</style>
