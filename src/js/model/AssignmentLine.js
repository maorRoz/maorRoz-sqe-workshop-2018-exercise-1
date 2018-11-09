import Line from './Line';
import { extractValue } from '../valueExtractor';

const type = 'assignment expression';

export default class AssignmentLine extends Line{
    constructor(lineNum, expression){
        super(lineNum, type);
        const { left , right } = expression;
        const { name } = left;
        this.lineName = name;
        this.lineValue = extractValue(right);
        
    }
}