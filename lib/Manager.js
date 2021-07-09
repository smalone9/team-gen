const Employee = require("./Employee");
// Manager constr. function
class Manager {
    constructor(name, id, email, workNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.workNumber = workNumber;

    }
    getRole() {
        return "Manager";
    }
    getGitHub() {
        return this.github;
    }
}
// export
module.exports = Intern;