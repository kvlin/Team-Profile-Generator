const Employee = require('../lib/employee');
 
describe('employee', () => {
  it("should hold the properties as input provided correctly", () => {
    const newEmployee = new Employee ("Kevin","KL","kevlin129@hotmail.com")
    expect(newEmployee.name).toBe("Kevin");
    expect(newEmployee.id).toBe("KL");
    expect(newEmployee.email).toBe("kevlin129@hotmail.com");
  });
});
