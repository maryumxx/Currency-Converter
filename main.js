#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.79,
    INR: 83.6,
    PKR: 278.60
};
let userAmount = await inquirer.prompt([
    {
        name: 'from',
        message: 'Convert from: ',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Convert to: ',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'Amount',
        message: 'Enter the conversion amount: ',
        type: 'number'
    }
]);
let fromAmount = currency[userAmount.from];
let toAmount = currency[userAmount.to];
let conversionAmount = userAmount.Amount;
let baseAmount = conversionAmount / fromAmount;
let convertedAmount = Math.floor((baseAmount * toAmount) + 1);
console.log(convertedAmount);
