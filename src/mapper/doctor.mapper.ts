// import { DoctorDTO } from "../dto/doctor.dto"
// import { Doctor } from "../model/doctor.model";
// import { Person } from "../model/person.model";

// export class DoctorMapper {
//     static mapToDto(doctor: Doctor | null): DoctorDTO {
//         if (doctor === null) return null as any;
//         return {
//             activity: doctor.activity,
//             doctor_id: doctor.doctor_id,
//             lastname: doctor.get({ plain: true }).Person.lastname,
//             firstname: doctor.get({ plain: true }).Person.firstname,
//             birthdate: doctor.get({ plain: true }).Person.birthdate,
//             mail: doctor.get({ plain: true }).Person.mail,
//             phone_number: doctor.get({ plain: true }).Person.phone_number,
//             description: doctor.get({ plain: true }).Person.description,
//             avatar: doctor.get({ plain: true }).Person.avatar,
//         }
//     }

//     static mapToDtoCreate(doctor: Doctor, person : Person): DoctorDTO {
//         return {
//             activity: doctor.activity,
//             doctor_id: doctor.doctor_id,
//             lastname: person.lastname, 
//             firstname: person.firstname,
//             birthdate: person.birthdate,
//             mail: person.mail,
//             phone_number: person.phone_number,
//             description: person.description,
//             avatar: person.avatar,
//         }
//     }
// }