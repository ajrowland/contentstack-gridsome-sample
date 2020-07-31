<template>
  <section class="accordion">
    <h2>{{title}}</h2>
    <ul class="accordion__list">
      <li v-for="(item, i) in items" @click="item.isopen = !item.isopen" :key="i">
        <h3 class="accordion__heading" v-html="item.heading" />
        <div :class="{'active': item.isopen}" class="accordion__item" v-html="item.content" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.accordion {
  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__heading {
    cursor: pointer;
  }

  &__item {
    display: none;

    &.active {
      display: block;
    }
  }
}
</style>

<script>
export default {
  props: ["title", "group"],
  data() {
    return {
      items: this.group.map((item) => {
        this.$set(item, "isopen", false)
        return item
      }),
    }
  },
}
</script>