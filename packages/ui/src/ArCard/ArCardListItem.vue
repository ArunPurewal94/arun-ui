<script setup lang="ts">
import clsx from "clsx";

interface CardListItemProps {
  userClass?: string;
}

const props = defineProps<CardListItemProps>();
</script>

<template>
  <li
    v-if="$slots.default"
    :class="
      clsx(
        'w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3',
        userClass
      )
    "
  >
    <slot />
  </li>
</template>
