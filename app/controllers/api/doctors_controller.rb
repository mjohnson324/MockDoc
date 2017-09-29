class Api::DoctorsController < ApplicationController
  def show
    @doctor = Doctor.find(params[:id])
  end

  def index
    processed_specialty = params[:specialty].downcase
    doctors = Doctor.near(params[:address], 30)
      .includes(:specialties, :certifications, :reviews, :appointments)
      .joins(:specialties, :appointments).where(
        specialties: { name: processed_specialty },
        appointments: {
          start_time: (Time.now)..(Time.now + 6.day),
          patient_id: nil
        })

    @doctors = doctors.select do |doctor|
      doctor.specialties.pluck(:name).include?(processed_specialty)
    end
  end
end
