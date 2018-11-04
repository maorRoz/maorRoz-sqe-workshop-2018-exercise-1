import FunctionLine from '../model/FunctionLine.js';
import ElementsTable from '../model/ElementsTable.js';
import ParamLine from '../model/ParamLine.js';
import AssignmentLine from '../model/AssignmentLine.js';
import * as ElementsTableUI from '../view/elementsTableUI';

let ElementsTableModel;

const functionBodyTabler = (lineNum, body) => {
    for(let i = 0; i < body.length; i++){
        lineTabler(lineNum + 1, body[i]);
    }
};


const functionParamTabler = (lineNum, param) => {
    console.log(param);
    const { type } = param;
    const functionParam = type === 'AssignmentPattern' ? new AssignmentLine(lineNum, param) : new ParamLine(lineNum, param);
    ElementsTableModel.addRow(functionParam);
};

const functionTabler = (lineNum,functionObject) => {
    const functionLine = new FunctionLine(lineNum,functionObject);
    ElementsTableModel.addRow(functionLine);
    const { params, body } = functionLine;
    params.forEach(param => functionParamTabler(lineNum, param));
    functionBodyTabler(lineNum, body);
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

const bodyTabler = (parsedCodeBody) => {
    for(let i = 0 ; i < parsedCodeBody.length ; i++){
        let lineNum  = ElementsTableModel.CurrentLineNum;
        lineTabler(lineNum,parsedCodeBody[i]);
    }
};

export default (parsedCodeBody) => {
    console.log(parsedCodeBody);
    ElementsTableModel = new ElementsTable();
    bodyTabler(parsedCodeBody);
    ElementsTableUI.clean();
    ElementsTableUI.createTable(ElementsTableModel);
};