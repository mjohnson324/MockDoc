class Api::DoctorsController < ApplicationController
  def show
    @doctor = Doctor.find(params[:id])
  end

  def index
    processed_specialty = params[:specialty].downcase
    doctors = Doctor.near(params[:address], 30)
      .includes(:specialties, :certifications, :appointments_in_a_week, :reviews)
      .joins(:specialties).where(specialties: { name: processed_specialty })

    @doctors = doctors.select do |doctor|
      doctor.specialties.pluck(:name).include?(processed_specialty)
    end
  end
end
