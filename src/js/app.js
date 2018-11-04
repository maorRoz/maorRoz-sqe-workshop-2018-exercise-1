import $ from 'jquery';
import {parseCode} from './code-analyzer';
import lineTabler from './lineTabler';

const createParsedCodeTable = (object) => {
    $('#outputTable td').remove();
    const { body } = object;
    console.log(body);
    const lineNum = 1;
    for(let i = 0 ; i < body.length ; i++){
    //  $('outputTable').append(lineTabler(i,body).toHtml());
    }
};

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        const codeToParse = $('#codePlaceholder').val();
        const parsedCode = parseCode(codeToParse);
        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
        createParsedCodeTable(parsedCode);
    });
});