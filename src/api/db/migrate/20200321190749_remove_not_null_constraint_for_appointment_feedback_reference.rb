class RemoveNotNullConstraintForAppointmentFeedbackReference < ActiveRecord::Migration[6.0]
  def change
    remove_reference :appointments, :feedback
    add_reference :appointments, :feedback, null: true
  end
end
