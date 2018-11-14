/* eslint-disable max-lines-per-function */
import { expect } from 'chai';
import {extractValue} from '../src/js/valueExtractor';

describe('Value Extractor Tests', () => {
    describe('UnaryExpression', () => {
        it('UnaryExpression', () => {
            const unaryExpression = { type: 'UnaryExpression', operator: '-', argument: {type: 'Literal', value: 5}};
            const stringResult = extractValue(unaryExpression);
            expect(stringResult).to.equal('-5');
        });
        it('UnaryExpression with parenthesis', () => {
            const unaryExpression = { type: 'UnaryExpression', operator: '-', argument: {type: 'Literal', value: 5}};
            const stringResult = extractValue(unaryExpression, true);
            expect(stringResult).to.equal('(-5)');
        });
    });

    describe('BinaryExpression', () => {
        it('BinaryExpression', () => {
            const binaryExpression = { type: 'BinaryExpression', operator: '+', left: {type: 'Literal', value: 5}, right: {type: 'Literal', value: 2}};
            const stringResult = extractValue(binaryExpression);
            expect(stringResult).to.equal('5+2');
        });
        it('BinaryExpression with parenthesis', () => {
            const binaryExpression = { type: 'BinaryExpression', operator: '+', left: {type: 'Literal', value: 5}, right: {type: 'Literal', value: 2}};
            const stringResult = extractValue(binaryExpression, true);
            expect(stringResult).to.equal('(5+2)');
        });
    });

    describe('MemberExpression', () => {
        it('Computed MemberExpression', () => {
            const memberExpression = { 
                type: 'MemberExpression',
                object:{ type: 'Identifier', name: 'id'},
                property: {type: 'Literal', value: 5},
                computed: true
            };
            const stringResult = extractValue(memberExpression);
            expect(stringResult).to.equal('id[5]');
        });
        it('Not Computed MemberExpression', () => {
            const memberExpression = { 
                type: 'MemberExpression',
                object:{ type: 'Identifier', name: 'id'},
                property: { type: 'Identifier', name: 'field'},
                computed: false
            };
            const stringResult = extractValue(memberExpression);
            expect(stringResult).to.equal('id.field');
        });
    });

    describe('Identifier', () => {
        const identifierExpression = { type: 'Identifier', name: 'id'};
        const stringResult = extractValue(identifierExpression);
        expect(stringResult).to.equal('id');
    });

    describe('Literal', () => {
        const literalExpression = {type: 'Literal', value: 13};
        const stringResult = extractValue(literalExpression);
        expect(stringResult).to.equal('13');
    });

    describe('Faked Type', () => {
        const fakedExpression = {type: 'fake'};
        const stringResult = extractValue(fakedExpression);
        expect(stringResult).to.equal('');
    });
});