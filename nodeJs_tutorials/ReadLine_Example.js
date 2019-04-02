//import readline from 'readline';


const readline = require('readline');

const rl = readline.createInterface({ input  : process.stdin,
                                      output : process.stdout });

let num1=Math.floor((Math.random()*10)+1);
let num2=Math.floor((Math.random()*10)+1);

let answer = num1 + num2;
rl.question(`What is ${num1} + ${num2} ? \n`,
(userInput)=> {
//console.log(userInput);

if(userInput.trim() == answer){
rl.close();
}else{
    rl.setPrompt('Wrong answer!!!... Please try again\n');
    rl.prompt();
    rl.on('line',(userInput)=>{
        if(userInput.trim() == answer)
           rl.close();
        else{
            rl.setPrompt(`Your answer ${userInput} is incorrect, Please try again \n`)
            rl.prompt();
    }
    });
}
});

//event listener to close readline
rl.on('close',()=>{
    console.log('Correct!!!..');
})