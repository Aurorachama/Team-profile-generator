const Engineer = require('../lib/engineer');

describe("class Engineer and methods", () => {
    it("should create a new Engineer as a object via constructor", () => {
        const testEngineer = new Engineer();
        expect(typeof(testEngineer)).toBe("object");
    });

    it("should taken the argument as parameter to create a new object", () => {
        const testName = "Ben";
        const testId = 100;
        const testEmail = "email@email.com";
        const testGithub = "something";
        const testEngineer = new Engineer(testName, testId, testEmail, testGithub);
        expect(testEngineer.name).toBe(testName);
        expect(testEngineer.id).toBe(testId);
        expect(testEngineer.email).toBe(testEmail);
        expect(testEngineer.github).toBe(testGithub);
    });

    it("methods should return the corresponding value", () => {
        const testName = "Ben";
        const testId = 100;
        const testEmail = "email@email.com";
        const testGithub = "something";
        const testEngineer = new Engineer(testName, testId, testEmail, testGithub);
        expect(testEngineer.getName()).toBe(testName);
        expect(testEngineer.getId()).toBe(testId);
        expect(testEngineer.getEmail()).toBe(testEmail);
        expect(testEngineer.getGithub()).toBe(testGithub);
        expect(testEngineer.getRole()).toBe("Engineer");
    });
});