<template>
  <section class="section">
    <h2 v-if="heading" v-html="heading" />
    <div v-if="images" class="image image--float">
      <content-image
        v-for="(image, i) in images"
        :url="image.url"
        :alt="image.description"
        :width="320"
        :height="180"
        :key="i"
      />
    </div>
    <div v-html="content"></div>
  </section>
</template>

<script>
export default {
  props: ["heading", "content", "images"],
}
</script>