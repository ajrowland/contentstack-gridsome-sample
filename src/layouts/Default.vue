<template>
  <div class="layout">
    <header class="header">
      <div class="container header__container">
        <g-link to="/" title="Home">Home</g-link>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <div class="container">© Contentstack Demo 2020</div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  display: flex;
  flex-direction: column;
  background: $colour-white;
  color: $colour-grey;
  padding: 0;
  margin: 0;
  font-family: UnileverShilling, Arial, Helvetica, sans-serif;
  line-height: 1;

  @include mq($from: tablet) {
    border-top: 34px solid $colour-purple;
  }
}

.header {
  border-bottom: 1px solid $colour-blue-light;

  &__container {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  &__logo {
    width: 56px;
    height: 61px;
    display: inline-block;
    margin: 20px 0px;
    fill: $colour-blue-dark;

    @include mq($from: tablet) {
      width: 67px;
      height: 73px;
      margin: 20px 13px;
    }
  }
}

.container,
main {
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 0.9375em;
  padding-right: 0.9375em;
}

main {
  flex-grow: 1;
  line-height: 1.6;
  padding-top: 10px;
  padding-bottom: 40px;
  font-size: 15px;

  @include mq($from: tablet) {
    padding-top: 30px;
    padding-bottom: 80px;
    font-size: 17px;
  }

  h1,
  h2 {
    font-family: UnileverShillingBold, Arial, Helvetica, sans-serif;
    color: $colour-blue-dark;
  }

  h1 {
    line-height: 1;
    font-weight: normal;
    font-size: 34px;

    @include mq($from: tablet) {
      font-size: 42px;
    }
  }

  h2 {
    color: $colour-blue-light;
    font-size: 34px;
  }

  .intro p {
    font-family: UnileverShillingMedium, Arial, Helvetica, sans-serif;
    font-size: 17px;

    @include mq($from: tablet) {
      font-size: 20px;
    }
  }
}

footer {
  padding: 50px 0 100px;
  color: $colour-white;
  background: $colour-blue-light;
  font-size: 14px;
}
</style>
