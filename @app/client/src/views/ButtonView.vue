<script setup lang="ts">
import { ArButton } from "@arun-purewal/ui";
</script>

<template>
  <div class="p-5 space-y-5">
    <h1 class="text-center text-lg">ArButton</h1>

    <div>
      <div class="flex items-center space-x-5 p-5">
        <span>ArButton Default</span>
        <ArButton>Default</ArButton>
      </div>

      <pre class="bg-gray-800 rounded-lg p-4">
  <code class="text-sm sm:text-base flex justify-center items-center space-x-4 text-white">
    import { ArButton } from '@arun-purewal/ui';
    &lt;ArButton&gt;Default&lt;/ArButton&gt;
  </code>
</pre>
    </div>
    <div>
      <div class="flex items-center space-x-5 p-5">
        <span>ArButton Secondary</span>
        <ArButton variant="secondary">Secondary</ArButton>
      </div>

      <pre class="bg-gray-800 rounded-lg p-4">
  <code class="text-sm sm:text-base flex justify-center items-center space-x-4 text-white">
    import { ArButton } from '@arun-purewal/ui';
    &lt;ArButton variant="secondary"&gt;Secondary&lt;/ArButton&gt;
  </code>
</pre>
    </div>
    <div>
      <div class="flex items-center space-x-5 p-5">
        <span>ArButton Destructive</span>
        <ArButton variant="destructive">Destructive</ArButton>
      </div>

      <pre class="bg-gray-800 rounded-lg p-4">
  <code class="text-sm sm:text-base flex justify-center items-center space-x-4 text-white">
    import { ArButton } from '@arun-purewal/ui';
    &lt;ArButton variant="destructive"&gt;Destructive&lt;/ArButton&gt;
  </code>
</pre>
    </div>
  </div>
</template>
