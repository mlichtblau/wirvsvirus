class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.references :patient, null: false, foreign_key: true
      t.references :testcenter, null: false, foreign_key: true
      t.timestamp :time
      t.integer :waiting_number
      t.timestamp :processed_at
      t.integer :rescheduled_to_appointment_id
      t.timestamp :canceled_at
      t.references :feedback, null: false, foreign_key: true

      t.timestamps
    end
  end
end
