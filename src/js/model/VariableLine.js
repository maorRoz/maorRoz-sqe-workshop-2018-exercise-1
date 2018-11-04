import Line from './Line';

const type = 'VariableDeclarator';

export default class VariableLine extends Line{
    constructor(lineNum, object){
        super(lineNum, type);
        const { id } = object;
        this.lineName = id.name;
    }
}