import Line from './Line';

const type = 'variable declaration';

export default class VariableLine extends Line{
    constructor(lineNum, object){
        super(lineNum, type);
        this.lineName = object.name;
    }
}