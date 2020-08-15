
export const INITIAL_STATE = {
  jobs:[],
  filterJobs: [],
}


export const JobsReducer = (state,action) => {
  switch(action.type){
    case 'ADD_JOBS':
      return {
        jobs: [...action.payload],
        filterJobs: [...state.filterJobs,...action.payload]
      }
    case 'ADD_FILTER_JOBS':
      return{
        ...state,
        filterJobs: [...state.filterJobs,...action.payload]
      }

    default:
      return state;
  }
}

