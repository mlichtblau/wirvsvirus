class ChangeAppointmentTimeColumnToAppointmentTime < ActiveRecord::Migration[6.0]
  def change
    rename_column :appointments, :time, :appointment_time
  end
end
