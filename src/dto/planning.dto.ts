import { WorkdayDTO } from "./workday.dto";

export interface PlanningDTO {
    planning_name: string,
    planning_start: Date,
    planning_end: Date,
    doctor_id: number,
    workdays?: WorkdayDTO[]
}