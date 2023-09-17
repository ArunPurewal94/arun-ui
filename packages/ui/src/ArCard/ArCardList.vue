<script setup lang="ts">
import clsx from "clsx";

interface CardListProps {
  userClass?: string;
}

const props = defineProps<CardListProps>();
</script>

<template>
  <ul v-if="$slots.default" :class="clsx('w-full', userClass)">
    <slot />
  </ul>
</template>
