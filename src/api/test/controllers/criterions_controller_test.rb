require 'test_helper'

class CriterionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @criterion = criterions(:one)
  end

  test "should get index" do
    get criterions_url, as: :json
    assert_response :success
  end

  test "should create criterion" do
    assert_difference('Criterion.count') do
      post criterions_url, params: { criterion: { description: @criterion.description, name: @criterion.name, region_id: @criterion.region_id } }, as: :json
    end

    assert_response 201
  end

  test "should show criterion" do
    get criterion_url(@criterion), as: :json
    assert_response :success
  end

  test "should update criterion" do
    patch criterion_url(@criterion), params: { criterion: { description: @criterion.description, name: @criterion.name, region_id: @criterion.region_id } }, as: :json
    assert_response 200
  end

  test "should destroy criterion" do
    assert_difference('Criterion.count', -1) do
      delete criterion_url(@criterion), as: :json
    end

    assert_response 204
  end
end
