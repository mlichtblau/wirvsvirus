class TestcenterStaffsController < ApplicationController
  before_action :set_testcenter_staff, only: [:show, :update, :destroy]

  # GET /testcenter_staffs
  def index
    @testcenter_staffs = TestcenterStaff.all

    render json: @testcenter_staffs
  end

  # GET /testcenter_staffs/1
  def show
    render json: @testcenter_staff
  end

  # POST /testcenter_staffs
  def create
    @testcenter_staff = TestcenterStaff.new(testcenter_staff_params)

    if @testcenter_staff.save
      render json: @testcenter_staff, status: :created, location: @testcenter_staff
    else
      render json: @testcenter_staff.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /testcenter_staffs/1
  def update
    if @testcenter_staff.update(testcenter_staff_params)
      render json: @testcenter_staff
    else
      render json: @testcenter_staff.errors, status: :unprocessable_entity
    end
  end

  # DELETE /testcenter_staffs/1
  def destroy
    @testcenter_staff.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_testcenter_staff
      @testcenter_staff = TestcenterStaff.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def testcenter_staff_params
      params.require(:testcenter_staff).permit(:testcenter_id, :staff_type, :pin_code)
    end
end
