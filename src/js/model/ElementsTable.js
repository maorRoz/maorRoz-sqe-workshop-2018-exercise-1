export default class ElementsTable{
    constructor(){
        this.currentLineNum = 0;
        this.elementRows = [];
    }

    addRow(element){
        this.elementRows.push(element);
        this.currentLineNum = element.lineNum;
        return this.currentLineNum;
    }

    get CurrentLineNum(){
        return this.currentLineNum;
    }

}