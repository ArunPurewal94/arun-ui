<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <main>
    <Navbar />
    <Sidebar />
    <div class="mt-5">
      <RouterView />
    </div>
  </main>
</template>
