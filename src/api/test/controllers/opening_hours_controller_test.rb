require 'test_helper'

class OpeningHoursControllerTest < ActionDispatch::IntegrationTest
  setup do
    @opening_hour = opening_hours(:one)
  end

  test "should get index" do
    get opening_hours_url, as: :json
    assert_response :success
  end

  test "should create opening_hour" do
    assert_difference('OpeningHour.count') do
      post opening_hours_url, params: { opening_hour: { closes: @opening_hour.closes, day: @opening_hour.day, opens: @opening_hour.opens, testcenter_id: @opening_hour.testcenter_id } }, as: :json
    end

    assert_response 201
  end

  test "should show opening_hour" do
    get opening_hour_url(@opening_hour), as: :json
    assert_response :success
  end

  test "should update opening_hour" do
    patch opening_hour_url(@opening_hour), params: { opening_hour: { closes: @opening_hour.closes, day: @opening_hour.day, opens: @opening_hour.opens, testcenter_id: @opening_hour.testcenter_id } }, as: :json
    assert_response 200
  end

  test "should destroy opening_hour" do
    assert_difference('OpeningHour.count', -1) do
      delete opening_hour_url(@opening_hour), as: :json
    end

    assert_response 204
  end
end
