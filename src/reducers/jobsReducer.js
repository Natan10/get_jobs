
export const INITIAL_STATE = {
  jobs:[]
}


export const JobsReducer = (state,action) => {
  switch(action.type){
    case 'ADD_JOBS':
      return {
        jobs: [...action.payload]
      }
    default:
      return state;
  }
}

