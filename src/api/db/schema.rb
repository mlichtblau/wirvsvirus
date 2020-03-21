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

ActiveRecord::Schema.define(version: 2020_03_21_154704) do

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

  create_table "testcenters", force: :cascade do |t|
    t.string "name"
    t.string "street"
    t.string "zip_code"
    t.string "city"
    t.text "directions"
    t.integer "coordinate_id", null: false
    t.integer "troughput_per_day"
    t.float "registered_vs_non_registered_preference_ratio"
    t.datetime "verified_at"
    t.integer "contact_datum_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_datum_id"], name: "index_testcenters_on_contact_datum_id"
    t.index ["coordinate_id"], name: "index_testcenters_on_coordinate_id"
  end

  add_foreign_key "testcenters", "contact_data"
  add_foreign_key "testcenters", "coordinates"
end
