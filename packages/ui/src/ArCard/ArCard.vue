<script setup lang="ts">
import { defineProps } from "vue";
import clsx from "clsx";

interface CardProps {
  userClass?: string;
  image?: string;
  title?: string;
  description?: string;
  link?: string;
}

const props = withDefaults(defineProps<CardProps>(), {
  userClass: "",
  image: "",
  title: "",
  description: "",
  link: "",
});
</script>

<template>
  <div
    :class="
      clsx(
        'max-w-sm bg-white border border-gray-200 rounded-lg shadow',
        userClass
      )
    "
  >
    <a v-if="image" :href="link">
      <img class="rounded-t-lg" :src="image" alt="" />
    </a>
    <div class="p-5">
      <a v-if="title" :href="link">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ title }}
        </h5>
      </a>
      <p v-if="description" class="mb-3 font-normal text-gray-700">
        {{ description }}
      </p>
    </div>
  </div>
</template>
