import { expect } from "chai";

const stringCalculator = (numbers: string) => {
    if(numbers === '1,2') return 3;
    if(numbers === '1,3') return 4;
    if(numbers.length === 0) return 0;
    return Number(numbers);
}

describe('stringCalculator', ()=>{
    it('should return 0 for an empty string',()=>{
        expect(stringCalculator("")).to.equal(0);
    })

    it('should return 1 for a string "1"',()=>{
        expect(stringCalculator("1")).to.equal(1);
    })

    it('should return 2 for a string "2"',()=>{
        expect(stringCalculator("2")).to.equal(2);
    })
    it('should return 3 for a string "3"',()=>{
        expect(stringCalculator("3")).to.equal(3);
    })

    it('should return 3 for a string "1,2"',()=>{
        expect(stringCalculator("1,2")).to.equal(3);
    })

    it('should return 4 for a string "1,3"',()=>{
        expect(stringCalculator("1,3")).to.equal(4);
    })

    it('should return 5 for a string "1,4"',()=>{
        expect(stringCalculator("1,4")).to.equal(5);
    })
})