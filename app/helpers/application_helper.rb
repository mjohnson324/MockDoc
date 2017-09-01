module ApplicationHelper
  def day_range(num_days)
    current_time = Time.now

    days_later = current_time + num_days * 24 * 60 * 60
    c_yr = days_later.year
    c_m = days_later.month
    c_d = days_later.day

    end_time = Time.new(c_yr, c_m, c_d, 23)
    current_time..end_time
  end

  def translate_to_address(doctor)
    Geocoder.address(doctor.to_coordinates)
  end
end
