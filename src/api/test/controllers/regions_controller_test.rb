require 'test_helper'

class RegionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @region = regions(:one)
  end

  test "should get index" do
    get regions_url, as: :json
    assert_response :success
  end

  test "should create region" do
    assert_difference('Region.count') do
      post regions_url, params: { region: { name: @region.name, part_of_id: @region.part_of_id, risk_score: @region.risk_score } }, as: :json
    end

    assert_response 201
  end

  test "should show region" do
    get region_url(@region), as: :json
    assert_response :success
  end

  test "should update region" do
    patch region_url(@region), params: { region: { name: @region.name, part_of_id: @region.part_of_id, risk_score: @region.risk_score } }, as: :json
    assert_response 200
  end

  test "should destroy region" do
    assert_difference('Region.count', -1) do
      delete region_url(@region), as: :json
    end

    assert_response 204
  end
end
