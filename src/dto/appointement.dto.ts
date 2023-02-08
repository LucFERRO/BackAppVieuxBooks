export interface AppointementDTO {
    appointement_date: Date,
    appointement_duration_minutes: number,
    appointement_reason: string,
    doctor_id: number,
    patient_id: number,
}