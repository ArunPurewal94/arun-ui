<script setup lang="ts">
import clsx from "clsx";

interface CardLinksProps {
  userClass?: string;
  href?: string;
}

const props = defineProps<CardLinksProps>();
</script>

<template>
  <a
    :href="href"
    v-if="$slots.default"
    :class="
      clsx(
        'p-6 pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-blue-400 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-0 active:text-blue-700',
        userClass
      )
    "
  >
    <slot />
  </a>
</template>
