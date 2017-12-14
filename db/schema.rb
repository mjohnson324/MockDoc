# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171214020555) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.integer "patient_id"
    t.integer "doctor_id", null: false
    t.text "reason"
    t.datetime "start_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address"
    t.index ["doctor_id"], name: "index_appointments_on_doctor_id"
    t.index ["patient_id"], name: "index_appointments_on_patient_id"
    t.index ["start_time", "doctor_id"], name: "index_appointments_on_start_time_and_doctor_id", unique: true
  end

  create_table "certifications", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_certifications_on_name", unique: true
  end

  create_table "doctor_certifications", force: :cascade do |t|
    t.integer "certification_id", null: false
    t.integer "doctor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["certification_id"], name: "index_doctor_certifications_on_certification_id"
    t.index ["doctor_id", "certification_id"], name: "index_doctor_certifications_on_doctor_id_and_certification_id", unique: true
  end

  create_table "doctor_specialties", force: :cascade do |t|
    t.integer "specialty_id", null: false
    t.integer "doctor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doctor_id", "specialty_id"], name: "index_doctor_specialties_on_doctor_id_and_specialty_id", unique: true
    t.index ["specialty_id"], name: "index_doctor_specialties_on_specialty_id"
  end

  create_table "doctors", force: :cascade do |t|
    t.string "gender", null: false
    t.text "education", null: false
    t.float "lat"
    t.float "lng"
    t.text "professional_statement"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "degree", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "overall_rating", null: false
    t.integer "bedside_manner", null: false
    t.integer "wait_time", null: false
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "appointment_id", null: false
    t.index ["appointment_id"], name: "index_reviews_on_appointment_id", unique: true
  end

  create_table "specialties", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_specialties_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
