class ContactDataController < ApplicationController
  before_action :set_contact_datum, only: [:show, :update, :destroy]

  # GET /contact_data
  def index
    @contact_data = ContactDatum.all

    render json: @contact_data
  end

  # GET /contact_data/1
  def show
    render json: @contact_datum
  end

  # POST /contact_data
  def create
    @contact_datum = ContactDatum.new(contact_datum_params)

    if @contact_datum.save
      render json: @contact_datum, status: :created, location: @contact_datum
    else
      render json: @contact_datum.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /contact_data/1
  def update
    if @contact_datum.update(contact_datum_params)
      render json: @contact_datum
    else
      render json: @contact_datum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /contact_data/1
  def destroy
    @contact_datum.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contact_datum
      @contact_datum = ContactDatum.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def contact_datum_params
      params.require(:contact_datum).permit(:phone, :email)
    end
end
