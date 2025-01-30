class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name () {
        return this._name;
    }

    get remainingVacationDays () {
        return this._remainingVacationDays;
    }

    takeVacationsDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
    static generatePassword() {
       return Math.floor(Math.random()*10001);
    }
}

class Nurse extends HospitalEmployee {
    constructor(name,certifications) {
        super(name);
        this._certifications = certifications;
    }

    get certifications () {
        return this._certifications;
    }
    
    addCertifications(newCertifications) {
        this._certifications.push(newCertifications);
    }
}

const nurseOlynik = new Nurse("Olynk",['Trauma', 'Pediatrics']);

nurseOlynik.takeVacationsDays(5);
console.log(nurseOlynik.remainingVacationDays);

nurseOlynik.addCertifications("Genetics");
console.log(nurseOlynik.certifications);

console.log(HospitalEmployee.generatePassword());