import $ from 'jquery';
import {parseCode} from './code-analyzer';
import Line from './line.js';

const printParsedCode = (object) => {
    const { body } = object;
    let newLine;
    for(let i = 0 ; i < body.length ; i++){
        const { type } = body[i];
        switch(type){
        case 'FunctionDeclaration':
        case 'VariableDeclaration':
        case 'Literal':
        default:
        }
        $('#outputTable').append(newLine.toString());
        break;
    }
};

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        const codeToParse = $('#codePlaceholder').val();
        const parsedCode = parseCode(codeToParse);
        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
        console.log(parsedCode);
        printParsedCode(parsedCode);
    });
});