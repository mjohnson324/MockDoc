import { getDoctors } from './doctor_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter) => {
  return {
    type: UPDATE_FILTER,
    filter
  };
};

export const updateFilter = (filter) => (dispatch, getState) => {
  dispatch(changeFilter(filter));
  return getDoctors(getState().filter)(dispatch);
};
