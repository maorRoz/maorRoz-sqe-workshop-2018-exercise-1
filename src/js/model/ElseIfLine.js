import IfLine from './IfLine';

const type = 'else if statement';

export default class ElseIfLine extends IfLine{
    constructor(lineNum, statement){
        super(lineNum, statement);
        this.lineType = type;    
    }
}