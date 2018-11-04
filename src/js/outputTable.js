import $ from 'jquery';

export const cleanOutputTable = () => $('#outputTable td').remove();

export const addHtmlLineToOutputTable = (Line) => {
    const htmlRow = document.createElement('tr');
    const { htmlLineNum,htmlLineType,htmlLineName, htmlLineValue } = Line;
    htmlRow.append(htmlLineNum,htmlLineType,htmlLineName, htmlLineValue);
    $('#outputTable').append(htmlRow);
};
