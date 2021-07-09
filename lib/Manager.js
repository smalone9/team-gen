const Employee = require("./Employee");
// Manager constr. function
class Manager extends Employee {
    constructor(name, id, email, workNumber) {
        super(name, id, email);
        this.workNumber = workNumber;

    }
    getRole() {
        return "Manager";
    }
    getWorkNumber() {
        return this.workNumber;
    }
}
// export
module.exports = Manager;