import FunctionLine from './FunctionLine.js';
import { addHtmlLineToOutputTable, getCurrentLineNum } from './outputTable.js';
import ParamLine from './ParamLine.js';
import AssignmentLine from './AssignmentLine.js';


const functionParamTabler = (lineNum, param) => {
    const { type } = param;
    const functionParam = type === 'AssignmentPattern' ? new ParamLine(lineNum, param) : new AssignmentLine(lineNum, param);
    addHtmlLineToOutputTable(lineNum,functionParam);
};

const functionTabler = (lineNum,functionObject) => {
    const functionLine = new FunctionLine(lineNum,functionObject);
    addHtmlLineToOutputTable(lineNum, functionLine.toHtml());
    const { params, body } = functionLine;
    params.forEach(param => functionParamTabler(lineNum, param));
    body.forEach(statement => lineTabler(lineNum + 1, statement));
};


const lineTabler = (lineNum, object) =>
{
    console.log(object);
    const { type } = object;
    switch(type){
    case 'FunctionDeclaration':
        functionTabler(lineNum, object); break;
    case 'VariableDeclaration':
    case 'Param':
    default:
    }
};

export default (parsedCodeBody) => {
    console.log(parsedCodeBody);
    for(let i = 0 ; i < parsedCodeBody.length ; i++){
        let lineNum = getCurrentLineNum();
        lineTabler(lineNum,parsedCodeBody[i]);
    }
};