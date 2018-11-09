import Line from './Line';

const type = 'variable declarator';

export default class VariableLine extends Line{
    constructor(lineNum, object){
        super(lineNum, type);
        const { id } = object;
        this.lineName = id.name;
    }
}