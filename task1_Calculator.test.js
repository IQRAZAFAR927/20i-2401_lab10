const task1_Calculator = require('./task1_Calculator');


test("test casel testing sum method",() => {
 expect(task1_Calculator.sum(12,4)).toBe(16)
}); 


test("test casel testing subtract method",() => {
    expect(task1_Calculator.subtract(12,4)).toBe(8)
   });
   
   test("test casel testing mulplication method",() => {
    expect(task1_Calculator.mulplication(12,4)).toBe(48)
   });
   test("test casel testing division method",() => {
    expect(task1_Calculator.division(12,4)).toBe(3)
   });
   