<template>
  <Loader v-if="_.isEmpty(job)" />

  <div class="container" v-else>
    <InfoSidebar :job="job" />
    <JobDetails :job="job" />
  </div>
</template>

<script setup>
import _ from 'lodash'
import { useRoute } from "vue-router";
import { useFetchJob } from "@/composables";
import InfoSidebar from "../components/Job/InfoSidebar.vue";
import JobDetails from "../components/Job/JobDetails.vue";
import Loader from "../components/Loader.vue";

const route = useRoute();
const { job, error } = useFetchJob(route.params.id);

</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  column-gap: 3.2rem;

  @include screen(696px) {
    flex-direction: column;
  }
}
</style>
