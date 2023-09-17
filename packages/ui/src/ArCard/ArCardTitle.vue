<script setup lang="ts">
import clsx from "clsx";

interface CardTitleProps {
  userClass?: string;
}

const props = defineProps<CardTitleProps>();
</script>

<template>
  <h5
    v-if="$slots.default"
    :class="
      clsx(
        'my-2 text-xl font-medium leading-tight text-neutral-800 text-center',
        userClass
      )
    "
  >
    <slot />
  </h5>
</template>
