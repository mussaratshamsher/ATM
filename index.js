#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 15000;
let myPin = 1234;
let myAccount = 1234;
// welcome message for user
console.log(chalk.bold.magenta(" WELCOME to ATM Program by Mussarat."));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: (chalk.bold.green.underline("Enter your pin code:"))
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.bold.blue("Pin code is Correct! Thank You to login."));
    let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: (chalk.bold.blue("Select Your desired option from following:")),
            choices: ["Withdraw Money", "Check Balance", "Fast Cash", "Easy Transfer"]
        }]);
    if (operationAns.operation == "Withdraw Money") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: (chalk.bold.yellow("Enter amount to withdraw:"))
            }]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.bold.red("Insufficient Balance"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.bold.cyan(`${amountAns.amount} rupees withdraw successfully`));
            console.log(chalk.bold.cyan(`Your Remaining Balance is: ${myBalance}`));
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.bold.gray(`Your Account Balance is ${myBalance}`));
    }
    else if (operationAns.operation === "Fast Cash") {
        let quickAmount = await inquirer.prompt([{
                name: "cash",
                type: "list",
                message: "Select Fast cash amount: ",
                choices: ["2000", "5000", "10000", "12000"]
            }]);
        myBalance -= quickAmount.cash;
        console.log(chalk.bold.green(`${quickAmount.cash} rupees Transaction is successfull.`));
        console.log(chalk.bold.green(`Your remaining account Balance is ${myBalance}`));
    }
    else if (operationAns.operation === "Easy Transfer") {
        let quickTransfer = await inquirer.prompt([{
                name: "account",
                type: "number",
                message: "Enter Account number to Transfer money:"
            }]);
        if (quickTransfer.account === myAccount) {
            console.log(chalk.bold.yellow("Your given account number is correct."));
            let transferAns = await inquirer.prompt([{
                    name: "money",
                    type: "number",
                    message: "Please enter money to transfer:"
                }]);
            if (transferAns.money > myBalance) {
                console.log(chalk.bold.red("Invalid operation! Please try again."));
            }
            else {
                myBalance -= transferAns.money;
                console.log(chalk.bold.cyan(`${transferAns.money} rupees are transferred to ${myAccount}`));
                console.log(chalk.bold.cyan(`Your remaining Balance is ${myBalance}`));
            }
        }
    }
}
else {
    console.log(chalk.bold.red("Pin code is Invalid! please try again"));
}
