class CriterionsController < ApplicationController
  before_action :set_criterion, only: [:show, :update, :destroy]

  # GET /criterions
  def index
    @criterions = Criterion.all

    render json: @criterions
  end

  # GET /criterions/1
  def show
    render json: @criterion
  end

  # POST /criterions
  def create
    @criterion = Criterion.new(criterion_params)

    if @criterion.save
      render json: @criterion, status: :created, location: @criterion
    else
      render json: @criterion.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /criterions/1
  def update
    if @criterion.update(criterion_params)
      render json: @criterion
    else
      render json: @criterion.errors, status: :unprocessable_entity
    end
  end

  # DELETE /criterions/1
  def destroy
    @criterion.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_criterion
      @criterion = Criterion.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def criterion_params
      params.require(:criterion).permit(:name, :description, :superregion_id, :kind)
    end
end
