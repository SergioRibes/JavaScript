class Surgeon  {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name;
    }
    get department() {
        return this._department;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
    takeVacationsDays(daysOff) {
       this._remainingVacationDays = this._remainingVacationDays - daysOff
    }   
}

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");


console.log(surgeonRomero.name);
surgeonRomero.takeVacationsDays(3);
console.log(surgeonRomero.remainingVacationDays);
