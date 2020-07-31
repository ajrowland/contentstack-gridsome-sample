<template>
  <section class="contact-details">
    <h2>Contact details</h2>
    <p>Name: {{name}}</p>
    <p>
      Email:
      <a :href="`mailto:${email}`">{{email}}</a>
    </p>
    <p v-html="address" />
  </section>
</template>

<script>
export default {
  props: ["name", "email", "address"]
}
</script>