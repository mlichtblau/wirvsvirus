require 'test_helper'

class CoordinatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @coordinate = coordinates(:one)
  end

  test "should get index" do
    get coordinates_url, as: :json
    assert_response :success
  end

  test "should create coordinate" do
    assert_difference('Coordinate.count') do
      post coordinates_url, params: { coordinate: { latitude: @coordinate.latitude, longitude: @coordinate.longitude } }, as: :json
    end

    assert_response 201
  end

  test "should show coordinate" do
    get coordinate_url(@coordinate), as: :json
    assert_response :success
  end

  test "should update coordinate" do
    patch coordinate_url(@coordinate), params: { coordinate: { latitude: @coordinate.latitude, longitude: @coordinate.longitude } }, as: :json
    assert_response 200
  end

  test "should destroy coordinate" do
    assert_difference('Coordinate.count', -1) do
      delete coordinate_url(@coordinate), as: :json
    end

    assert_response 204
  end
end
