const toHtmlLineAttribute = (attribute) => {
    const htmlLineAttribute = document.createElement('td');
    htmlLineAttribute.setAttribute('align', 'center');
    htmlLineAttribute.innerHTML = attribute;
    return htmlLineAttribute;
};

const rowToHtml = (row) => {
    const htmlLineNum = toHtmlLineAttribute(row.lineNum);
    const htmlLineType = toHtmlLineAttribute(row.lineType);
    const htmlLineName = toHtmlLineAttribute(row.name);
    const htmlLineValue = toHtmlLineAttribute(row.value);
    return ({ htmlLineNum,htmlLineType,htmlLineName, htmlLineValue });
};

export const createHtmlElementRow = (row) => {
    const htmlRow = document.createElement('tr');
    const { htmlLineNum,htmlLineType,htmlLineName, htmlLineValue } = rowToHtml(row);
    htmlRow.append(htmlLineNum,htmlLineType,htmlLineName, htmlLineValue);
    return htmlRow;
};