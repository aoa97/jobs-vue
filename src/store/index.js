import _ from "lodash";
import axios from "axios";
import { computed, ref } from "vue";
import { useFetchJobs } from "@/composables";

const { totalJobs, error } = useFetchJobs();
const filteredJobs = ref([]);
const filters = ref({}); // Sel filters from sidebar
const currentPage = ref(1);
const jobsPerPage = ref(10);

// Filtering & Paginating
const pageJobList = computed(() => {
  // Convert filters obj to an array & clear filters with no value [Otherwise causes problems with proxies]
  const filtersArr = Object
    .entries(filters.value)
    .filter((x) => x[1]?.length > 0);

  const result = totalJobs.value.filter((job) => {
    return filtersArr.every(([k, v]) => {
      // SearchBar Value
      if (k === "search") {
        return (
          job.title.toLowerCase().includes(v.toLowerCase()) ||
          job.company_name.toLowerCase().includes(v.toLowerCase())
        );
      }
      // Checkboxes [Multiple Values]
      return v.includes(job[k]);
    });
  });

  // List to be paginated
  const isNoFilters = Object.values(filters.value).every((v) => _.isEmpty(v));
  filteredJobs.value = isNoFilters ? totalJobs.value : result;

  // Pagination stuff
  const indexOfLastJob = currentPage.value * jobsPerPage.value;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage.value;

  return filteredJobs.value.slice(indexOfFirstJob, indexOfLastJob);
});

// Setters
const setFilters = (val) => {
  filters.value = val;
};

const setCurrentPage = (val) => {
  currentPage.value = val;
};

export {
  totalJobs,
  error,
  filteredJobs,
  jobsPerPage,
  currentPage,
  pageJobList,
  filters,
  setFilters,
  setCurrentPage,
};
