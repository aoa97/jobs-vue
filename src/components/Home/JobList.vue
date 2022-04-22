<template>
  <div class="container">
    <!-- List -->
    <div class="jobs">
      <JobListItem v-for="job in state.jobs" :key="job.id" :job="job" />
    </div>

    <!-- Pagination -->
    <Pagination />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
import JobListItem from "./JobListItem.vue";
import Pagination from "./Pagination.vue";

const state = reactive({
  jobs: [],
});

axios
  .get("https://remotive.com/api/remote-jobs?category=software-dev")
  .then((res) => (state.jobs = res.data.jobs));
</script>

<style scoped lang="scss">
.container {
  flex: 1;
}
</style>
