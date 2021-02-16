import { expect } from "chai";

const stringCalculator = (numbers: string) => {
    return 0;
}

describe('stringCalculator', ()=>{
    it('should return 0 for an empty string',()=>{
        expect(stringCalculator("")).to.equal(0);
    })

    it('should return 1 for an string "1"',()=>{
        expect(stringCalculator("1")).to.equal(1);
    })
})