class Api::DoctorsController < ApplicationController
  def show
    @doctor = Doctor.find(:id)
  end


  def index
    @doctors = Doctor.all
  end
end
