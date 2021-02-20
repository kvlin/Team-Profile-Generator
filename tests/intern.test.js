const Intern = require('../lib/intern');
 
describe('Intern', () => {
  it("should hold the properties as input provided correctly", () => {
    const newIntern = new Intern ()
    expect(newIntern.name).toBe("");
    expect(newIntern.id).toBe("");
    expect(newIntern.email).toBe("");
  });

});
