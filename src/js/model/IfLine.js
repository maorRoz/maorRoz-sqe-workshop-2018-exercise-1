import Line from './Line';
import { extractValue } from '../valueExtractor';

const type = 'if statement';

export default class IfLine extends Line{
    constructor(lineNum, statement){
        super(lineNum, type);
        const { test } = statement;
        this.lineCondition = extractValue(test);
        
    }
}