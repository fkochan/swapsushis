/*
The following code examples shows how one could swap tokens programmatically via Web3.js

We'll be testing some of the write functions from the SushiV2Router02 Contract
*/

//Dependencies
const Web3 = require('web3')
const fs = require('fs')
require('dotenv')
require('./abi.json')


let web3 = new Web3(Web3.givenProvider || process.env.RPC_URL)

//Account
const ks = process.env.KEYSTORE
const decrypted = web3.eth.accounts.decrypt(ks, process.env.PASSWORD)


// SushiV2Router02 Contract and ABI
let abifile = fs.readFileSync('./abi.json')
let contract_abi = JSON.parse(abifile)
let contract_address = "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F"
let router_contract = new web3.eth.Contract(contract_abi, contract_address)
//console.log(router_contract)


//swapETHForExactTokens function 
router_contract.methods.swapExactETHForTokens(payable_amun_ether, amount_out, path_address, to_address, deadline)

/* STILL IN DEV */



