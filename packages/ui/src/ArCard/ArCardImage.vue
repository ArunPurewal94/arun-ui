<script setup lang="ts">
import clsx from "clsx";

interface CardImageProps {
  userClass?: string;
}

const props = defineProps<CardImageProps>();
</script>

<template>
  <div
    v-if="$slots.default"
    :class="clsx('relative overflow-hidden bg-cover bg-no-repeat', userClass)"
  >
    <slot />
  </div>
</template>
