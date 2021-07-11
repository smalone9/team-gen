const Intern = require("../lib/Intern");

// test create intern obj.
test('creates intern object', () => {
    const intern = new Intern();

    expect(typeof intern).toBe("object");
});

// test school name
test("school responsive", () => {
    const testValue = "Intern";
    const intern = new Intern("blue", 4, "cory@gmail.com", "University of Arizona");
    expect(intern.getSchool()).toEqual(expect.any(String));
});

// test getRole
test("GitHub responsive", () => {
    const testValue = "Intern";
    const intern = new Intern("blue", 4, "cory@gmail.com", testValue);
    expect(intern.getRole()).toBe(testValue);
});