<template>
  <router-view />
</template>

<script setup></script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style-type: "- ";
  list-style-position: inside;
}
html {
  font-size: 10px;
  color: $d-blue;
  scroll-behavior: smooth;
}
body {
  font-size: 1.4rem;
  font-weight: 400;
  font-family: $roboto;
  background: $body-color;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 3.2rem 12rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @include screen(1256px) {
    padding-inline: 5rem;
  }
  @include screen(1041px) {
    padding-inline: 2rem;
  }
}
</style>
