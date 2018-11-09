import Line from './Line';

const type = 'function declaration';

export default class FunctionLine extends Line{
    constructor(lineNum, object){
        super(lineNum, type);
        const { name } = object.id;
        this.lineName = name;
    }
}