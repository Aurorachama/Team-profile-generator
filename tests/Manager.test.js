const Manager = require('../lib/manager');

describe("class Manager and methods", () => {
    it("should create a new Manager as a object via constructor", () => {
        const testManager = new Manager();
        expect(typeof(testManager)).toBe("object");
    });

    it("should taken the argument as parameter to create a new object", () => {
        const testName = "Ben";
        const testId = 100;
        const testEmail = "email@email.com";
        const testOfficeNumber = 2;
        const testManager = new Manager(testName, testId, testEmail, testOfficeNumber);
        expect(testManager.name).toBe(testName);
        expect(testManager.id).toBe(testId);
        expect(testManager.email).toBe(testEmail);
        expect(testManager.officeNumber).toBe(testOfficeNumber);
    });

    it("methods should return the corresponding value", () => {
        const testName = "Ben";
        const testId = 100;
        const testEmail = "email@email.com";
        const testOfficeNumber = 2;
        const testManager = new Manager(testName, testId, testEmail, testOfficeNumber);
        expect(testManager.getName()).toBe(testName);
        expect(testManager.getId()).toBe(testId);
        expect(testManager.getEmail()).toBe(testEmail);
        expect(testManager.getOfficeNumber()).toBe(testOfficeNumber);
        expect(testManager.getRole()).toBe("Manager");
    });
});