const Employee = require("./Employee");
// Engineer constr. function
class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;

    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.github;
    }
}
// export
module.exports = Engineer;