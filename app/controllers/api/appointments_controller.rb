class Api::AppointmentsController < ApplicationController
  before_action :require_logged_in, only: [:update, :show]

  def index
    range_start = params[:startTime].to_datetime
    range_end = params[:endTime].to_datetime
    time_range = range_start..range_end
    processed_specialty = params[:specialty].downcase

    doctors = Doctor.near(params[:address], 30).includes(:specialties)

    doc_ids = doctors.select do |doctor|
      doctor.specialties.pluck(:name).include?(processed_specialty)
    end.pluck(:id)

    @appointments = Appointment.where(
                                    doctor_id: doc_ids,
                                    patient_id: nil,
                                    start_time: time_range)
  end

  def update
    @appointment = Appointment.find(params[:id])

    if @appointment.update(appointment_params)
      render :show
    else
      render json: @appointment.errors.full_messages, status: 422
    end
  end

  def show
    @appointment = Appointment.find(params[:id])

    unless @appointment.patient == nil
      render json: ["This appointment is already booked"], status: 403 
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:reason, :patient_id)
  end
end
