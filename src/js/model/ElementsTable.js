export default class ElementsTable{
    constructor(){
        this.currentLineNum = 1;
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

    increaseLine(){
        this.currentLineNum++;
    }

    setVariable(variableName,value){
        const variableIndex = this.elementRows.findIndex(elementRow => elementRow.lineType === 'VariableDeclarator'
         && elementRow.lineName === variableName);
        if(variableIndex !== -1){
            this.elementRows[variableIndex].lineValue = value.toString();
        }
    }

}