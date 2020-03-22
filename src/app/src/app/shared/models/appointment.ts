export interface Appointment {
    id?: number;
    appointment_time: Date;
    patient_id: number;
    testcenter_id: number;
    waiting_number: string;
    processed_at: Date;
    created_at: Date;
}
