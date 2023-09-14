<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";

interface Props {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive";
  size?: "small" | "medium" | "large";
  extraClasses?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "medium",
});

const variantClasses = {
  default: "bg-indigo-600 text-white hover:bg-indigo-600/90",
  secondary: "bg-slate-900 text-white hover:bg-slate-900/80",
  outline: "border hover:bg-gray-900 hover:text-white",
  ghost: "hover:bg-slate-900 hover:text-white",
  link: "text-gray-900 underline-offset-4 hover:underline",
  destructive: "bg-red-600 text-white hover:bg-red-600/90",
};

const sizeClasses = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

const buttonClass = computed(() =>
  clsx(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.extraClasses
  )
);
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
