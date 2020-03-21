require 'test_helper'

class TestMethodsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @test_method = test_methods(:one)
  end

  test "should get index" do
    get test_methods_url, as: :json
    assert_response :success
  end

  test "should create test_method" do
    assert_difference('TestMethod.count') do
      post test_methods_url, params: { test_method: { description: @test_method.description, name: @test_method.name } }, as: :json
    end

    assert_response 201
  end

  test "should show test_method" do
    get test_method_url(@test_method), as: :json
    assert_response :success
  end

  test "should update test_method" do
    patch test_method_url(@test_method), params: { test_method: { description: @test_method.description, name: @test_method.name } }, as: :json
    assert_response 200
  end

  test "should destroy test_method" do
    assert_difference('TestMethod.count', -1) do
      delete test_method_url(@test_method), as: :json
    end

    assert_response 204
  end
end
