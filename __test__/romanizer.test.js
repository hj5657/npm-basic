import { iteratee } from "lodash";
import {transfrom} from "../src/romanizer"

describe('romanizer',()=>{
    it('should return X when input 10',()=>{
        const result = transfrom(10);
        expect(result).toEqual("X");
    });
});