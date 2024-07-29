// APP2.js 
// Template literals
let name = 'Peter';
console.log(`Hellow ${name}, how old are you?`);
function age(){
    return `${25+7} years old`;
}
console.log(`I'm ${age()}`);

//**************************************************************************/
// Literal Object creation
 const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
 };
 console.log(`Welcome to ES6 ${person.name}`);
 const fruit = ['apple','banana','cherry'];
 console.log(fruit);
 console.log(fruit.toReversed());
  
// Mixed Types Array
const myArray = [10,'website',true,{name:'fruit',type:'apple'}];
console.log(myArray);
//console.log(myArray[3]);
 const len = myArray.length;
 const myObj = myArray[len-2];
 console.log(`Object, last element from myArray : ${myObj}`);

// Usinf for / foreach

const salad = ['tomatoes','pineapple','lettuce'];
// add a new element to the array 
   salad.push('advocado');
   salad.unshift('carrot');
 for(let i=0; i<salad.length; i++){
    console.log(salad[i]);
 }

 // Using Anonimous functions as regular function argument
   const greetings = function(name){
     return `Hi ${name}`;
   };
   console.log(greetings('Peter'));

// Using the forEach() method with anonimous functions ES6
const numbers = [1,2,3,4];
  numbers.forEach(function(number){
    console.log(number);
  });

  // for of and using Template Literals to injecting HTML from js  
    const elements=['JavaScript','Python','C ++','Java'];
    let html ="<b>Lista de lenguajes:</b><ul>";
       
    for(const element of elements){
        html += `<li>${element}</li>`;
      }
      html += `</ul>`;
      document.getElementById("main").innerHTML=html; 
  // Anonimous function self executed 
    (function(){
        alert("Anonimous function self executed!");
    })();

  // Event handler with anonimous functions
     document.getElementById("button").addEventListener('click',function(){
        alert("You clicked the text as button.");
     });
  // Running over object array with forEach() 
     const people = [
        {name:"Peter",age:32},
        {name:"Alice",age:25},
        {name:"Margaret",age:27}
     ];
     {
        let i=0;
        people.forEach(function(person){
            console.log(`${++i} - Person : ${person.name}       age: ${person.age}`);
         });
  
     }
// Fruits 
{
    const fruits = ['pineaple','apple','oraange','banana'];
     fruits.forEach(function(fruit,index){
       console.log(`Indice: ${index} - Fruta: ${fruit}  .`);
     });
     (function(){console.log(`Logitud de arrelgo de frutas: ${fruit.length}.`);})();
}