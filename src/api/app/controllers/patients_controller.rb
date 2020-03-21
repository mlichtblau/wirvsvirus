class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :update, :destroy]

  # GET /patients
  def index
    @patients = Patient.all

    render json: @patients
  end

  # GET /patients/1
  def show
    render json: @patient, :include => {:criterions => {:only => [:name, :description, :kind]}}
  end

  # POST /patients
  def create
    @patient = Patient.new(patient_params)

    if @patient.save
      all_criterions_found = true
      params[:criterion_names].each do |criterion_name|
        criterion = Criterion.find_by name: criterion_name
        if criterion
          @patient.criterions << criterion
        else
          all_criterions_found = false
          break
        end
      end
      
      if all_criterions_found
        render json: @patient, status: :created, location: @patient
      else
        render json: params[:criterion_names], status: :unprocessable_entity
      end
    else
      render json: @patient.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /patients/1
  def update
    if @patient.update(patient_params)
      render json: @patient
    else
      render json: @patient.errors, status: :unprocessable_entity
    end
  end

  # DELETE /patients/1
  def destroy
    @patient.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_patient
      @patient = Patient.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def patient_params
      params.require(:patient).permit(:age, :living_situation, :workplace, :zip_code, :flu_vaccinated, :symptoms_since)
    end
end
