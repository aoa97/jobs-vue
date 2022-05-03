<template>
  <div class="container">
    <!-- List -->
    <div class="jobs">
      <JobListItem v-for="job in jobs" :key="job.id" :job="job" />
    </div>

    <!-- Pagination -->
    <Pagination />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import JobListItem from "./JobListItem.vue";
import Pagination from "./Pagination.vue";

const props = defineProps(['jobs'])
</script>

<style scoped lang="scss">
.container {
  flex: 1;
}
</style>
