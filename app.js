// import ethers from "ethers";

const ethers = require("ethers")
const abi = require('./abi.json')
require('dotenv').config()

// const object = {
//     name:"Simon",
//     color:"red"
// }

// const nameOfperson = object.name;
// const color = object.color;
// const {name} = object;


// let name = 'joe'

// name =120




const ProviderUrl = process.env.PROVIDER_URL //gotten from Alchemy mainnet keys
const contractAdrress = "0xdAC17F958D2ee523a2206206994597C13D831ec7" //contract address for usdt from https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#code"

const Provider = new ethers.providers.JsonRpcProvider(ProviderUrl)
const tokenContract = new ethers.Contract(contractAdrress,abi,Provider)

/////////////////////////////////////////// Using .then method ////////////////////////////////////////////////////////
const getSomething = () =>{
    // declare provider
    // connect provider
    // send action
    // get action

    const Provider = new ethers.providers.JsonRpcProvider(ProviderUrl)
    // console.log(ProviderUrl)
    const tokenContract = new ethers.Contract(contractAdrress,abi,Provider)

    const tokenDeimal = tokenContract.name().then(data => console.log(data)).catch(e=> console.log("catch erro", e)).finally(() => console.log("this is final!!")) //.name is a promise

    // promises has three stages....pending, rejected and accepted
}

// getSomething()

// console.log(name, nameOfperson)

// console.log("I am running!!", abi)


//////////////////////////////////////////////////////// Using Async Method////////////////////

const getSomethingAsync = async ()=>{

    
    try{
        // const supply = await tokenContract.totalSupply()
        // const decimalValue = supply.toString()
        // // console.log(supply.toString(), "await supply")
        // const symbol = await tokenContract.symbol()
        // const owner = await tokenContract.owner()

        //you can use line 58 -62 and simply pass the variables to line 66 but you won't put await in line 66 in this instance

        const[res1, res2,res3] = await Promise.all([tokenContract.totalSupply(),tokenContract.symbol(), tokenContract.owner()])

        // another way to formatt the result
        const formatted = ethers.utils.formatEther(res1) //formatEther used in formatting the ether coin ie 1e18 
        const formatted2 = ethers.BigNumber.from(res1)
        const formmt = converttoHex(res1)
        const r = Number(formatted2);

        console.log(res1.toString(),'\n', res2,'\n', res3, "result promise all",'\n', formatted,'\n', formatted2,'\n', r)
        // console.log(decimalValue, "decimal value", symbol, owner)
    }
    catch{}
    finally{

    }
    
    
}

getSomethingAsync()