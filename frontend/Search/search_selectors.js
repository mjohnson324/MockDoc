import { values } from 'lodash';
import { getDoctorItems } from '../Doctors/doctor_selectors';

export const sortAppointmentsByDoctor = (doctors, appointments) => {
  const sortedAppointments = {};
  doctors.forEach(doctor => {
    sortedAppointments[doctor.id] = getDoctorItems(
      appointments, doctor.appointment_ids
    );
  });
  return sortedAppointments;
};

export const selectDoctors = doctors => values(doctors);