class TestMethodsController < ApplicationController
  before_action :set_test_method, only: [:show, :update, :destroy]

  # GET /test_methods
  def index
    @test_methods = TestMethod.all

    render json: @test_methods
  end

  # GET /test_methods/1
  def show
    render json: @test_method
  end

  # POST /test_methods
  def create
    @test_method = TestMethod.new(test_method_params)

    if @test_method.save
      render json: @test_method, status: :created, location: @test_method
    else
      render json: @test_method.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /test_methods/1
  def update
    if @test_method.update(test_method_params)
      render json: @test_method
    else
      render json: @test_method.errors, status: :unprocessable_entity
    end
  end

  # DELETE /test_methods/1
  def destroy
    @test_method.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test_method
      @test_method = TestMethod.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def test_method_params
      params.require(:test_method).permit(:name, :description)
    end
end
