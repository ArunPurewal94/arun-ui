<script setup lang="ts">
import { useSidebarStore } from "../store";

const store = useSidebarStore();

const toggleSidebar = () => {
  store.toggleSidebar();
};
</script>

<template>
  <nav class="p-5 flex items-center justify-between border-b shadow-sm">
    <button @click="toggleSidebar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
    </button>
    <h1 class="font-bold">@arun-purewal/ui</h1>
    <h1 class="font-semibold">Github</h1>
  </nav>
</template>
