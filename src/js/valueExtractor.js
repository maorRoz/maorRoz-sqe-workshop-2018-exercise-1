/* eslint-disable complexity */
const binaryExpressionExtractValue = (expression, parenthesis) => {
    const { left, operator ,right } = expression;
    const binaryValue = extractValue(left, true)  + operator + extractValue(right, true);
    return parenthesis ? `(${binaryValue})` : binaryValue;
};

const memberExpressionExtractValue = (expression) => {
    const { object, property, computed } = expression;
    const propertyValue = extractValue(property);
    const propertyValueWrap = computed? `[${propertyValue}]` : `.${propertyValue}`;
    return extractValue(object) + propertyValueWrap;
};

const unaryExpressionExtractValue = (expression, parenthesis) => {
    const { argument, operator } = expression;
    const unaryValue =  operator + extractValue(argument, true);
    return parenthesis ? `(${unaryValue})` : unaryValue;
};

const updateExpressionExtractValue = (expression, parenthesis) => {
    const { argument, operator } = expression;
    const updateValue =  operator + extractValue(argument, true);
    return parenthesis ? `(${updateValue})` : updateValue;
};

const assignmentExpressionExtractValue = (expression, parenthesis) => {
    const {left, right, operator} = expression;
    const assignmentValue = extractValue(left) + operator + extractValue(right);
    return parenthesis ? `(${assignmentValue})` : assignmentValue;
};

export const extractValue = (expression, parenthesis = false) => {
    const { type } = expression || {};
    switch(type){
    case 'UnaryExpression':
        return unaryExpressionExtractValue(expression, parenthesis); 
    case 'BinaryExpression': 
        return binaryExpressionExtractValue(expression, parenthesis);
    case 'MemberExpression':
        return memberExpressionExtractValue(expression, parenthesis);
    case 'UpdateExpression':
        return updateExpressionExtractValue(expression, parenthesis);
    case 'AssignmentExpression':
        return assignmentExpressionExtractValue(expression, parenthesis);
    case 'Identifier': 
        return expression.name;
    case 'Literal':
        return expression.value.toString();
    default:
        return '';
    }
};