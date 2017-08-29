class Api::DoctorsController < ApplicationController
  def show
    @doctor = Doctor.find(params[:id]).includes(:specialties)
  end

  def index
    doctors = Doctor.near(params[:address], 30).includes(:specialties)

    @doctors = doctors.select do |doctor|
      doctor.specialties.pluck(:name).include?(params[:specialty])
    end
  end
end
