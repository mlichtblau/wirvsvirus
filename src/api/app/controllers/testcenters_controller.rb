class TestcentersController < ApplicationController
  before_action :set_testcenter, only: [:show, :update, :destroy, :set_criteria, :staff_login]

  # GET /testcenters
  def index
    if params[:verified_only]
      @testcenters = Testcenter.all_verified
    else
      @testcenters = Testcenter.all
    end

    render json: @testcenters, include: [:coordinate, :contact_datum]
  end

  # GET /testcenters/1
  def show
    render json: @testcenter, include: [:coordinate, :contact_datum]
  end

  # POST /testcenters
  def create
    @testcenter = Testcenter.new(testcenter_params)
    
    @testcenter.contact_datum = ContactDatum.create(phone: params[:phone], email: params[:email])
    
    geo_results = Geocoder.search([
        @testcenter.street, 
        @testcenter.zip_code, 
        @testcenter.city,
        "Germany"
    ].compact.join(', '))
    
    if geo_results.empty?
      render json: {error: 'address not resolvable'}, status: :unprocessable_entity
    else
      coord_obj = Coordinate.create(longitude: geo_results[0].longitude, latitude: geo_results[0].latitude)

      @testcenter.coordinate = coord_obj
      if @testcenter.save
        render json: @testcenter, include: [:coordinate, :contact_datum], status: :created, location: @testcenter
      else
        render json: @testcenter.errors, status: :unprocessable_entity
      end
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
    params[:criterion_names].each do |criterion_name|
      criterion = Criterion.find_by name: criterion_name
      if criterion
        @testcenter.criterions << criterion
      end
    end
    render json: @testcenter, include: [:coordinate, :contact_datum]
  end

  # POST /testcenters/1/staff_login
  def staff_login
    testcenter_staff = @testcenter.testcenter_staffs.find_by(pin_code: params[:pin_code])
    render json: testcenter_staff
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_testcenter
      @testcenter = Testcenter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def testcenter_params
      params.require(:testcenter).permit(:name, :street, :zip_code, :city, :directions, :coordinate_id, :daily_capacity, :registered_vs_non_registered_preference_ratio, :verified_at, :contact_datum_id, :criterion_ids)
    end
end
