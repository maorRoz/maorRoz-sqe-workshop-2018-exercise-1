export default class Line {
    constructor(lineNum, type, name='', value=''){
        this.lineNum = lineNum;
        this.type = type;
        this.name = name;
        this.value = value;
    }

    toString(){
        return `<tr><td align=center>${this.lineNum}</td><td align=center>${this.type}</td><td align=center>${this.name}</td><td align=center>${this.value}</td></tr>`;
    }

}