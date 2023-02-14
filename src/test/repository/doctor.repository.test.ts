// import { Doctor } from "../../model/doctor.model";
// // import { DoctorDTO, DoctorDTOFull } from "../../dto/doctor.dto";
// import { DoctorRepository } from "../../repository/doctor.repository";

// // import User from "../../database/connect";
// // import { userDTO } from "../../DTO/user.dto";
// // import { UserRepository } from "../../repository/user.repository";
// // import { userId, userTypes } from "../../types/user";

// //test

// describe('DoctorRepository', () => {
//     beforeEach(() =>
//         jest.resetAllMocks()
//     )

//     describe('Doctor find by id', () => {
//         it("doit retourne les details du doctor", async () => {
//             const id = 1000002;

//             const mockReponse = {
//                 doctor_id: 1000002,
//                 activity: 'indian',
//                 Person: {
//                     person_id: 1000002,
//                     lastname: 'SinTo',
//                     firstname: 'Remy',
//                     birthdate: new Date(),
//                     mail: 'remy@c.fr',
//                     password: '$2b$10$6ntskVqohGuZOXkdwvyz1.iXi8MeWEG2MIbWoz4aEvgByyJEbM7Pe',
//                     phone_number: '0123456789',
//                     description: '',
//                     avatar: '///',
//                 }

//             }

//             const expected = {
//                 activity: "indian",
//                 lastname: "SinTo",
//                 firstname: "Remy",
//                 birthdate: new Date(),
//                 mail: "remy@c.fr",
//                 phone_number: "0123456789",
//                 description: "",
//                 avatar: "///"
//             }

//             const repo = new DoctorRepository()
//             Doctor.findOne = jest.fn().mockResolvedValue(mockReponse)

//             const result = await repo.findById(id)

//             expect(result).toEqual(expected)
//             expect(Doctor.findOne).toHaveBeenCalledTimes(1)
//             expect(Doctor.findOne).toBeCalledWith({
//                 where: {
//                     id: id
//                 }
//             })
//         })
//     })

//     // describe('Doctor findAll', () => {
//     //     it("doit retourne les details des utilisateurs", async () => {
//     //         const mockReponse: sdf[] = [
//     //             {
//     //                 id: 1,
//     //                 mot_de_passe: "string",
//     //                 email: "emailtest@email.com",
//     //                 telephone: "780372674",
//     //                 genre: "M",
//     //                 prenom: "p",
//     //                 nom: "n",
//     //                 date_de_naissance: new Date("2020-01-01"),
//     //                 localisationId: 1
//     //             }, {
//     //                 id: 2,
//     //                 mot_de_passe: "string",
//     //                 email: "email@test.com",
//     //                 telephone: "780372674",
//     //                 genre: "M",
//     //                 prenom: "p",
//     //                 nom: "n",
//     //                 date_de_naissance: new Date("2020-01-01"),
//     //                 localisationId: 2
//     //             }
//     //         ]

//     //         const expected: sdf[] = [
//     //             {
//     //                 email: "emailtest@email.com",
//     //                 telephone: "780372674",
//     //                 genre: "M",
//     //                 prenom: "p",
//     //                 nom: "n",
//     //                 date_de_naissance: new Date("2020-01-01")
//     //             }, {
//     //                 email: "email@test.com",
//     //                 telephone: "780372674",
//     //                 genre: "M",
//     //                 prenom: "p",
//     //                 nom: "n",
//     //                 date_de_naissance: new Date("2020-01-01")
//     //             }
//     //         ]

//     //         const repo = new DoctorRepository()
//     //         Doctor.findAll = jest.fn().mockResolvedValue(mockReponse)

//     //         const result = await repo.findAll()

//     //         expect(result).toEqual(expected)
//     //         expect(Doctor.findAll).toHaveBeenCalledTimes(1)
//     //     })
//     // })

//     // describe('Doctor post', () => {
//     //     it("doit retourne les details de l'utilisateur", async () => {

//     //         const mockReponse: sdf = {
//     //             email: "a@a.com",
//     //             telephone: "0123456789",
//     //             mot_de_passe: "test",
//     //             localisationId: 0,
//     //             prenom: "gaet",
//     //             nom: "an",
//     //             genre: "M",
//     //             date_de_naissance: new Date('2000-01-20')
//     //         }

//     //         const expected: sdf = {
//     //             email: "a@a.com",
//     //             telephone: "0123456789",
//     //             prenom: "gaet",
//     //             nom: "an",
//     //             genre: "M",
//     //             date_de_naissance: new Date('2000-01-20')
//     //         }

//     //         Doctor.create = jest.fn().mockResolvedValue(mockReponse)

//     //         const repo = new DoctorRepository()
//     //         const result = await repo.create(mockReponse)

//     //         expect(result).toEqual(expected)
//     //         expect(Doctor.create).toHaveBeenCalledTimes(1)
//     //     })
//     // })

// })