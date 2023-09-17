<script setup lang="ts">
import {
  ArCard,
  ArCardImage,
  ArCardTitle,
  ArCardContent,
  ArCardList,
  ArCardListItem,
  ArCardLinks,
} from "@arun-purewal/ui";
</script>

<template>
  <div class="p-5 space-y-5">
    <h1 class="text-center text-lg">ArCard</h1>
    <div>
      <div class="flex items-center justify-center space-x-5 p-5">
        <ArCard userClass="shadow hover:shadow-lg">
          <ArCardImage userClass="rounded-t-lg">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg"
            />
          </ArCardImage>
          <ArCardTitle> ArCard Title </ArCardTitle>
          <ArCardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
            nesciunt quasi eum suscipit veniam natus vero animi esse, veritatis
            maxime earum tenetur labore maiores! Architecto sapiente placeat
            molestiae nihil iure!
          </ArCardContent>
          <ArCardList>
            <ArCardListItem> List Item One </ArCardListItem>
            <ArCardListItem> List Item Two </ArCardListItem>
            <ArCardListItem> List Item Three </ArCardListItem>
          </ArCardList>
          <ArCardLinks href="/card"> Link One </ArCardLinks>
          <ArCardLinks href="/card"> Link Two </ArCardLinks>
          <ArCardLinks href="/card"> Link Three </ArCardLinks>
        </ArCard>
      </div>

      <pre class="bg-gray-800 rounded-lg p-4">
  <code class="text-sm sm:text-base flex justify-center items-center space-x-4 text-white">
    import { ArCard, ArCardImage, ArCardTitle, ArCardContent, ArCardList, ArCardListItem, ArCardLinks } from '@arun-purewal/ui';
    &lt;ArCard userClass="shadow hover:shadow-lg"&gt;
      &lt;ArCardImage userClass="rounded-t-lg"&gt;
        &lt;img src=" Your Image Src " /&gt;
      &lt;/ArCardImage&gt;
      &lt;ArCardTitle&gt; ArCard Title &lt;/ArCardTitle&gt;
      &lt;ArCardContent&gt;
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
        nesciunt quasi eum suscipit veniam natus vero animi esse, veritatis
        maxime earum tenetur labore maiores! Architecto sapiente placeat
        molestiae nihil iure!
      &lt;/ArCardContent&gt;
      &lt;ArCardList&gt;
        &lt;ArCardListItem&gt; List Item One &lt;/ArCardListItem&gt;
        &lt;ArCardListItem&gt; List Item Two &lt;/ArCardListItem&gt;
        &lt;ArCardListItem&gt; List Item Three &lt;/ArCardListItem&gt;
      &lt;/ArCardList&gt;
      &lt;ArCardLinks href="/"&gt; Link One &lt;/ArCardLinks&gt;
      &lt;ArCardLinks href="/"&gt; Link Two &lt;/ArCardLinks&gt;
      &lt;ArCardLinks href="/"&gt; Link Three &lt;/ArCardLinks&gt;
    &lt;/ArCard&gt;
  </code>
</pre>
    </div>
  </div>
</template>
