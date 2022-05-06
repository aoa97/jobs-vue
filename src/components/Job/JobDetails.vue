<template>
  <div class="container">
    <div class="job-title">
      <h2 v-text="job.title" />

      <div>
        <span class="tag" v-text="job.category" />
        <span class="tag" v-text="jobType" v-show="jobType.length" />
      </div>
    </div>

    <div class="meta-item">
      <span class="ico material-icons">schedule</span>
      <span class="text" v-text="createdAt" />
    </div>

    <div class="post">
      <div class="data">
        <img :src="job.company_logo" alt="Company Image" />

        <div class="comp-title">
          <h3>{{ job.company_name }}</h3>

          <div class="meta-item">
            <span class="ico material-icons">public</span>
            <span class="text" v-text="job.candidate_required_location" />
          </div>
        </div>
      </div>

      <p v-html="job.description"></p>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import _ from "lodash";
import { computed } from "vue";

const props = defineProps(["job"]);

const createdAt = computed(() => {
  const date = props.job.publication_date;
  return moment(date).fromNow();
});

const jobType = computed(() => {
  const type = props.job.job_type;
  return _.startCase(type);
});
</script>

<style scoped lang="scss">
.container {
  flex-basis: 75%;
  display: flex;
  flex-direction: column;

  .job-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1.7rem;
    margin-bottom: 1rem;

    h2 {
      font-family: $roboto;
      font-size: 2.4rem;
      font-weight: 700;
    }

    @include screen(891px) {
      align-items: flex-start;
      flex-direction: column;
      row-gap: 2rem;
      margin-bottom: 2rem;
      margin-top: 3.6rem;
    }
  }

  .post {
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .data {
      display: flex;
      column-gap: 1.2rem;
      margin-bottom: 3.2rem;

      img {
        border-radius: $radius;
        width: 46px;
        height: 46px;
      }

      .comp-title {
        display: flex;
        flex-direction: column;
        column-gap: 1rem;

        h3 {
          font-family: $poppins;
          font-size: 1.8rem;
          font-weight: 700;
        }
      }
    }

    p {
      text-align: justify;
    }
  }

  @include screen(546px) {
    .job-title {
      margin-top: 3.6rem;
    }
  }
}
</style>
