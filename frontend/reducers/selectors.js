import { values } from 'lodash';

export const selectDoctors = state => values(state.doctors);

export const selectAppointments = state => values(state.appointments);
