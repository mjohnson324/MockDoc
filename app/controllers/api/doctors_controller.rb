class Api::DoctorsController < ApplicationController
  def show
    @doctor = Doctor.find(params[:id])
  end

  def index
    @doctors = Doctor.near(params[:address], 15)
                     .includes(:specialties)
                     .where(specialties: { name: params[:specialty] })
                     .references(:specialties)

    date = get_date(params[:day])
    @doctor_appointments = get_apps_from_doctors(@doctors, date)
    @average_ratings = get_doctor_ratings(@doctors)
  end

  private

  def get_date(day)
    day_params = day.split(' ')
    month = get_month_number(day_params[1])
    day = day_params[2].to_i
    year = day_params[3].to_i
    clock = day_params[4].split(':')
    hour = clock[0].to_i
    minute = clock[1].to_i
    Time.new(year, month, day, hour, minute, nil, '-04:00')
  end

  def get_month_number(month)
    month_numbers = {
      'Jan' => 1, 'Feb' => 2, 'Mar' => 3, 'Apr' => 4, 'May' => 5, 'Jun' => 6,
      'Jul' => 7, 'Aug' => 8, 'Sep' => 9, 'Oct' => 10, 'Nov' => 11, 'Dec' => 12
    }
    month_numbers[month]
  end

  def get_apps_from_doctors(doctors, day)
    doctor_appointments = {}
    doctors.each do |doctor|
      appointments = doctor.appointments
                           .where(
                             start_time: day..(day + 11.day),
                             patient_id: nil
                           )
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
        all_review_ratings
      )
    end
    average_ratings
  end

  def process_ratings(doctor_reviews, ratings)
    if doctor_reviews.empty?
      'Not rated'
    else
      ratings.reduce(:+) / ratings.length.to_f
    end
  end
end
