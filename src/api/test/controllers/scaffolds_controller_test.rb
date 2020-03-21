require 'test_helper'

class ScaffoldsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @scaffold = scaffolds(:one)
  end

  test "should get index" do
    get scaffolds_url, as: :json
    assert_response :success
  end

  test "should create scaffold" do
    assert_difference('Scaffold.count') do
      post scaffolds_url, params: { scaffold: { CapacityLimit: @scaffold.CapacityLimit, reached_at: @scaffold.reached_at, testcenter_id: @scaffold.testcenter_id } }, as: :json
    end

    assert_response 201
  end

  test "should show scaffold" do
    get scaffold_url(@scaffold), as: :json
    assert_response :success
  end

  test "should update scaffold" do
    patch scaffold_url(@scaffold), params: { scaffold: { CapacityLimit: @scaffold.CapacityLimit, reached_at: @scaffold.reached_at, testcenter_id: @scaffold.testcenter_id } }, as: :json
    assert_response 200
  end

  test "should destroy scaffold" do
    assert_difference('Scaffold.count', -1) do
      delete scaffold_url(@scaffold), as: :json
    end

    assert_response 204
  end
end
