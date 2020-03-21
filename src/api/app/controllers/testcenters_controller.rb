class TestcentersController < ApplicationController
  before_action :set_testcenter, only: [:show, :update, :destroy, :set_criteria]

  # GET /testcenters
  def index
    @testcenters = Testcenter.all

    render json: @testcenters, include: [:coordinate, :contact_datum]
  end

  # GET /testcenters/1
  def show
    render json: @testcenter, include: [:coordinate, :contact_datum]
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

  # POST /testcenters/1/criterions
  def set_criteria
    @testcenter.criterions.destroy_all
    params[:criterion_ids].each do |criterion_id|
      criterion = Criterion.find_by id: criterion_id
      if criterion
        @testcenter.criterions << Criterion.find_by(id: criterion)
      end
    end
    render json: @testcenter, include: [:coordinate, :contact_datum]
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_testcenter
      @testcenter = Testcenter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def testcenter_params
      params.require(:testcenter).permit(:name, :street, :zip_code, :city, :directions, :coordinate_id, :troughput_per_day, :registered_vs_non_registered_preference_ratio, :verified_at, :contact_datum_id, :criterion_ids)
    end
end
