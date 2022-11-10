function sum (num1, num2){
    return num1+num2;
}
function subtract (num1, num2){
    return num1-num2;
}
function mulplication(num1, num2){
    return num1*num2;
}
function division(num1, num2){
    if(num2!=0)
    {
        return num1/num2;
    }
    else
    {
        console.log("Invalid Input");
    }
    
}
module.exports.sum= sum;
module.exports.subtract= subtract;
module.exports.mulplication= mulplication;
module.exports.division= division;