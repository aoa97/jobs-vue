import { computed } from "vue";
import { totalJobs } from "@/store";

export const jobTypes = computed(() => {
  return new Set(totalJobs.value.map((j) => j.job_type));
});

export const jobCats = computed(() => {
  return new Set(totalJobs.value.map((j) => j.category));
});
