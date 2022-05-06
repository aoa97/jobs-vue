<template>
  <div class="container" v-show="pageNumbers.length > 1">
    <!-- Previous -->
    <div class="item" @click="setPrevPage">
      <span class="material-icons">chevron_left</span>
    </div>

    <!-- Pages -->
    <div
      class="item"
      :class="{ active: n === currentPage }"
      :key="n"
      v-for="n in pageNumbers"
      v-text="n"
      @click="setCurrentPage(n)"
    />

    <!-- Next -->
    <div class="item" @click="setNextPage">
      <span class="material-icons">chevron_right</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { filteredJobs, jobsPerPage, currentPage, setCurrentPage } from "@/store";

const pageNumbers = computed(() => {
  const total = filteredJobs.value.length;
  const perPage = jobsPerPage.value;

  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
});

const setNextPage = () => {
  if (currentPage.value !== pageNumbers.value.length) {
    setCurrentPage(currentPage.value + 1);
  }
};

const setPrevPage = () => {
  if (currentPage.value !== 1) {
    setCurrentPage(currentPage.value - 1);
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: flex-end;
  column-gap: 1.2rem;
  user-select: none;

  .item {
    border: 0.1rem solid $gray-2;
    border-radius: $radius;
    color: $gray;
    font-size: 1.2rem;
    font-family: $roboto;
    cursor: pointer;
    width: 3.6rem;
    height: 3.6rem;
    @include center;

    &:hover {
      border-color: $blue;
      color: $blue;
    }

    &.active {
      border: none;
      background-color: $blue;
      color: $white;
    }
  }
}
</style>
