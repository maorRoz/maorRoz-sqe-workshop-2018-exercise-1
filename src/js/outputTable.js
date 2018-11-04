import $ from 'jquery';

let currentLineNum = 1;

export const cleanOutputTable = () => $('#outputTable td').remove();

export const addHtmlLineToOutputTable = (lineNum, line) => {
    const htmlRow = document.createElement('tr');
    const { htmlLineNum,htmlLineType,htmlLineName, htmlLineValue } = line;
    htmlRow.append(htmlLineNum,htmlLineType,htmlLineName, htmlLineValue);
    $('#outputTable').append(htmlRow);
    currentLineNum = lineNum;
};

export const getCurrentLineNum  = () => currentLineNum;
