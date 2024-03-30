#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 25000; //dollar
let myPin = 1212;

console.log(chalk.grey("  Welcome To Moiz Atm"));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin ",
    type: "number",
  },
]);

if(pinAnswer.pin === myPin){
  console.log(chalk.yellowBright(" Correct Pin"));
   
  let operator = await inquirer.prompt([
    { name: "operation",
    message: "Please Select operation",
    type: "list",
    choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"],

  }]);
    
  if(operator.operation === "Withdraw"){
    let amount = await inquirer.prompt([
      {
        name : 'myAmount',
        message: "Enter Withdraw Amount",
        type : "number"
      },
      
    ]);
   if(myBalance >= amount.myAmount ){
    myBalance -= amount.myAmount;
    console.log(chalk.yellowBright(`remainig balance is ${myBalance}`));
  
  }else if(myBalance < amount.myAmount){
    console.log(chalk.gray("Insufficient balance"));
    
  }
  
}else if(operator.operation === "Check Balance"){
  console.log(chalk.magenta(`your Balance is ${myBalance}`));
  
}else if(operator.operation === "Fast Cash"){
  let selecAmount = await inquirer.prompt([
    {
      name: "select",
      message: "please select a amount",
      type: "rawlist",
      choices: [1000, 5000, 10000, 15000 ]
    }])
    myBalance -= selecAmount.select,
    console.log(chalk.greenBright(` your remaining balance is ${myBalance}`));
    

}else if (operator.operation === "Exit"){
  console.log(chalk.italic.magentaBright("Ok by phir milenge Duaon me yaad rakhna Allah HAFIZ"));
  

}

}else{
  console.log(chalk.italic.red("your pin is Incorrect"));
  
}
