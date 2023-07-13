# Javascrypt get started & ES6 self taught:

<h2>1- First concept of JS</h2>
<p>
   Let and const concept. Let is a reserved word to declare variables whose preserve the scoping like the next<br>
   * Global scope 
   * Function scope
   * Module scope
   * Block scope 
</p> 
  <h4>Using let:</h4>

<code>
     // Block scoped
     {
       let x; // by default x value is undefined
       console.log(x); // undefined
       //Js is automatically typed language
       x = "Text literal";
       console.log(x); // "Text literal";
     }      
       let x=20;
       console.log(x); // 20
       x = "Str literal in global scope"; // change the type from integer to string literal just with equalize 
       console.log(x); // "Str literal in global scope"
</code>
     <h4>Using const:</h4>
         Const is a constant variablw which can not be reasigned with a new value.
         <code>
              const PI = 3.1415;
         </code>

         // Basic literal string creation
         `In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// String interpolation
const name = 'Lev', time = 'today';
`Hello ${name}, how are you ${time}?`

<h4>Using String Literals to create variable based UI with innerHTML property on modularize/amd</h4>

<h4>Checking for falsy values on variables</h4>
<p>It is possible to check for a falsy value in a variable with a simple conditional:</p>
<code>
if (!variable) {
  // When the variable has a falsy value the condition is true.
}
General Examples
var string = ""; // <-- falsy

var filledString = "some string in here"; // <-- truthy

var zero = 0; // <-- falsy

var numberGreaterThanZero // <-- truthy

var emptyArray = []; // <-- truthy, we'll explore more about this next

var emptyObject = {}; // <-- truthy
</code>

<h4>Fun With Arrays - truthy/falsy values - </h4>
<code>
if ([] == false) // <-- truthy, will run code in if-block

if ([]) // <-- truthy, will also run code in if-block

if ([] == true) // <-- falsy, will NOT run code in if-block

if (![]) // <-- falsy, will also NOT run code in if-block
</code>

<h4>Notes:</h4>
Data type evaluation values within Boolean context may be harmful. If the data type of the value is meant to be a number, the truthy/falsy evalution can result in an unexpected outcome:

<code>
const match = { teamA: 0, teamB: 1 }
if (match.teamA){
  // The following won't run due to the falsy evaluation
  console.log('Team A: ' + match.teamA);
}
</code>

Alternatively evaluate by using typeof or just the value

<code>
// Using the typeof
const match = { teamA: 0, teamB: 1 }
if (typeof match.teamA === 'number'){
  console.log('Team A: ' + match.teamA);
}

if ( match.teamA === 0 ){
  console.log('Its matched to Team A : ' + match.teamA);
  }else {
        console.log('Its not matched to Team A : ' + match.teamA);
}

<br/>----------------------------------------------------------------------------<br/>
<h3>String methods</h3>
<ul>
<li>slice();</li>
<li>replace();// usimmg regex like /g  -to replace all matches /i -to replace case sensitive matches</li>
<li>toUpperCase();</li>
<li>toLowerCase();</li>
<li>trim(); -trimSatart() - trimEnd()// remove white spaces</li>
<li>charAt(var); -charCodeAt() // return the char in the var specified position</li>
<li>split();  // convert into an array </li>
</ul>


</code>

<h3>Operation delete</h3>
<p>Delet operation erase a value fromm array or object but it sets the place to empty but let the space unfilled</p>

<code>var arboles = ['peumo', 'fresno', 'roble', 'acacio', 'pino'];
delete arboles[3];
if (3 in arboles) {
    // esta rama del código no se ejecuta
}</codde>