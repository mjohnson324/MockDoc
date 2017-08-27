class Api::DoctorsController < ApplicationController
  def show
    @doctor = Doctor.find(params[:id])
  end

  def index
    doctors = Doctor.all
    @doctors = doctors.select do |doctor|
      doc_specs = doctor.specialties.pluck(:name)
      doc_specs.includes?(params[:specialty])
    end
  end

  private

  def bounds
    params[:bounds]
  end
end
