class Api::AppointmentsController < ApplicationController
  before_action :require_logged_in

  def update
    @appointment = Appointment.find(params[:id])

    if @appointment.reason
      @appointment.update(appointment_params)
      render :show
    else
      render json: ["Please explain the reason for your visit"], status: 422
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
