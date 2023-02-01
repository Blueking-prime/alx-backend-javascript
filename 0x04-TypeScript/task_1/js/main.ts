interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [newprop: string]: unknown;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = function (firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework (): string {
        return 'Currently working'
    }

    displayName (): string {
        return this.firstName
    }
}
