const Employee = require('../lib/employee');

describe("class Employee and methods", () => {
    it("should create a new employee as a object via constructor", () => {
        const testEmployee = new Employee();
        expect(typeof(testEmployee)).toBe("object");
    });

    it("should taken the argument as parameter to create a new object", () => {
        const testName = "Ben";
        const testId = 100;
        const testEmail = "email@email.com";
        const testEmployee = new Employee(testName, testId, testEmail);
        expect(testEmployee.name).toBe(testName);
        expect(testEmployee.id).toBe(testId);
        expect(testEmployee.email).toBe(testEmail);
    });

    it("methods should return the corresponding value", () => {
        const testName = "Ben";
        const testId = 100;
        const testEmail = "email@email.com";
        const testEmployee = new Employee(testName, testId, testEmail);
        expect(testEmployee.getName()).toBe(testName);
        expect(testEmployee.getId()).toBe(testId);
        expect(testEmployee.getEmail()).toBe(testEmail);
        expect(testEmployee.getRole()).toBe("Employee");
    });
});