const Manager = require('../lib/manager');
 
describe('Manager', () => {
  it("should hold the properties as input provided correctly", () => {
    const newManager = new Manager ()
    expect(newManager.name).toBe("");
    expect(newManager.id).toBe("");
    expect(newManager.email).toBe("");
  });
});
