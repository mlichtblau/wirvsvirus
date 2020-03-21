class ChangeWaitingNumberToBeStringInAppointments < ActiveRecord::Migration[6.0]
  def change
    change_column :appointments, :waiting_number, :string
  end
end
