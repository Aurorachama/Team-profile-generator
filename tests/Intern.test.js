const Intern = require('../lib/intern');

describe("class Intern and methods", () => {
    it("should create a new Intern as a object via constructor", () => {
        const testIntern = new Intern();
        expect(typeof(testIntern)).toBe("object");
    });

    it("should taken the argument as parameter to create a new object", () => {
        const testName = "Ben";
        const testId = 100;
        const testEmail = "email@email.com";
        const testSchool = "Harvard University";
        const testIntern = new Intern(testName, testId, testEmail, testSchool);
        expect(testIntern.name).toBe(testName);
        expect(testIntern.id).toBe(testId);
        expect(testIntern.email).toBe(testEmail);
        expect(testIntern.school).toBe(testSchool);
    });

    it("methods should return the corresponding value", () => {
        const testName = "Ben";
        const testId = 100;
        const testEmail = "email@email.com";
        const testSchool = "Harvard University";
        const testIntern = new Intern(testName, testId, testEmail, testSchool);
        expect(testIntern.getName()).toBe(testName);
        expect(testIntern.getId()).toBe(testId);
        expect(testIntern.getEmail()).toBe(testEmail);
        expect(testIntern.getSchool()).toBe(testSchool);
        expect(testIntern.getRole()).toBe("Intern");
    });
});