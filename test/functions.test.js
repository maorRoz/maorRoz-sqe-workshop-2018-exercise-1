/* eslint-disable max-lines-per-function */
import { expect } from 'chai';
import {makeTestableTable } from '../src/js/util-test';

describe('Function Tests' , () => {
    let testedElementTable;
    let testedElementRows;
    describe('Function with no arguments', () => {
        beforeEach(() => {
            testedElementTable = makeTestableTable('function hello(){}');
            testedElementRows = testedElementTable.elementRows;
        });
        it('Element Table length', () => {
            expect(testedElementRows).to.have.lengthOf(1);
        });
        it('Function Line', () => {
            const expectedFunctionLine = {
                lineNum : 1,
                lineType: 'function declaration',
                lineName: 'hello',
                lineCondition: '',
                lineValue: ''
            };
            expect(testedElementRows[0]).to.deep.equal(expectedFunctionLine);
        });
    });
    describe('Two functions with no arguments', () => {
        before(() => {
            testedElementTable = makeTestableTable('function hello(){}\nfunction helloAgain(){}');
            testedElementRows = testedElementTable.elementRows;
        });
        it('Element Table length', () => {
            expect(testedElementRows).to.have.lengthOf(2);
        });
        it('Two Functions Line', () => {
            const expectedFirstFunctionLine = {
                lineNum : 1,
                lineType: 'function declaration',
                lineName: 'hello',
                lineCondition: '',
                lineValue: ''
            };
            const expectedSecondFunctionLine = {
                lineNum : 2,
                lineType: 'function declaration',
                lineName: 'helloAgain',
                lineCondition: '',
                lineValue: ''
            };
            expect(testedElementRows[0]).to.deep.equal(expectedFirstFunctionLine);
            expect(testedElementRows[1]).to.deep.equal(expectedSecondFunctionLine);
        });
    });
});