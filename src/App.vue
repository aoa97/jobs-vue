<template>
  <router-view />

  <footer>created by @aoa97 - devChallenges.io</footer>
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

html {
  font-size: 10px;
  color: $d-blue;
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

  footer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 3rem;
    text-align: center;
    font-family: $montserrat;
    font-size: 1.4rem;
    font-weight: 700;
    color: $gray;
  }
}
</style>
