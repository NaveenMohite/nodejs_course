/*
usage of Events Module and EventEmitter Class 
*/

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//Event with out arguments
eventEmitter.on('tutorials',() => {
    console.log('\nEvent Handler example with out arguments');
});

//Event with arguments
eventEmitter.on('tutorials',(num1,num2) => {
    console.log('\nEvent Handler example with arguments');
    console.log('\nsum : '+ (num1+num2));
});

//even with out praameter
//eventEmitter.emit('tutorials');

//event with parameter
eventEmitter.emit('tutorials',2,3);


class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
let objNav = new Person('Naveen');
let objMohi = new Person('Mohite');


objNav.on('name',()=> {
    console.log('My Name is '+ objNav.name)
}); 


objNav.on('name',()=> {
    console.log('My Last Name is '+ objMohi.name)
}); 
objNav.emit('name');
objMohi.emit('name');