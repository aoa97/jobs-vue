<template>
  <div class="container">
    <!-- Back to Search Link -->
    <router-link class="back" to="/">
      <span class="material-icons">trending_flat</span>
      Back to search
    </router-link>

    <!-- Apply -->
    <h3 class="heading">How To Apply</h3>
    <p>
      Please email a copy of your resume and online portfolio to
      <a href="mailto:hr@kasisto.com">hr@{{ company }}.com</a>
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["job"]);

const company = computed(() => {
  return props.job?.company_name?.toLowerCase();
});
</script>

<style scoped lang="scss">
.container {
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  height: fit-content;

  a.back {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;

    // Inner Text
    font-size: 1.4rem;
    font-weight: 500;
    font-family: $poppins;

    span {
      transform: rotate(180deg);
    }

    &:hover {
      color: $blue;
    }
  }

  h3 {
    margin-top: 3.6rem;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
    font-family: $poppins;

    a {
      color: $blue;
    }
  }
}
</style>
