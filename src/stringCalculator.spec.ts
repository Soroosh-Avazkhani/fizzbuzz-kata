import { expect } from "chai";

const stringCalculator = (numbers: string) => {
    if (numbers === '1') return 1;
    if (numbers === '2') return 2;
    return 0;
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
})