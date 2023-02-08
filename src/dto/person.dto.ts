export interface PersonDTO {
    lastname: string,
    firstname: string,
}

export interface PersonDTOFull extends PersonDTO {
    person_id?: number,
    password: string
}