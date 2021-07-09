const { TestWatcher } = require("jest");
const Engineer = require("../lib/Engineer");
const Engineer = require("../lib/Engineer");
// test github
test("GitHub responsive", () => {
    const testValue = "GitHub";
    const Engineer = new Engineer("blue", 4, "cory@gmail.com", testValue);
    expect(Engineer.github).toBe(testValue);
})
// test github username
test("GitHub responsive", () => {
    const testValue = "GitHub";
    const Engineer = new Engineer("blue", 4, "cory@gmail.com", testValue);
    expect(Engineer.getGithub()).toBe(testValue);
})
// test getRole
test("GitHub responsive", () => {
    const testValue = "Engineer";
    const Engineer = new Engineer("blue", 4, "cory@gmail.com", testValue);
    expect(Engineer.getRole()).toBe(testValue);
})