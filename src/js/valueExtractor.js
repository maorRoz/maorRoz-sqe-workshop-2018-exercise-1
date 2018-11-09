/* eslint-disable complexity */
const binaryExpressionExtractValue = (expression) => {
    const { left, operator ,right } = expression;
    return extractValue(left)  + operator + extractValue(right);
};

const memberExpressionExtractValue = (expression) => {
    const { object, property } = expression;
    return `${extractValue(object)}[${extractValue(property)}]`; 
};

const unaryExpressionExtractValue = (expression) => {
    const { argument, operator } = expression;
    return operator + extractValue(argument);
};

export const extractValue = (expression) => {
    const { type } = expression;
    switch(type){
    case 'UnaryExpression':
        return unaryExpressionExtractValue(expression); 
    case 'BinaryExpression': 
        return binaryExpressionExtractValue(expression);
    case 'MemberExpression':
        return memberExpressionExtractValue(expression);
    case 'Identifier': 
        return expression.name;
    case 'Literal':
        return expression.value;
    default:
    }
};