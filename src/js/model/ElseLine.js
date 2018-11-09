import Line from './Line';

const type = 'else statement';

export default class ElseLine extends Line{
    constructor(lineNum){
        super(lineNum, type);
    }
}