const Employee = require("./Employee");
// Intern constr. function
class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;

    }
    getRole() {
        return "Intern";
    }
    getGitHub() {
        return this.github;
    }
}
// export
module.exports = Intern;