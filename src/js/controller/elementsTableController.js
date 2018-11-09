import FunctionLine from '../model/FunctionLine.js';
import ElementsTable from '../model/ElementsTable.js';
import AssignmentLine from '../model/AssignmentLine.js';
import ReturnLine from '../model/ReturnLine.js';
import * as ElementsTableUI from '../view/elementsTableUI';
import VariableLine from '../model/VariableLine';

let ElementsTableModel;

const returnStatementTabler = (lineNum, returnStatement) => {
    const returnLine = new ReturnLine(lineNum,returnStatement);
    ElementsTableModel.addRow(returnLine);
};

const expressionStatementTabler = (lineNum, expressionStatement) => {
    const { expression } = expressionStatement;
    const assignmentLine = new AssignmentLine(lineNum, expression);
    ElementsTableModel.addRow(assignmentLine);
};

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
        const variableLine = new VariableLine(lineNum, declarations[i].id);
        ElementsTableModel.addRow(variableLine);
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

const expressionBodyTabler = (lineNum, objectStatements) => {
    console.log(objectStatements);
    const { type, body } = objectStatements;
    if(type !== 'BlockStatement'){
        return lineTabler(lineNum + 1, objectStatements);
    }
    for(let i = 0; i < body.length; i++){
        lineNum = ElementsTableModel.CurrentLineNum;
        lineTabler(lineNum + 1, body[i]);
    }
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
        expressionStatementTabler(lineNum,object); break;
    case 'WhileStatement':
        whileStatementTabler(lineNum,object); break;
    case 'IfStatement':
        ifStatementTabler(lineNum,object); break;
    case 'ReturnStatement':
        returnStatementTabler(lineNum,object); break;
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