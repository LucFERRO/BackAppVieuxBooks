// import { DoctorDTO } from "../dto/doctor.dto";
// import { IRepositoryInheritance } from "../core/respository.interface";
// import { IService } from "../core/service.interface";
// import { Person } from "../model/person.model";
// const bcrypt = require("bcrypt");

// export class DoctorService implements IService<DoctorDTO> {

//     private doctorRepository: IRepositoryInheritance<DoctorDTO>;

//     constructor(_doctorRepository: IRepositoryInheritance<DoctorDTO>) {
//         this.doctorRepository = _doctorRepository;
//     }

//     async findAll(): Promise<DoctorDTO[]> {
//         return this.doctorRepository.findAll()
//     }

//     async findById(id: number): Promise<DoctorDTO | null> {
//         return this.doctorRepository.findById(id)
//     }

//     async create(doctorRawInfo: DoctorDTO & Person): Promise<DoctorDTO | undefined> {
//         let hashedPassword = await bcrypt.hash(doctorRawInfo.password, 10);

//         let doctorInfo: DoctorDTO = {
//             activity: doctorRawInfo.activity,
//             lastname: doctorRawInfo.lastname,
//             firstname: doctorRawInfo.firstname,
//             mail: doctorRawInfo.mail,
//             password: hashedPassword,
//             birthdate: doctorRawInfo.birthdate,
//             phone_number: doctorRawInfo.phone_number
//         }

//         if (doctorRawInfo.description) Object.assign(doctorInfo, { description: doctorRawInfo.description })
//         if (doctorRawInfo.avatar) Object.assign(doctorInfo, { avatar: doctorRawInfo.avatar })

//         return this.doctorRepository.create(doctorInfo)
//     }

//     async update(data: DoctorDTO & Person, id: number): Promise<number | boolean | undefined> {
//         let hashedPassword
//         if (data.password) hashedPassword = await bcrypt.hash(data.password, 10)

//         let doctorInfo: DoctorDTO = {
//             activity: data.activity,
//             lastname: data.lastname,
//             firstname: data.firstname,
//             mail: data.mail,
//             birthdate: data.birthdate,
//             phone_number: data.phone_number,
//             password: hashedPassword,
//             description: data.description,
//             avatar: data.avatar
//         }

//         const updatedDoctor = await this.doctorRepository.update(doctorInfo, id)
//         return updatedDoctor
//     }

//     async delete(id: number): Promise<boolean | number> {
//         return this.doctorRepository.delete(id)
//     }

// }