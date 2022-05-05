<template>
  <div class="sidebar">
    <!-- Job Type -->
    <div class="filter-item">
      <h3 class="heading">Job Type</h3>
      <label
        class="time"
        :key="type"
        v-for="type in jobTypes"
        v-show="type.length > 0"
      >
        <input type="checkbox" :value="type" v-model="state.job_type" />
        {{ _.startCase(type) }}
      </label>
    </div>

    <!-- Category -->
    <div class="filter-item">
      <h3 class="heading">Job Category</h3>
      <label
        class="time"
        :key="cat"
        v-for="cat in jobCats"
        v-show="cat.length > 0"
      >
        <input type="checkbox" :value="cat" v-model="state.category" />
        {{ cat }}
      </label>
    </div>
  </div>
</template>

<script setup>
import _ from "lodash";
import { reactive, watch } from "vue";
import { filters, setFilters } from "@/store";
import { jobTypes, jobCats } from "@/utils";

const state = reactive({
  job_type: [],
  category: [],
});

watch(() => ({ ...state }), (newFilters) => {
    setFilters({...filters.value, ...newFilters });
  }
);
</script>

<style scoped lang="scss">
.sidebar {
  flex-basis: 25%;
  @include card;
  padding: 1.8rem;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .filter-item {
    width: 100%;
    margin-bottom: 1.5rem;

    .heading {
      margin-bottom: 1.4rem;
    }

    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      column-gap: 1.2rem;
      font-size: 1.4rem;
      font-weight: 500;
      font-family: $poppins;
      color: $d-blue;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
