class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :update, :destroy, :cancel_appointment, :process_appointment, :reschedule_appointment]

  # GET /appointments
  def index
    @appointments = Appointment.all

    render json: @appointments
  end

  # GET /appointments/1
  def show
    render json: @appointment
  end

  # POST /appointments
  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment, status: :created, location: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointments/1
  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointments/1
  def destroy
    @appointment.destroy
  end

  # GET /appointments/1/cancel
  def cancel_appointment
    if @appointment.update(canceled_at: DateTime.now)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # GET /appointments/1/process
  def process_appointment
    if @appointment.update(processed_at: DateTime.now)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end
  
  def reschedule_appointment
    @new_appointment = Appointment.new(
      patient: @appointment.patient,
      testcenter: @appointment.testcenter,
      waiting_number: @appointment.waiting_number,
      appointment_time: params['new_appointment_time']
    )
    
    if @new_appointment.save
      @appointment.rescheduled_to = @new_appointment
      render json: @appointment, include: :rescheduled_to
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def appointment_params
      params.require(:appointment).permit(:patient_id, :testcenter_id, :appointment_time, :waiting_number, :processed_at, :rescheduled_to_appointment_id, :canceled_at, :feedback_id)
    end
end
