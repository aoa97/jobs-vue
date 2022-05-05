import axios from "axios";
import { reactive, toRefs } from "vue";

const url = "https://remotive.com/api/remote-jobs?limit=300";

// Unfortunatelly remotive Api doesn't provide an end-point for fetching a job by id directly :(
export const useFetchJob = (id) => {
  const state = reactive({
    job: null,
    error: null,
  });

  axios
    .get(url)
    .then((res) => (state.job = res.data.jobs.find((j) => j.id === +id)))
    .catch((e) => (state.error = e));

  return toRefs(state);
};
