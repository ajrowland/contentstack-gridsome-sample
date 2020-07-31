<template>
  <section class="banner">
    <div class="banner__content">
      <h2 class="banner__heading" v-html="title" />
      <p class="banner__summary" v-html="summary" />
    </div>
    <content-image
      class="banner__image"
      :url="image.url"
      :alt="image.description"
      :width="1000"
      :height="450"
    />
  </section>
</template>

<style lang="scss">
.banner {
  position: relative;
  margin-bottom: 2em;

  &__content {
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #000;
    padding: 20px 20px 30px 20px;
  }

  &__heading,
  &__summary {
    color: #fff;
    margin: 0;
  }

  &__image {
    width: 100%;
    display: block;
  }
}
</style>

<script>
export default {
  props: ["title", "image", "summary"],
}
</script>