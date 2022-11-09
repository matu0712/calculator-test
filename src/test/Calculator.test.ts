import { Calculator } from "../app/Calculator";
 
describe('Calculator test suite', ()=>{
    test('1+2は3', ()=>{
        const result = Calculator.add(1,2);
        expect(result).toBe(3);
    });
 
    test('3-2は1', ()=>{
        const result = Calculator.subtract(3,2);
        expect(result).toBe(1);
    });
 
    test('2×9は18', ()=>{
        const result = Calculator.multiply(2,3);
        expect(result).toBe(6);
    });
 
    test('180÷9は20', ()=>{
        const result = Calculator.divide(3,2);
        expect(result).toBe(1.5);
    });
 
    test('1÷3は0.3333', ()=>{
        const result = Calculator.divide(1,3);
        expect(result).toBe(0.3333);
    });
 
    test('1÷3は0.3333以上0.3334未満', ()=>{
        const result = Calculator.divide(1,3);
        expect(result).toBeGreaterThanOrEqual(0.3333);
        expect(result).toBeLessThan(0.3334);
    });
})
