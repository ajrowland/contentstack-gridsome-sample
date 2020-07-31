<template>
  <img :src="contentstackUrl" :alt="alt" />
</template>

<script>
export default {
  props: ["url", "alt", "width", "height"],
  computed: {
    contentstackUrl() {
      return `${this.url}?width=${this.width}&height=${this.height}&fit=crop&auto=webp`
    }
  }
}
</script>