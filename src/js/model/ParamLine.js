import Line from './Line';

const type = 'Param';

export default class ParamLine extends Line{
    constructor(lineNum, object){
        super(lineNum, type);
        const { name } = object;
        this.lineName = name;
    }
}