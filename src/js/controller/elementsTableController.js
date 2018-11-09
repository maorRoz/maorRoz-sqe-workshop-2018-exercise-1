import FunctionLine from '../model/FunctionLine.js';
import ElementsTable from '../model/ElementsTable.js';
import AssignmentLine from '../model/AssignmentLine.js';
import * as ElementsTableUI from '../view/elementsTableUI';
import VariableLine from '../model/VariableLine';

let ElementsTableModel;

const whileStatementTabler = (lineNum, whileStatement) => {
    expressionBodyTabler(lineNum,whileStatement.body);
};

const alternateTabler = (alternate) => {
    const lineNum = ElementsTableModel.CurrentLineNum;
    expressionBodyTabler(lineNum,alternate);
};

const ifStatementTabler = (lineNum, ifStatement) => {
    const { alternate, consequent} = ifStatement;
    expressionBodyTabler(lineNum , consequent);
    alternateTabler(alternate);
};

const variableDeclaratorTabler = (lineNum, declarationsContainer) => {
    const { declarations } = declarationsContainer;
    for(let i = 0; i < declarations.length; i++){
        const variableLine = new VariableLine(lineNum, declarations[i]);
        ElementsTableModel.addRow(variableLine);
    }
};

const expressionBodyTabler = (lineNum, objectStatements) => {
    console.log(objectStatements);
    const { type, body } = objectStatements;
    if(type !== 'BlockStatement'){
        return lineTabler(lineNum +1, objectStatements);
    }
    for(let i = 0; i < body.length; i++){
        lineTabler(lineNum + 1, body[i]);
    }
};


const functionParamTabler = (lineNum, param) => {
    console.log(param);
    ElementsTableModel.addRow(new VariableLine(lineNum, param));
};

const functionTabler = (lineNum,functionObject) => {
    const functionLine = new FunctionLine(lineNum,functionObject);
    ElementsTableModel.addRow(functionLine);
    const { params, body } = functionObject;
    params.forEach(param => functionParamTabler(lineNum, param));
    expressionBodyTabler(lineNum, body);
};


// eslint-disable-next-line complexity
const lineTabler = (lineNum, object) =>
{
    console.log(object);
    const { type } = object;
    switch(type){
    case 'FunctionDeclaration':
        functionTabler(lineNum, object); break;
    case 'VariableDeclaration':
        variableDeclaratorTabler(lineNum, object); break;
    case 'ExpressionStatement':
        expressionStatementTabler(object); break;
    case 'WhileStatement':
        whileStatementTabler(lineNum,object); break;
    case 'IfStatement':
        ifStatementTabler(lineNum,object); break;
    case 'ReturnStatement':
    default:
    }
};

const bodyTabler = (parsedCodeBody) => {
    console.log(parsedCodeBody);
    for(let i = 0 ; i < parsedCodeBody.length ; i++){
        let lineNum  = ElementsTableModel.CurrentLineNum + 1;
        lineTabler(lineNum,parsedCodeBody[i]);
    }
};

export const createElementTable = (parsedCode) => {
    const { body } = parsedCode;
    ElementsTableModel = new ElementsTable();
    bodyTabler(body);
    return ElementsTableModel;
};

export const implementElementTableUI = () => {
    ElementsTableUI.clean();
    ElementsTableUI.createTable(ElementsTableModel);
};