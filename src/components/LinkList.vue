<template>
  <section clas="link-list">
    <h2>{{heading}}</h2>
    <ul>
      <li v-for="link in links" :key="link.uid">
        <g-link :to="`/news/press-releases/${link.year}${link.url}`">{{link.title}}</g-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["heading", "links"],
}
</script>