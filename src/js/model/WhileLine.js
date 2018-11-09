import Line from './Line';
import { extractValue } from '../valueExtractor';

const type = 'while statement';

export default class WhileLine extends Line{
    constructor(lineNum, statement){
        super(lineNum, type);
        const { test } = statement;
        this.lineCondition = extractValue(test);
        
    }
}