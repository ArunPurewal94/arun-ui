<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";

interface Props {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "icon"
    | "destructive";
  size?: "small" | "medium" | "large";
  extraClasses?: string; // New prop for extra classes
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "medium",
});

const variantClasses = {
  default: "bg-blue-500 text-white rounded",
  secondary: "bg-green-500 text-white rounded",
  outline: "border border-blue-500 text-blue-500 rounded",
  ghost: "text-blue-500",
  icon: "p-0",
  destructive: "bg-red-500 text-white rounded",
};

const sizeClasses = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

const buttonClass = computed(
  () =>
    clsx(
      "btn",
      variantClasses[props.variant],
      sizeClasses[props.size],
      props.extraClasses
    ) // Include extra classes
);
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
