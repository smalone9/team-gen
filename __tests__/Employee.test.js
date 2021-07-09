const Employee = require("../lib/Employee");

test('creates employee object', () => {
    const employee = new Employee();

    expect(typeof employee).toBe("object");
});

test('add name', () => {
    const name = "Cory";
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
});

test('add id', () => {
    const id = 5;    
    const employee = new Employee("_", id);

    expect(employee.getId()).toEqual(id);
});

test('add email', () => {
    const email = "hdd@gmail.com";    
    const employee = new Employee("_", 5, email);

    expect(employee.getEmail()).toEqual(email);
});