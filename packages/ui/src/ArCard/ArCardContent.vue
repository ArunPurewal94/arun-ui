<script setup lang="ts">
import clsx from "clsx";

interface CardContentProps {
  userClass?: string;
}

const props = defineProps<CardContentProps>();
</script>

<template>
  <p
    v-if="$slots.default"
    :class="clsx('text-base text-neutral-600 text-center p-2', userClass)"
  >
    <slot />
  </p>
</template>
