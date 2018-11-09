const binaryExpressionExtractValue = (expression) => {
    const { left, operator ,right } = expression;
    return extractValue(left) + operator + extractValue(right);
};

const memberExpressionExtractValue = (expression) => {
    const { object, property } = expression;
    return `${extractValue(object)}[${extractValue(property)}]`; 
};

export const extractValue = (expression) => {
    const { type } = expression;
    switch(type){
    case 'BinaryExpression': 
        return binaryExpressionExtractValue(expression);
    case 'MemeberExpression':
        return memberExpressionExtractValue(expression);
    case 'Identifier': 
        return expression.name;
    case 'Literal':
        return expression.value;
    default:
    }
};