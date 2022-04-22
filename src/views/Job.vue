<template>
  <div class="container">
    <InfoSidebar />
    <JobDetails />
  </div>
</template>

<script setup>
import InfoSidebar from "../components/Job/InfoSidebar.vue";
import JobDetails from "../components/Job/JobDetails.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  column-gap: 3.2rem;

  @include screen(546px) {
    flex-direction: column;
  }
}
</style>
