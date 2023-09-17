<script setup lang="ts">
import clsx from "clsx";

interface CardProps {
  userClass?: string;
}

const props = defineProps<CardProps>();
</script>

<template>
  <div :class="clsx('block max-w-lg rounded-lg bg-white', userClass)">
    <slot />
  </div>
</template>
