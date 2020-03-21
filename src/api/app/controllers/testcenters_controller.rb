class TestcentersController < ApplicationController
  before_action :set_testcenter, only: [:show, :update, :destroy]

  # GET /testcenters
  def index
    @testcenters = Testcenter.all

    render json: @testcenters
  end

  # GET /testcenters/1
  def show
    render json: @testcenter
  end

  # POST /testcenters
  def create
    @testcenter = Testcenter.new(testcenter_params)

    if @testcenter.save
      render json: @testcenter, status: :created, location: @testcenter
    else
      render json: @testcenter.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /testcenters/1
  def update
    if @testcenter.update(testcenter_params)
      render json: @testcenter
    else
      render json: @testcenter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /testcenters/1
  def destroy
    @testcenter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_testcenter
      @testcenter = Testcenter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def testcenter_params
      params.require(:testcenter).permit(:name, :street, :zip_code, :city, :directions, :coordinate_id, :troughput_per_day, :registered_vs_non_registered_preference_ratio, :verified_at, :contact_datum_id)
    end
end
