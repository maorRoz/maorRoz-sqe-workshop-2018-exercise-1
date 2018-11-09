import { parseCode } from './code-analyzer';
import { createElementTable } from './controller/elementsTableController';

export const makeTestableTable = (code) => {
    const parsedCode = parseCode(code);
    return createElementTable(parsedCode);
};
