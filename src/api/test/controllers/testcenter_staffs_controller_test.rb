require 'test_helper'

class TestcenterStaffsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @testcenter_staff = testcenter_staffs(:one)
  end

  test "should get index" do
    get testcenter_staffs_url, as: :json
    assert_response :success
  end

  test "should create testcenter_staff" do
    assert_difference('TestcenterStaff.count') do
      post testcenter_staffs_url, params: { testcenter_staff: { pin_code: @testcenter_staff.pin_code, staff_type: @testcenter_staff.staff_type, testcenter_id: @testcenter_staff.testcenter_id } }, as: :json
    end

    assert_response 201
  end

  test "should show testcenter_staff" do
    get testcenter_staff_url(@testcenter_staff), as: :json
    assert_response :success
  end

  test "should update testcenter_staff" do
    patch testcenter_staff_url(@testcenter_staff), params: { testcenter_staff: { pin_code: @testcenter_staff.pin_code, staff_type: @testcenter_staff.staff_type, testcenter_id: @testcenter_staff.testcenter_id } }, as: :json
    assert_response 200
  end

  test "should destroy testcenter_staff" do
    assert_difference('TestcenterStaff.count', -1) do
      delete testcenter_staff_url(@testcenter_staff), as: :json
    end

    assert_response 204
  end
end
