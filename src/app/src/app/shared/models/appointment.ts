export interface Appointment {
    id?: number;
    appointment_time?: Date;
    patient_id: number;
    testcenter_id: number;
    waiting_number?: string;
    processed_at?: Date;
    created_at?: Date;
    rescheduled_to_appointment_id?: number;
    canceled_at?: Date;
}
