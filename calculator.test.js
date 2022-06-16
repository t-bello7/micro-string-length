const Calculator = require("./calculator");

describe("Calculator", ()=>{
    const calculator = new Calculator();

    describe("Interface check", ()=> {
        test("defines Add()", () => {
            expect(typeof calculator.add).toBe("function");
        })
        test("defines subtract()", () => {
            expect(typeof calculator.subtract).toBe("function");
        })     
        test("defines multiply()", () => {
            expect(typeof calculator.multiply).toBe("function");
        })     
        test("defines divide", () => {
            expect(typeof calculator.divide).toBe("function");
        })
    })

    describe("Result check",() => {

    })
})