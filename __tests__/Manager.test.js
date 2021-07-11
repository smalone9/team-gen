const Manager = require("../lib/Manager");

// test create manager obj.
test('creates manager object', () => {
    const manager = new Manager();

    expect(typeof manager).toBe("object");
});

// test workNumber
test("workNumber responsive", () => {
    const testValue = "Manager";
    const manager = new Manager("blue", 4, "cory@gmail.com", 4537214);
    expect(manager.getWorkNumber()).toEqual(expect.any(Number));
});

// test getRole
test("GitHub responsive", () => {
    const testValue = "Manager";
    const manager = new Manager("blue", 4, "cory@gmail.com", testValue);
    expect(manager.getRole()).toBe(testValue);
});