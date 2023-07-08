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