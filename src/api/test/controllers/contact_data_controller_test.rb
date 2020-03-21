require 'test_helper'

class ContactDataControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contact_datum = contact_data(:one)
  end

  test "should get index" do
    get contact_data_url, as: :json
    assert_response :success
  end

  test "should create contact_datum" do
    assert_difference('ContactDatum.count') do
      post contact_data_url, params: { contact_datum: { email: @contact_datum.email, phone: @contact_datum.phone } }, as: :json
    end

    assert_response 201
  end

  test "should show contact_datum" do
    get contact_datum_url(@contact_datum), as: :json
    assert_response :success
  end

  test "should update contact_datum" do
    patch contact_datum_url(@contact_datum), params: { contact_datum: { email: @contact_datum.email, phone: @contact_datum.phone } }, as: :json
    assert_response 200
  end

  test "should destroy contact_datum" do
    assert_difference('ContactDatum.count', -1) do
      delete contact_datum_url(@contact_datum), as: :json
    end

    assert_response 204
  end
end
