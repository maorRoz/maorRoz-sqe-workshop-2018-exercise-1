import Line from './Line';
import { extractValue } from '../valueExtractor';

const type = 'return statement';

export default class ReturnLine extends Line{
    constructor(lineNum, statement){
        super(lineNum, type);
        const { argument } = statement;
        this.lineValue = extractValue(argument);
    }
}