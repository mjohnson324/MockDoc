class Api::AppointmentsController < ApplicationController
  before_action :require_logged_in, only: [:update]

  def index

    doctors = Doctor.near(params[:address], 30).includes(:specialties)

    doc_ids = doctors.select do |doctor|
      doctor.specialties.pluck(:name).include?(params[:specialty])
    end.pluck(:id)

    @appointments = Appointment.where(doctor_id: doc_ids, patient_id: nil)
  end

  def update
    @appointment = Appointment.find(params[:id])

    if @appointment.update(appointment_params)
      render :show
    else
      render json: @appointment.errors.full_messages, status: 422
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:reason, :patient_id)
  end
end
