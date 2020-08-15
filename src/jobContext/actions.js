export const AddJobs = (jobs) => {
  return {
    type: 'ADD_JOBS',
    payload: jobs,
  }
}

export const AddFilterJobs = (jobs) => {
  return {
    type: 'ADD_FILTER_JOB',
    payload: jobs,
  }
}