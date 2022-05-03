<template>
  <router-link class="container" :to="{ name: 'job', params: { id: job.id } }">
    <img :src="job.company_logo" alt="Compay Logo" />

    <div class="right">
      <div class="data">
        <h5 v-text="job.company_name" />
        <h2 v-text="job.title" />

        <div class="tags">
          <span class="tag" v-text="job.category" />
          <span class="tag" v-text="jobType" />
        </div>
      </div>

      <div class="meta">
        <div
          class="meta-item"
          v-show="job.candidate_required_location.length > 0"
        >
          <span class="ico material-icons">public</span>
          <span
            class="text"
            v-text="location"
            :title="job.candidate_required_location"
          />
        </div>

        <div class="meta-item">
          <span class="ico material-icons">schedule</span>
          <span class="text" v-text="createdAt" />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import moment from "moment";
import _ from "lodash";
import { defineProps, computed } from "vue";

const props = defineProps(["job"]);

const createdAt = computed(() => {
  const date = props.job.publication_date;
  return moment(date).startOf('day').fromNow();
});

const jobType = computed(() => {
  const type = props.job.job_type;
  return _.startCase(type);
});

const location = computed(() => {
  const location = props.job.candidate_required_location;
  const locationArr = props.job.candidate_required_location.split(/&|,/); // Regex to have +1 separator
  return locationArr.length === 1 ? location : "Multiple Locations";
});
</script>

<style scoped lang="scss">
.container {
  @include card;
  @include spaceBetween;
  align-items: stretch;
  margin-bottom: 3.2rem;
  padding: 1.2rem;
  column-gap: 1.6rem;

  @include screen(376px) {
    flex-direction: column;
    row-gap: 1.5rem;
  }

  img {
    border-radius: $radius;
    align-self: flex-start;
    width: 91px;
    height: 91px;
    aspect-ratio: auto 91 / 91;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include screen(1095px) {
      flex-direction: column;
      row-gap: 1.5rem;
    }

    .data {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      color: $d-blue;
      height: fit-content;

      h5 {
        font-size: 1.2rem;
        font-weight: 700;
      }

      h2 {
        font-size: 1.8rem;
        font-weight: 400;
        margin-block: 0.8rem 1.2rem;
      }
    }

    .meta {
      align-self: flex-end;
      display: flex;
      column-gap: 2.85rem;
      row-gap: 0.5rem;
      flex-wrap: wrap;

      @include screen(405px) {
        width: 100%;
        align-self: stretch;
      }
    }
  }
}
</style>
