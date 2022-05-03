<template>
  <div class="loader" v-if="state.jobs.length === 0">
    <img src="@/assets/loader.gif" alt="" width="380" height="380" />
  </div>

  <div v-else>
    <!-- Brand -->
    <h1>Github <span>Jobs</span></h1>

    <!-- Header With Form -->
    <Header />

    <!-- Content -->
    <div class="content">
      <FilterSidebar />
      <JobList :jobs="state.jobs" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
import Header from "../components/Home/Header.vue";
import FilterSidebar from "../components/Home/FilterSidebar.vue";
import JobList from "../components/Home/JobList.vue";

const state = reactive({
  jobs: [],
});

axios
  .get("https://remotive.com/api/remote-jobs?category=software-dev")
  .then((res) => (state.jobs = res.data.jobs));
</script>

<style scoped lang="scss">
h1 {
  font-weight: 700;
  font-size: 2.4rem;
  font-family: $poppins;
  color: $brand-color;

  span {
    font-weight: 300;
  }
}

div.content {
  display: flex;
  column-gap: 3.2rem;

  @include screen(546px) {
    flex-direction: column;
  }
}

div.loader {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
