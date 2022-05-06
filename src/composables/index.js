import axios from "axios";
import { ref } from "vue";

const url = "https://remotive.com/api/remote-jobs?limit=50";

export const useFetchJobs = () => {
  const totalJobs = ref([]);
  const error = ref(null);

  axios
    .get(url)
    .then((res) => (totalJobs.value = res.data.jobs))
    .catch((e) => (error.value = e.toJSON().message));

  return { totalJobs, error };
};

// Remotive Api doesn't provide an end-point for fetching a job by id directly :(
export const useFetchJob = (id) => {
  const job = ref({});
  const error = ref(null);

  axios
    .get(url)
    .then((res) => (job.value = res.data.jobs.find((j) => j.id === +id)))
    .catch((e) => (error.value = e.toJSON().message));

  return { job, error };
};
