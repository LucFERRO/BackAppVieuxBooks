// import { IRepositoryInheritance } from "../core/respository.interface";
// import { DoctorDTO } from "../dto/doctor.dto";
// import { Doctor } from "../model/doctor.model";
// import { Person } from "../model/person.model";
// import { DoctorMapper } from "../mapper/doctor.mapper";
// import { sequelize } from "../database/sequelize";
// import { Transaction } from "sequelize";

// export class DoctorRepository implements IRepositoryInheritance<DoctorDTO> {
//     async findById(id: number): Promise<DoctorDTO | null> {
//         return Doctor.findByPk(id, { include: [Person] }).then(doctor => DoctorMapper.mapToDto(doctor))
//     }

//     async findAll(options? : any): Promise<DoctorDTO[]> {
//         return Doctor.findAll({ include: [Person] }).then((doctors: Doctor[]) => doctors.map((doctor: Doctor) => DoctorMapper.mapToDto(doctor)))
//     }

//     async create(data: DoctorDTO): Promise<DoctorDTO> {

//         const personInfo = {
//             lastname: data.lastname,
//             firstname: data.firstname,
//             mail: data.mail,
//             password: data.password,
//             birthdate: data.birthdate,
//             phone_number: data.phone_number,
//             description: data.description,
//             avatar: data.avatar
//         }

//         const doctorInfo = {
//             activity: data.activity
//         }
//         try {
//             return await sequelize.transaction(async (t: Transaction) => {

//                 const newPerson = await Person.create(
//                     personInfo,
//                     { transaction: t }
//                 )

//                 return Doctor.create(
//                     { ...doctorInfo, doctor_id: newPerson.person_id },
//                     { transaction: t }
//                 )
//                     .then((doctor: Doctor) => DoctorMapper.mapToDtoCreate(doctor, newPerson))
//             })

//             // Marche mais relou faut changer le retour en personDTO
//             // const newPerson = await Person.create({
//             //     ...personInfo,
//             //     doctor: doctorInfo
//             // }, {
//             //     include: 'doctor'
//             // })
//             // return newPerson

//         } catch (error: any) {
//             console.log(error)
//             return null as any
//         }
//     }

//     async update(data: DoctorDTO, id: number): Promise<boolean | number> {

//         const personInfo = {
//             lastname: data.lastname,
//             firstname: data.firstname,
//             mail: data.mail,
//             password: data.password,
//             birthdate: data.birthdate,
//             phone_number: data.phone_number,
//             description: data.description,
//             avatar: data.avatar
//         }

//         const doctorInfo = {
//             activity: data.activity
//         }

//         try {
//             return await sequelize.transaction(async (t) => {

//                 await Person.update(
//                     personInfo,
//                     {
//                         where: { person_id: id },
//                         transaction: t
//                     }
//                 )

//                 const updatedDoctor = await Doctor.update(
//                     doctorInfo,
//                     {
//                         where: { doctor_id: id },
//                         transaction: t
//                     }
//                 )
//                 return updatedDoctor[0]
//             })

//         } catch (error) {
//             throw error
//         }
//     }

//     async delete(id: number): Promise<boolean | number> {
//         return Doctor.destroy({ where: { doctor_id: id } }).then(good => good)
//     }

// }