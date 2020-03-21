require 'test_helper'

class AppointmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @appointment = appointments(:one)
  end

  test "should get index" do
    get appointments_url, as: :json
    assert_response :success
  end

  test "should create appointment" do
    assert_difference('Appointment.count') do
      post appointments_url, params: { appointment: { canceled_at: @appointment.canceled_at, feedback_id: @appointment.feedback_id, patient_id: @appointment.patient_id, processed_at: @appointment.processed_at, rescheduled_to_appointment_id: @appointment.rescheduled_to_appointment_id, testcenter_id: @appointment.testcenter_id, time: @appointment.time, waiting_number: @appointment.waiting_number } }, as: :json
    end

    assert_response 201
  end

  test "should show appointment" do
    get appointment_url(@appointment), as: :json
    assert_response :success
  end

  test "should update appointment" do
    patch appointment_url(@appointment), params: { appointment: { canceled_at: @appointment.canceled_at, feedback_id: @appointment.feedback_id, patient_id: @appointment.patient_id, processed_at: @appointment.processed_at, rescheduled_to_appointment_id: @appointment.rescheduled_to_appointment_id, testcenter_id: @appointment.testcenter_id, time: @appointment.time, waiting_number: @appointment.waiting_number } }, as: :json
    assert_response 200
  end

  test "should destroy appointment" do
    assert_difference('Appointment.count', -1) do
      delete appointment_url(@appointment), as: :json
    end

    assert_response 204
  end
end
