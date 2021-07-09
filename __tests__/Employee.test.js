const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

test('creates employee object', () => {
    const employee = new Employee('Cory');

    expect(employee.name).toBe('Cory');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('cory@gmail.com');
});