import Line from './Line';

const type = 'AssignmentPattern';

export default class FunctionLine extends Line{
    constructor(lineNum, object){
        super(lineNum, type);
        const { left , right } = object;
        const {name} = left;
        const {value} = right;
        this.lineName = name;
        this.lineValue = value;
        
    }
}