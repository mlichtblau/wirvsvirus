class OpeningHoursController < ApplicationController
  before_action :set_opening_hour, only: [:show, :update, :destroy]

  # GET /opening_hours
  def index
    @opening_hours = OpeningHour.all

    render json: @opening_hours
  end

  # GET /opening_hours/1
  def show
    render json: @opening_hour
  end

  # POST /opening_hours
  def create
    @opening_hour = OpeningHour.new(opening_hour_params)

    if @opening_hour.save
      render json: @opening_hour, status: :created, location: @opening_hour
    else
      render json: @opening_hour.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /opening_hours/1
  def update
    if @opening_hour.update(opening_hour_params)
      render json: @opening_hour
    else
      render json: @opening_hour.errors, status: :unprocessable_entity
    end
  end

  # DELETE /opening_hours/1
  def destroy
    @opening_hour.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_opening_hour
      @opening_hour = OpeningHour.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def opening_hour_params
      params.require(:opening_hour).permit(:day, :opens, :closes, :testcenter_id)
    end
end
