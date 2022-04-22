<template>
  <router-link
    class="container"
    :to="{ name: 'job', params: { id: job.id, job: job }, props: true }"
  >
    <img :src="job.company_logo" alt="Compay Logo" />

    <div class="right">
      <div class="data">
        <h5>{{ job.company_name }}</h5>
        <h2>{{ job.title }}</h2>
        <div class="tag">{{ job.category }}</div>
      </div>

      <div class="meta">
        <div class="meta-item">
          <span class="ico material-icons">public</span>
          <span class="text">{{ job.candidate_required_location }}</span>
        </div>
        <div class="meta-item">
          <span class="ico material-icons">schedule</span>
          <span class="text">5 days ago</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
const { job } = defineProps(["job"]);
</script>

<style scoped lang="scss">
.container {
  @include card;
  @include spaceBetween;
  align-items: stretch;
  margin-bottom: 3.2rem;
  padding: 1.2rem;
  column-gap: 1.6rem;

  @include screen(323px) {
    flex-direction: column;
    row-gap: 1.5rem;
  }

  img {
    border-radius: $radius;
    align-self: flex-start;
  }

  .right {
    flex: 1;
    @include spaceBetween;

    @include screen(949px) {
      flex-direction: column;
      row-gap: 1.5rem;
    }

    .data {
      align-self: flex-start;
      color: $d-blue;

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
