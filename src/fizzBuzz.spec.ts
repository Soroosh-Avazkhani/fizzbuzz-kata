import { expect } from 'chai';

const fizzBuzz = (input: number): string => {
    if(input % 15 === 0) return "FizzBuzz";
    if(input % 5 === 0) return "Buzz";
    if (input % 3 === 0) return "Fizz";
    
    return input.toString();
}

describe('FizzBuzz', () => {
    describe("when input is divisible by 3", () =>{
        it('should return "Fizz" when the input is 3', () => {
            expect(fizzBuzz(3)).to.equal("Fizz");
        })

        it('should return "Fizz" when the input is 6', () => {
            expect(fizzBuzz(6)).to.equal("Fizz");
        })
    })

    describe("when input is divisible by 5", () => {
        it('should return "Buzz" when the input is 5', () => {
            expect(fizzBuzz(5)).to.equal("Buzz");
        })

        it('should return "Buzz" when the input is 10', () => {
            expect(fizzBuzz(10)).to.equal("Buzz");
        })
    })

    describe("when input is divisible by 3 and 5", () => {
        it('should return "FizzBuzz" when the input is 15', () => {
            expect(fizzBuzz(15)).to.equal("FizzBuzz");
        })

        it('should return "FizzBuzz" when the input is 30', () => {
            expect(fizzBuzz(30)).to.equal("FizzBuzz");
        })

        it('should return "FizzBuzz" when the input is 45', () => {
            expect(fizzBuzz(45)).to.equal("FizzBuzz");
        })
    })

    describe("when input is not divisible by 3 or 5", () => {

        it('should return "2" when the input is 2', () => {
            expect(fizzBuzz(2)).to.equal("2");
        })

        it('should return "4" when the input is 4', () => {
            expect(fizzBuzz(4)).to.equal("4");
        })
    })
});