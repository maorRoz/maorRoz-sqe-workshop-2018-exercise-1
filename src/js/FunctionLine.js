import Line from './line';

const type = 'FunctionDeclaration';

export default class FunctionLine extends Line{
    constructor(lineNum, object){
        super(lineNum, type);
        const { name , params} = object;
        const blockStatement = object.body;
        this.name = name;
        this.params = params;
        this.body = blockStatement.body; 
        
    }
}