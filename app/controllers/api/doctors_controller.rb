class Api::DoctorsController < ApplicationController
  def show
    @doctor = Doctor.find(params[:id])
  end

  def index
    @doctors = Doctor.near(params[:address], 30)
      .includes(:specialties)
      .where(specialties: { name: params[:specialty] })
      .references(:specialties)
    # params[:timeframe]
    @doctor_appointments = get_apps_from_doctors(@doctors)
    @average_ratings = get_doctor_ratings(@doctors)
  end

  private

  def get_apps_from_doctors(doctors)
    doctor_appointments = {}
    doctors.each do |doctor|
      appointments = doctor.appointments
        .where(
          start_time: (Time.now)..(Time.now + 6.day),
          patient_id: nil)
      doctor_appointments[doctor.id] = appointments
    end
    doctor_appointments
  end

  def get_doctor_ratings(doctors)
    average_ratings = {}
    doctors.each do |doctor|
      doctor_reviews = doctor.reviews
      all_review_ratings = doctor_reviews.to_a.map(&:overall_rating)
      average_ratings[doctor.id] = process_ratings(
                                    doctor_reviews,
                                    all_review_ratings)
    end
    average_ratings
  end

  def process_ratings(doctor_reviews, ratings)
    if doctor_reviews.empty?
      "Not rated"
    else
      ratings.reduce(:+) / ratings.length.to_f
    end
  end
end
