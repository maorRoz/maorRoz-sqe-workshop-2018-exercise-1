import FunctionLine from './FunctionLine.js';
import { addHtmlLineToOutputTable } from './outputTable.js';



const functionTabler = (lineNum,object) => {
    const functionLine = new FunctionLine(lineNum,object);
    addHtmlLineToOutputTable(functionLine);
    const { params, body } = functionLine;
    params.forEach(param => lineTabler(lineNum, param));
    body.forEach(statement => lineTabler(lineNum + 1, statement));
};


export const lineTabler = (lineNum, object) =>
{
    const { type } = object;
    switch(type){
    case 'FunctionDeclaration':
        return functionTabler(lineNum, object);
    case 'VariableDeclaration':
    case 'Param':
    default:
    }
};