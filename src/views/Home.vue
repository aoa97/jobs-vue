<template>
  <Loader v-if="totalJobs?.length === 0" />

  <h1 v-if="error">{{ error }}</h1>

  <div v-else>
    <!-- Brand -->
    <h1>Remotive <span>Jobs</span></h1>

    <!-- Header With Form -->
    <Header />

    <!-- Content -->
    <div class="content">
      <FilterSidebar />
      <JobList :jobs="pageJobList" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import { totalJobs, pageJobList, error } from "@/store";
import Header from "../components/Home/Header.vue";
import FilterSidebar from "../components/Home/FilterSidebar.vue";
import JobList from "../components/Home/JobList.vue";
import Loader from "../components/Loader.vue";
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
  gap: 3.2rem;

  @include screen(696px) {
    flex-direction: column;
  }
}
</style>
