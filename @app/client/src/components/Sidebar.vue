<script setup lang="ts">
import { computed } from "vue";
import { useSidebarStore } from "../store";

const store = useSidebarStore();

const isSidebarOpen = computed(() => store.isSidebarOpen);

const closeSidebar = () => {
  store.toggleSidebar();
};
</script>

<template>
  <aside
    v-if="isSidebarOpen"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white shadow border-r"
    aria-label="Sidebar"
  >
    <div class="flex items-center justify-between p-4">
      <h2 class="text-lg font-semibold">@arunpurewal/ui</h2>
      <button
        @click="closeSidebar"
        class="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Close sidebar</span>
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <ul class="py-2">
      <li>
        <router-link
          @click="closeSidebar"
          to="/"
          class="block px-4 py-2 text-gray-900 hover:bg-gray-100"
        >
          Introduction
        </router-link>
      </li>
      <h4 class="mt-5 text-gray-500 border-b p-3 font-bold">Components</h4>
      <li>
        <router-link
          @click="closeSidebar"
          to="/button"
          class="block px-4 py-2 text-gray-900 hover:bg-gray-100"
        >
          ArButton
        </router-link>
      </li>
    </ul>
  </aside>
</template>
