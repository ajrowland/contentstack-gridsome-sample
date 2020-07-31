<template>
  <section class="quote">
    <blockquote class="quote__text">
      <p v-html="text" />
    </blockquote>
    <cite class="quote__attribution">{{attribution}}, {{role}}</cite>
  </section>
</template>

<script>
export default {
  props: ["text", "attribution", "role"],
}
</script>

<style lang="scss">
.quote {
  background-color: #dcf1fa;
  border-radius: 0;
  padding: 20px 15px;
  margin-bottom: 20px;
  color: #000;

  &__text {
    p {
      font-size: 1.375em;
      position: relative;

      &:before,
      &:after {
        content: "\201d";
        font-size: 3.5rem;
        position: absolute;
        line-height: 1.4;
        color: #007dbb;
      }

      &:before {
        left: -30px;
        top: -20px;
      }

      &:after {
        margin-left: 5px;
        bottom: -30px;
        display: inline;
      }
    }
  }

  &__attribution {
    display: block;
    font-style: normal;
    font-weight: bold;
    padding: 0;
    text-transform: none;
    font-size: 0.9375em;
  }
}
</style>