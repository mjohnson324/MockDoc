class Api::DoctorsController < ApplicationController
  def show
    @doctor = Doctor.find(params[:id])
  end

  def index
    doctors = Doctor.in_bounds(bounds)
    doctor.specialties.includes
    if params[:specialty]
      @doctors = doctors.select do |doctor|
        doc_specs = doctor.specialties.pluck(:name)
        doc_specs.includes?(params[:specialty])
      end
    end
  end

  private

  def bounds
    params[:bounds]
  end
end
