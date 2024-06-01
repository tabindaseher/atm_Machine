#! usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000; 
let pinCode = 6622;
 let pinNumber = await inquirer.prompt([ {
    name : "pin",
    type : "number",
    message : "Enter your pin code",
}]);
if(pinNumber.pin === pinCode){
console.log("Your pin code is correct !!!");
let operationAns = await inquirer.prompt([{
    name : "operation",
    message : "please select option",
    type : "list",
    choices : ["withdraw" , "check balance", "transfer money"]
}]);
if(operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt([{
        name : "amount",
        type : "number",
        message : "Enter your amount",
    }]);
    if(amountAns.amount <= myBalance){
     myBalance -= amountAns.amount
     console.log( "your remaining balance is : " +  myBalance);
    } else {
        console.log("Your balance is insufficient");

     }
}
else if(
    operationAns.operation === "check balance"
) 
{
    console.log( `your  current balance is ${myBalance}`);
}else if( operationAns.operation === "transfer money"){
    let tranferMoney = await inquirer.prompt([{
        name : "transfer",
        type :'number',
        message : "How much money would you like transfer?",
    }]);
    if(tranferMoney.transfer <= myBalance){
        myBalance += tranferMoney.transfer
 console.log(`Now , your balance is ${myBalance}`);
    }
    else {
        console.log("You can't transfer this amount ");
    }
}
}else{
    console.log("Your pin code is Incorrect!")
};
