export interface WorkdayDTO {
    planning_id?: number,
    workday_number: number,
    workday_start: string,
    workday_end: string,
    slot_duration_minutes: number,
    lunch_break_start: string,
    lunch_break_end: string
}