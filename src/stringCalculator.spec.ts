import { expect } from "chai";

describe('stringCalculator', ()=>{
    it('should return 0 for an empty string',()=>{
        expect(stringCalculator("")).to.equal(0);
    })

})