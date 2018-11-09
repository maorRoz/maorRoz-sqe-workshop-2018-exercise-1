import { parseCode } from '../src/js/code-analyzer';
import { createElementTable } from '../src/js/controller/elementsTableController';

export const makeTestableTable = (code) => {
    const parsedCode = parseCode(code);
    return createElementTable(parsedCode);
};
