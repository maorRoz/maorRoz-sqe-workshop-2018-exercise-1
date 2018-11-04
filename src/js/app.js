import $ from 'jquery';
import {parseCode} from './code-analyzer';
import bodyTabler from './tabler'; 

const createParsedCodeTable = (parsedCode) => {
    $('#outputTable td').remove();
    const { body } = parsedCode;
    bodyTabler(body);
};

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        const codeToParse = $('#codePlaceholder').val();
        const parsedCode = parseCode(codeToParse);
        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
        createParsedCodeTable(parsedCode);
    });
});