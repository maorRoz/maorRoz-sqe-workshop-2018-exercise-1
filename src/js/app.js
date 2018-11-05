import $ from 'jquery';
import {parseCode} from './code-analyzer';
import { createElementTable, implementElementTableUI } from './controller/elementsTableController'; 

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        const codeToParse = $('#codePlaceholder').val();
        const parsedCode = parseCode(codeToParse);
        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
        createElementTable(parsedCode);
        implementElementTableUI(parsedCode);
    });
});