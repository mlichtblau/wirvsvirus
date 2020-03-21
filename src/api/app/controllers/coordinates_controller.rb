class CoordinatesController < ApplicationController
  before_action :set_coordinate, only: [:show, :update, :destroy]

  # GET /coordinates
  def index
    @coordinates = Coordinate.all

    render json: @coordinates
  end

  # GET /coordinates/1
  def show
    render json: @coordinate
  end

  # POST /coordinates
  def create
    @coordinate = Coordinate.new(coordinate_params)

    if @coordinate.save
      render json: @coordinate, status: :created, location: @coordinate
    else
      render json: @coordinate.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /coordinates/1
  def update
    if @coordinate.update(coordinate_params)
      render json: @coordinate
    else
      render json: @coordinate.errors, status: :unprocessable_entity
    end
  end

  # DELETE /coordinates/1
  def destroy
    @coordinate.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coordinate
      @coordinate = Coordinate.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def coordinate_params
      params.require(:coordinate).permit(:longitude, :latitude)
    end
end
