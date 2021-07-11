const Engineer = require("../lib/Engineer");

// test engineer obj.
test('creates engineer object', () => {
    const engineer = new Engineer();

    expect(typeof engineer).toBe("object");
});

// test github username
test("GitHub responsive", () => {
    const testValue = "GitHub";
    const engineer = new Engineer("blue", 4, "cory@gmail.com", testValue);
    expect(engineer.getGitHub()).toBe(testValue);
})
// test getRole
test("GetRole responsive", () => {
    const testValue = "Engineer";
    const engineer = new Engineer("blue", 4, "cory@gmail.com", testValue);
    expect(engineer.getRole()).toBe(testValue);
})