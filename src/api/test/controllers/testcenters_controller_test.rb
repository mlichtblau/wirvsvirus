require 'test_helper'

class TestcentersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @testcenter = testcenters(:one)
  end

  test "should get index" do
    get testcenters_url, as: :json
    assert_response :success
  end

  test "should create testcenter" do
    assert_difference('Testcenter.count') do
      post testcenters_url, params: { testcenter: { city: @testcenter.city, contact_datum_id: @testcenter.contact_datum_id, coordinate_id: @testcenter.coordinate_id, directions: @testcenter.directions, name: @testcenter.name, registered_vs_non_registered_preference_ratio: @testcenter.registered_vs_non_registered_preference_ratio, street: @testcenter.street, troughput_per_day: @testcenter.troughput_per_day, verified_at: @testcenter.verified_at, zip_code: @testcenter.zip_code } }, as: :json
    end

    assert_response 201
  end

  test "should show testcenter" do
    get testcenter_url(@testcenter), as: :json
    assert_response :success
  end

  test "should update testcenter" do
    patch testcenter_url(@testcenter), params: { testcenter: { city: @testcenter.city, contact_datum_id: @testcenter.contact_datum_id, coordinate_id: @testcenter.coordinate_id, directions: @testcenter.directions, name: @testcenter.name, registered_vs_non_registered_preference_ratio: @testcenter.registered_vs_non_registered_preference_ratio, street: @testcenter.street, troughput_per_day: @testcenter.troughput_per_day, verified_at: @testcenter.verified_at, zip_code: @testcenter.zip_code } }, as: :json
    assert_response 200
  end

  test "should destroy testcenter" do
    assert_difference('Testcenter.count', -1) do
      delete testcenter_url(@testcenter), as: :json
    end

    assert_response 204
  end
end
