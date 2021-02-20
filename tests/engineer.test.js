const Engineer = require('../lib/engineer');
 
describe('engineer', () => {
  it("should hold the properties as input provided correctly", () => {
    const newEngineer = new Engineer ()
    expect(newEngineer.name).toBe("");
    expect(newEngineer.id).toBe("");
    expect(newEngineer.email).toBe("");
  });

});
