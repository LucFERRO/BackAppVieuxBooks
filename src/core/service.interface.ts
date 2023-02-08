import { AppointementDTO } from "../dto/appointement.dto";
import { PersonDTOFull } from "../dto/person.dto";
import { PlanningDTO } from "../dto/planning.dto";
import { VacationDTO } from "../dto/vacation.dto";
import { WorkdayDTO } from "../dto/workday.dto";

export interface IService<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(t: T): Promise<T | undefined>;
    update(t: T, id: number): Promise<boolean | number | undefined>;
    delete(id: number): Promise<boolean | number>;
}

export interface PersonIService {
    findByMail(mail: string): Promise<PersonDTOFull | null>;
}

export interface AuthIService<D, T> {
    login(d: D): Promise<D>;
    refreshToken(t: T): Promise<T>
}

export interface PlanningIService {
    findAllOfGivenDoctor(doctor_id: number): Promise<PlanningDTO[]>;
    create(planningData: PlanningDTO, workdaysData: WorkdayDTO[]): Promise<PlanningDTO>;
    availableSlots(doctor_id: number): Promise<PlanningDTO>;
    availabilities(doctor_id: number, today: Date): Promise<any>;
    update(t: PlanningDTO, id: number): Promise<boolean | number | undefined>;
    delete(id: number): Promise<boolean | number>;
}

export interface AppointementIService {
    findGlobal(data: any): Promise<AppointementDTO[]>;
    doctorAppointementList(doctor_id: any): Promise<AppointementDTO[]>;
    patientAppointementList(patient_id: any): Promise<AppointementDTO[]>;
    create(data: AppointementDTO): Promise<AppointementDTO>;
    update(t: AppointementDTO, id: number): Promise<boolean | number | undefined>;
    delete(id: number): Promise<boolean | number>;
}

export interface VacationIService {
    findAll(): Promise<VacationDTO[]>;
    findVacations(id: number): Promise<VacationDTO[]>;
    create(t: VacationDTO): Promise<VacationDTO | undefined>;
    update(t: VacationDTO, id: number): Promise<boolean | number | undefined>;
    delete(id: number): Promise<boolean | number>;
}