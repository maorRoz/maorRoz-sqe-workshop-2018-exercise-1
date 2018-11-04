export default class Line {
    constructor(lineNum, lineType){
        this.lineNum = lineNum;
        this.lineType = lineType;
        this.name = '';
        this.value = '';
    }

    toHtmlLineAttribute(attribute){
        const htmlLineAttribute = document.createElement('td');
        htmlLineAttribute.setAttribute('align', 'center');
        htmlLineAttribute.innerHTML = attribute;
        return htmlLineAttribute;
    }

    toHtml(){
        const htmlLineNum = this.toHtmlLineAttribute(this.lineNum);
        const htmlLineType = this.toHtmlLineAttribute(this.lineType);
        const htmlLineName = this.toHtmlLineAttribute(this.name);
        const htmlLineValue = this.toHtmlLineAttribute(this.value);
        return ({ htmlLineNum,htmlLineType,htmlLineName, htmlLineValue });
    }

}