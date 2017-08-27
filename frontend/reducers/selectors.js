import { values } from 'lodash';

export const selectDoctors = state => values(state.doctors);
