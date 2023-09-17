<script setup lang="ts">
import { ArCard } from "@arun-purewal/ui";
</script>

<template>
  <div class="p-5 space-y-5">
    <h1 class="text-center text-lg">ArCard</h1>
    <div>
      <div class="flex items-center justify-center space-x-5 p-5">
        <ArCard
          image="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
          title="My Title"
          description="My Description"
          link="/card"
        />
      </div>

      <pre class="bg-gray-800 rounded-lg p-4">
  <code class="text-sm sm:text-base flex justify-center items-center space-x-4 text-white">
    import { ArCard } from '@arun-purewal/ui';
    &lt;ArCard image="image src" title="My Title" description="My Description" link="path for link" /&gt;
  </code>
</pre>
    </div>
  </div>
</template>
