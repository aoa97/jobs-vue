<template>
  <div class="container">
    <InfoSidebar :job="state.job" />
    <JobDetails :job="state.job" />
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import InfoSidebar from "../components/Job/InfoSidebar.vue";
import JobDetails from "../components/Job/JobDetails.vue";

const route = useRoute();
const state = reactive({
  job: {},
});

// Get Job Details
axios
  .get("https://remotive.com/api/remote-jobs?category=software-dev")
  .then((res) => {
    state.job = res.data.jobs.find((j) => j.id === +route.params.id);
  });
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
