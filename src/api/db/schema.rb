# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_21_232222) do

  create_table "administrators", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "appointments", force: :cascade do |t|
    t.integer "patient_id", null: false
    t.integer "testcenter_id", null: false
    t.datetime "appointment_time"
    t.string "waiting_number"
    t.datetime "processed_at"
    t.integer "rescheduled_to_appointment_id"
    t.datetime "canceled_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "feedback_id"
    t.index ["feedback_id"], name: "index_appointments_on_feedback_id"
    t.index ["patient_id"], name: "index_appointments_on_patient_id"
    t.index ["testcenter_id"], name: "index_appointments_on_testcenter_id"
  end

  create_table "contact_data", force: :cascade do |t|
    t.string "phone"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "coordinates", force: :cascade do |t|
    t.float "longitude"
    t.float "latitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "criterions", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "kind"
  end

  create_table "criterions_patients", id: false, force: :cascade do |t|
    t.integer "patient_id", null: false
    t.integer "criterion_id", null: false
  end

  create_table "criterions_testcenters", id: false, force: :cascade do |t|
    t.integer "testcenter_id", null: false
    t.integer "criterion_id", null: false
  end

  create_table "feedbacks", force: :cascade do |t|
    t.integer "rating"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.integer "testcenter_id", null: false
    t.integer "testcenter_staff_id", null: false
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["testcenter_id"], name: "index_messages_on_testcenter_id"
    t.index ["testcenter_staff_id"], name: "index_messages_on_testcenter_staff_id"
  end

  create_table "opening_hours", force: :cascade do |t|
    t.integer "day"
    t.datetime "opens_at"
    t.datetime "closes_at"
    t.integer "testcenter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["testcenter_id"], name: "index_opening_hours_on_testcenter_id"
  end

  create_table "patients", force: :cascade do |t|
    t.integer "age"
    t.integer "living_situation"
    t.integer "workplace"
    t.string "zip_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "flu_vaccinated"
    t.date "symptoms_since"
  end

  create_table "scaffolds", force: :cascade do |t|
    t.string "CapacityLimit"
    t.integer "testcenter_id", null: false
    t.datetime "reached_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["testcenter_id"], name: "index_scaffolds_on_testcenter_id"
  end

  create_table "test_methods", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "test_methods_testcenters", id: false, force: :cascade do |t|
    t.integer "testcenter_id", null: false
    t.integer "test_method_id", null: false
  end

  create_table "testcenter_staffs", force: :cascade do |t|
    t.integer "testcenter_id", null: false
    t.integer "staff_type"
    t.string "pin_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["testcenter_id"], name: "index_testcenter_staffs_on_testcenter_id"
  end

  create_table "testcenters", force: :cascade do |t|
    t.string "name"
    t.string "street"
    t.string "zip_code"
    t.string "city"
    t.text "directions"
    t.integer "coordinate_id", null: false
    t.integer "daily_capacity"
    t.float "registered_vs_non_registered_preference_ratio"
    t.datetime "verified_at"
    t.integer "contact_datum_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_datum_id"], name: "index_testcenters_on_contact_datum_id"
    t.index ["coordinate_id"], name: "index_testcenters_on_coordinate_id"
  end

  add_foreign_key "appointments", "patients"
  add_foreign_key "appointments", "testcenters"
  add_foreign_key "messages", "testcenter_staffs"
  add_foreign_key "messages", "testcenters"
  add_foreign_key "opening_hours", "testcenters"
  add_foreign_key "scaffolds", "testcenters"
  add_foreign_key "testcenter_staffs", "testcenters"
  add_foreign_key "testcenters", "contact_data"
  add_foreign_key "testcenters", "coordinates"
end
