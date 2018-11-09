import Line from './Line';

const type = 'Assignment expression';

export default class AssignmentLine extends Line{
    constructor(lineNum, object){
        super(lineNum, type);
        const { left , right } = object;
        const {name} = left;
        const {value} = right;
        this.lineName = name;
        this.lineValue = value;
        
    }
}