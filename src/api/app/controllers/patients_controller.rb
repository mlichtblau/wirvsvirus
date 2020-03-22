class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :update, :destroy, :testcenters_index]

  # GET /patients
  def index
    @patients = Patient.all

    render json: @patients
  end

  # GET /patients/1
  def show
    render json: @patient, :include => {
      anamnestic_items: {
        include: {criterion: {only: [:name, :description, :kind]}},
        only: :answer
      }
    }
  end

  # POST /patients
  def create
    @patient = Patient.new(patient_params)

    if @patient.save
      unsupported_answer = false
      all_criterions_found = true
      wrong_criterion = ''
      params[:anamnestic_items].each do |anamnestic_item|
        criterion = Criterion.find_by name: anamnestic_item[:criterion]
        
        if criterion
          if ['yes', 'no', 'unsure'].include?(anamnestic_item[:answer])
            @patient.anamnestic_items.create(criterion: criterion, answer: anamnestic_item[:answer])
          else
            unsupported_answer = true
            break
          end
        else
          wrong_criterion = criterion_name
          all_criterions_found = false
          break
        end
      end
      
      if unsupported_answer
        render json: {error: 'unsupported answer specified. use either yes, no, or unsure'}, status: :unprocessable_entity
        return
      end
      
      if all_criterions_found
        render json: @patient, :include => {
          anamnestic_items: {
            include: {criterion: {only: [:name, :description, :kind]}},
            only: :answer
          }
        }, status: :created, location: @patient
      else
        render json: {error: 'criterion not found: ' + wrong_criterion}, status: :unprocessable_entity
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

  # GET /patients/1/testcenters
  def testcenters_index
    render json: @patient.testcenters
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
