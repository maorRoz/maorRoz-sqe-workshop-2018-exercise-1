/* eslint-disable max-lines-per-function */
import { expect } from 'chai';
import {parseCode} from '../src/js/code-analyzer';
import { createElementTable } from '../src/js/controller/elementsTableController';
//import FunctionLine from '../src/js/model/FunctionLine';

let testedElementTable;
let testedElementRows;

const makeTestableTable = (code) => {
    const parsedCode = parseCode(code);
    testedElementTable = createElementTable(parsedCode);
    testedElementRows = testedElementTable.elementRows;
};


describe('Function Tests' , () => {
    describe('Function with no arguments', () => {
        before(() => {
            makeTestableTable('function hello(){}');
        });
        it('Element Table length', () => {
            expect(testedElementRows).to.have.lengthOf(1);
        });
        it('Function Line', () => {
            const expectedFunctionLine = {
                lineNum : 1,
                lineType: 'FunctionDeclaration',
                lineName: 'hello',
                lineValue: ''
            };
            expect(testedElementRows[0]).to.deep.equal(expectedFunctionLine);
        });
    });
    describe('Two Functions with no arguments', () => {
        before(() => {
            makeTestableTable('function hello(){}\nfunction helloAgain(){}');
        });
        it('Element Table length', () => {
            expect(testedElementRows).to.have.lengthOf(2);
        });
        it('Two Functions Line', () => {
            const expectedFirstFunctionLine = {
                lineNum : 1,
                lineType: 'FunctionDeclaration',
                lineName: 'hello',
                lineValue: ''
            };
            const expectedSecondFunctionLine = {
                lineNum : 2,
                lineType: 'FunctionDeclaration',
                lineName: 'helloAgain',
                lineValue: ''
            };
            expect(testedElementRows[0]).to.deep.equal(expectedFirstFunctionLine);
            expect(testedElementRows[1]).to.deep.equal(expectedSecondFunctionLine);
        });
    });
});