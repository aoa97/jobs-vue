import { reactive, computed, ref } from "vue";
import axios from "axios";

const totalJobs = ref([]);
const filters = ref({});

const url = "https://remotive.com/api/remote-jobs?limit=300";
axios.get(url).then((res) => (totalJobs.value = res.data.jobs));

// Filtered Jobs
const filteredJobs = computed(() => {
  // Convert filters obj to an array & remove filters with no value
  const filtersArr = Object.entries(filters.value).filter(
    (x) => x[1]?.length > 0
  );

  const result = totalJobs.value.filter((job) => {
    return filtersArr.every(([k, v]) => {
      // SearchBar
      if (k === "search") {
        return (
          job["title"].toLowerCase().includes(v.toLowerCase()) ||
          job["company_name"].toLowerCase().includes(v.toLowerCase())
        );
      }
      // Checkboxes [Multiple Values]
      return v.includes(job[k]);
    });
  });

  return result;
});

// Setters
const setFilters = (val) => {
  filters.value = val;
};

export { totalJobs, filteredJobs, filters, setFilters };
