import Line from './Line';

const type = 'variable declaration';

export default class VariableLine extends Line{
    constructor(object){
        super(object.loc, type);
        this.lineName = object.name;
    }
}