import inquirer from "inquirer";

const randomNumber : number = Math.floor(10000  + Math.random() * 9000)

let myBalance : number = 0

let answer =await inquirer.prompt(
    [
        {
            name : "students",
            type : "input",
            message : "Enter student Name:",
            validate: function (values) {
                if (values.trim() !== "") {
                    return true;
                }
                return "Please Enter a non-empty value.";
            },
        },
        {
            name : "courses",
            type : "list",
            message:"Select the course to enrolled ",
            choices: ["MS office","HTML","Python","Typescript","Javascript"]

        }
    ]
);

const tutionFee :{[key:string]: number} = {
    "MS office": 2000,
    "HTML": 2500,
    "Python":10000,
    "Typescript": 6000,
    "Javascript":5000
};
console.log(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType =await inquirer.prompt([
    {
        name : "payment",
        type : "list",
        message : "Please select payment method",
        choices : ["Bank Transfer","Easypaisa","Jazzcash"]
    },
    {
        name : "amount",
        type: "input",
        message :"Transfer Money:",
        validate : function(value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value."
        },
    }
]);
console.log(`\n You select payment method ${paymentType.payment}\n`);

const tutionFees= tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees === paymentAmount) {
    console.log(`Conguralation you have sucessfully enrolled in ${answer.courses}.\n`);

} else {
    console.log("Invalid amount due to course\n")
}
