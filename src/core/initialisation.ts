
import { BookHandler } from "../handler/book.handler";
import { BookService } from "../service/book.service";
import { BookRepository } from "../repository/book.repository";

export const bookHandler = new BookHandler(new BookService(new BookRepository))
// export const doctorHandler = new DoctorHandler(new DoctorService(new DoctorRepository));
// export const patientHandler = new PatientHandler(new PatientService(new PatientRepository));
// export const personHandler = new PersonHandler(new PersonService(new PersonRepository));
// export const authentificationHandler = new AuthentificationHandler(new AuthentificationService(new TokenRepository, new PersonRepository));
// export const planningHandler = new PlanningHandler(new PlanningService(new PlanningRepository, new VacationRepository, new AppointementRepository))
// export const appointementHandler = new AppointementHandler(new AppointementService(new AppointementRepository))
// export const vacationHandler = new VacationHandler(new VacationService(new VacationRepository))
