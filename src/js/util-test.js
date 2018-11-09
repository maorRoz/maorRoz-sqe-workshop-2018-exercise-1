import { parseCode } from './code-analyzer';
import { createElementTable } from './controller/elementsTableController';

export const makeTestableTable = (code) => {
    const parsedCode = parseCode(code);
    return createElementTable(parsedCode);
};

export const createExpectedFunction = (lineNum,lineName) => {
    return {
        lineNum,
        lineType: 'function declaration',
        lineName,
        lineCondition: '',
        lineValue: ''
    };
};

export const createExpectedVariable = (lineNum,lineName) => {
    return {
        lineNum,
        lineType: 'variable declaration',
        lineName,
        lineCondition: '',
        lineValue: ''
    };
};
