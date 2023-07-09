let html = "<h3>Using string literals:</h3><ul>";
    let arr    = ["ES6 advanced","Java Script","Template literals"];
     
       for(const x of arr){
        html += `<li>${x}</li>`;
       }
      html += `</ul>`;
      let price = 24, IVA =0.31;
      let total = `${((price)*(1+IVA)).toFixed(2) }`; // It evals the calc and return with 2 decimal by the 

      // Formula is total=price * (1+IVA) 
      // but it must be restricted toFixed 2 places after the comma 
      
       // To obtain the Integer part we use original formule and use the trunc function from the JS math library
       let totalInt = Math.trunc(((price)*(1+IVA)));
      
      // To obtain the decimal part we divide the number by 1 and the rest [module] will be the decimal part
      let totalDec = `${(total%1).toFixed(2)*100}` // ((total*1).toFixed(2));                                                // toFixed() property
      
     

      document.getElementById("demo").innerHTML=html; 
      document.getElementById("price").innerHTML= `The total ${total} price within the IVA is:<b style="font-size:20px;"> \$${totalInt}.</b><sup>${totalDec}</sup>
      <br/>Using unicode Spetial characters: 
      <br/>Unicode  \\u\{2F804\} - \u{2F804} 
      <br/>\u00A9
      `;
      function changeImage() {
        let x=document.getElementById("image");
         //console.log(x);
         x.src="ubuntu.png";
         //alert("Hola");
      }
    



     let svg =`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
<path d="M28,10v5h-5l2.279-2.279C23.752,11.609,21.925,11,20,11c-4.962,0-9,4.038-9,9h-1c0-5.514,4.486-10,10-10
c2.191,0,4.271,0.711,5.993,2.007L28,10z"></path>
<path d="M20,2C10.075,2,2,10.075,2,20c0,9.925,8.075,18,18,18c9.925,0,18-8.075,18-18C38,10.075,29.925,2,20,2z
M20,37c-9.374,0-17-7.626-17-17S10.626,3,20,3s17,7.626,17,17S29.374,37,20,37z M29,20h1c0,5.514-4.486,10-10,10
c-2.193,0-4.272-0.711-5.993-2.007L12,30v-5h5l-2.279,2.279C16.248,28.391,18.075,29,20,29C24.963,29,29,24.963,29,20z"></path>
</svg>

  </p>

    
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <path d="M24.781,24.46L20,19.678V34h-1V19.678l-4.782,4.782l-0.637-0.637l5.918-5.918l5.918,5.918L24.781,24.46z"></path>
      <path d="M33.812,32H26v-1h7.812C36.673,31,39,28.771,39,26.031s-2.327-4.969-5.188-4.969
c-0.181,0-0.395-0.093-0.482-0.25c-0.089-0.158-0.133-0.346-0.038-0.5c0.554-0.91,0.834-1.877,0.834-2.875
c0-3.17-2.691-5.75-5.999-5.75c-0.902,0-1.797,0.209-2.661,0.623c-0.237,0.113-0.524,0.023-0.652-0.207
C23.053,8.955,19.652,7,15.937,7c-5.548,0-10.062,4.332-10.062,9.656c0,0.761,0.104,1.549,0.311,2.344
c0.035,0.133,0.013,0.275-0.061,0.392c-0.073,0.117-0.192,0.198-0.327,0.224C3.018,20.157,1,22.526,1,25.25C1,28.421,3.692,31,7,31
h6v1H7c-3.86,0-7-3.028-7-6.75c0-3.032,2.116-5.689,5.1-6.498c-0.149-0.708-0.225-1.412-0.225-2.096C4.875,10.78,9.837,6,15.937,6
c3.92,0,7.525,1.989,9.517,5.222c0.87-0.355,1.767-0.534,2.672-0.534c3.859,0,6.999,3.028,6.999,6.75
c0,0.924-0.201,1.823-0.599,2.681C37.642,20.485,40,22.998,40,26.031C40,29.322,37.224,32,33.812,32z"></path>
  </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <path d="M35.5,38h-11c-1.379,0-2.5-1.121-2.5-2.5v-19c0-1.378,1.121-2.5,2.5-2.5h11c1.379,0,2.5,1.122,2.5,2.5v19
C38,36.879,36.879,38,35.5,38z M24.5,15c-0.827,0-1.5,0.673-1.5,1.5v19c0,0.827,0.673,1.5,1.5,1.5h11c0.827,0,1.5-0.673,1.5-1.5v-19
c0-0.827-0.673-1.5-1.5-1.5H24.5z"></path>
      <path d="M31.5,35h-3c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3c0.276,0,0.5,0.224,0.5,0.5S31.776,35,31.5,35z"></path>
      <path d="M33,4.5V12h-1V5H3v18h17v1H3v2h17v1h-6.497c-0.144,0.893-0.688,2.883-2.741,5H20v1H9.5
c-0.209,0-0.396-0.13-0.469-0.326c-0.073-0.196-0.016-0.417,0.144-0.554c2.457-2.105,3.129-4.188,3.312-5.12H2.5
C2.224,27,2,26.776,2,26.5v-22C2,4.224,2.224,4,2.5,4h30C32.776,4,33,4.224,33,4.5z"></path>
  </svg>


  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <path d="M16.9,25.699c-0.128,0-0.256-0.049-0.354-0.146l-6.2-6.199c-0.195-0.195-0.195-0.512,0-0.707
s0.512-0.195,0.707,0l5.847,5.846l12.047-12.046c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707l-12.4,12.399
C17.156,25.65,17.028,25.699,16.9,25.699z"></path>
    <path d="M20,38.1c-0.048,0-0.097-0.007-0.144-0.021C19.209,37.885,4,33.194,4,22.1V3.5C4,3.224,4.224,3,4.5,3h31
C35.776,3,36,3.224,36,3.5v18.6c0,11.095-15.209,15.785-15.856,15.979C20.097,38.093,20.048,38.1,20,38.1z M5,4v18.1
c0,9.812,13.451,14.472,15,14.976c1.549-0.504,15-5.172,15-14.976V4H5z"></path>
</svg>


<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <path d="M20,26.002c-3.309,0-6-2.692-6-6.002s2.691-6.002,6-6.002S26,16.69,26,20S23.309,26.002,20,26.002z
M20,14.998c-2.757,0-5,2.244-5,5.002c0,2.758,2.243,5.002,5,5.002s5-2.244,5-5.002C25,17.242,22.757,14.998,20,14.998z"></path>
  <path d="M20,38c-0.851,0-1.73-0.074-2.766-0.232l-0.35-0.054l-0.883-4.639c-0.853-0.261-1.665-0.596-2.42-0.997
L9.68,34.731l-0.285-0.209c-1.499-1.098-2.813-2.41-3.905-3.903l-0.208-0.284l2.648-3.9c-0.411-0.773-0.749-1.591-1.007-2.438
l-4.636-0.884l-0.053-0.349C2.074,21.721,2,20.843,2,20c0-0.834,0.074-1.711,0.232-2.758l0.053-0.35l4.636-0.884
c0.26-0.852,0.598-1.669,1.006-2.437l-2.65-3.899l0.208-0.285c1.093-1.493,2.405-2.806,3.9-3.902L9.67,5.277l3.898,2.65
c0.765-0.407,1.581-0.743,2.433-1.003l0.884-4.637l0.349-0.054c2.063-0.316,3.506-0.314,5.522,0l0.348,0.054l0.884,4.633
c0.855,0.261,1.678,0.6,2.449,1.012l3.898-2.651l0.284,0.208c1.488,1.088,2.801,2.402,3.902,3.905l0.209,0.285l-2.652,3.901
c0.409,0.77,0.744,1.584,1.001,2.431l4.634,0.883l0.054,0.349C37.926,18.281,38,19.156,38,20c0,0.849-0.074,1.727-0.234,2.762
l-0.054,0.349l-4.634,0.883c-0.258,0.851-0.595,1.667-1.003,2.434l2.649,3.9l-0.208,0.284c-1.094,1.496-2.409,2.811-3.909,3.907
l-0.284,0.209l-3.897-2.653c-0.771,0.41-1.588,0.746-2.436,1.004l-0.884,4.635l-0.348,0.055C21.756,37.924,20.854,38,20,38z
M17.734,36.83c1.669,0.23,2.898,0.228,4.522,0.001l0.866-4.546l0.299-0.083c0.979-0.273,1.917-0.66,2.787-1.148l0.271-0.152
l3.819,2.6c1.207-0.921,2.281-1.994,3.2-3.198l-2.598-3.823l0.152-0.27c0.487-0.864,0.874-1.802,1.148-2.785l0.083-0.299
l4.544-0.865C36.945,21.427,37,20.701,37,20c0-0.696-0.055-1.421-0.17-2.256l-4.543-0.866l-0.083-0.299
c-0.273-0.979-0.658-1.915-1.146-2.783l-0.152-0.27l2.599-3.823c-0.924-1.209-1.996-2.283-3.193-3.197l-3.821,2.6L26.22,8.954
c-0.869-0.491-1.812-0.881-2.8-1.158l-0.299-0.083l-0.866-4.543c-1.638-0.229-2.86-0.231-4.52,0.001l-0.866,4.545l-0.298,0.084
c-0.987,0.278-1.925,0.665-2.786,1.149l-0.27,0.152l-3.82-2.598C8.492,7.423,7.42,8.495,6.502,9.696l2.598,3.822l-0.152,0.27
c-0.487,0.866-0.875,1.804-1.152,2.79l-0.084,0.297L3.17,17.741C3.055,18.585,3,19.31,3,20c0,0.696,0.055,1.423,0.172,2.263
l4.543,0.866l0.083,0.299c0.274,0.979,0.662,1.917,1.153,2.79l0.151,0.27l-2.596,3.823c0.917,1.201,1.991,2.273,3.197,3.194
l3.824-2.601l0.27,0.152c0.849,0.479,1.782,0.863,2.773,1.144l0.297,0.084L17.734,36.83z"></path>
</svg>


    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
      <path fill="#2fbf5b" d="M21,28c-3.86,0-7-3.141-7-7c0-3.86,3.14-7,7-7c3.859,0,7,3.14,7,7C28,24.859,24.859,28,21,28z M21,15 c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6S24.309,15,21,15z"></path>
      <path id="coganim" fill="#333333" d="M41.595,17.918l-5.882-0.96l-0.08-0.271c-0.306-1.036-0.724-2.044-1.242-2.996l-0.133-0.244l3.432-4.889
  c0.136-0.192,0.113-0.453-0.054-0.621l-3.63-3.626c-0.158-0.157-0.441-0.181-0.622-0.05l-4.823,3.468l-0.249-0.137
  c-0.959-0.526-1.975-0.95-3.02-1.257l-0.268-0.078L24,0.4C23.959,0.168,23.758,0,23.523,0h-5.13c-0.237,0-0.438,0.17-0.478,0.406
  l-0.953,5.833L16.69,6.317c-1.048,0.305-2.065,0.723-3.021,1.242l-0.247,0.134L8.61,4.256C8.427,4.124,8.144,4.148,7.988,4.307
  L4.36,7.932C4.195,8.099,4.172,8.358,4.307,8.551l3.384,4.842l-0.135,0.245C7.027,14.6,6.601,15.624,6.29,16.68L6.21,16.951
  l-5.808,0.965C0.169,17.955,0,18.156,0,18.394v5.13c0,0.235,0.167,0.437,0.398,0.478l5.808,1.028l0.078,0.267
  c0.313,1.062,0.738,2.085,1.263,3.043l0.136,0.247l-3.427,4.797c-0.138,0.192-0.117,0.454,0.051,0.621l3.626,3.629
  c0.158,0.157,0.437,0.182,0.618,0.055l4.851-3.394l0.244,0.133c0.956,0.521,1.976,0.942,3.03,1.251l0.271,0.079l0.969,5.839
  C17.956,41.83,18.157,42,18.396,42h5.128c0.235,0,0.438-0.168,0.479-0.398l1.037-5.856l0.267-0.08
  c1.039-0.309,2.055-0.734,3.017-1.265l0.245-0.136l4.883,3.425c0.08,0.057,0.175,0.086,0.275,0.086c0.13,0,0.255-0.051,0.344-0.14
  l3.625-3.63c0.168-0.168,0.189-0.432,0.051-0.625l-3.482-4.832l0.135-0.248c0.517-0.947,0.934-1.957,1.239-3l0.078-0.268
  l5.888-1.031C41.833,23.961,42,23.76,42,23.524v-5.128C42,18.158,41.829,17.957,41.595,17.918z M33.345,28.932l3.375,4.682
  l-3.049,3.051l-4.73-3.319c-0.149-0.105-0.369-0.112-0.53-0.017c-1.217,0.741-2.538,1.294-3.926,1.645
  c-0.185,0.048-0.326,0.2-0.359,0.386l-1.007,5.674h-4.314l-0.941-5.654c-0.032-0.19-0.173-0.344-0.361-0.391
  c-1.395-0.344-2.725-0.894-3.953-1.632c-0.156-0.095-0.376-0.088-0.525,0.019l-4.695,3.289l-3.05-3.053l3.322-4.642
  c0.113-0.157,0.12-0.366,0.02-0.533c-0.746-1.23-1.301-2.563-1.648-3.96c-0.045-0.186-0.196-0.327-0.384-0.36l-5.621-0.998v-4.313
  l5.623-0.936c0.19-0.032,0.343-0.172,0.39-0.359c0.348-1.397,0.903-2.731,1.648-3.964c0.1-0.165,0.093-0.372-0.017-0.529
  L5.332,8.33l3.049-3.05l4.659,3.329c0.15,0.105,0.371,0.114,0.53,0.02c1.229-0.736,2.559-1.283,3.951-1.623
  c0.189-0.046,0.331-0.2,0.361-0.392l0.923-5.648h4.311l0.994,5.673c0.033,0.188,0.175,0.34,0.36,0.387
  c1.386,0.344,2.71,0.896,3.937,1.638c0.158,0.096,0.382,0.086,0.534-0.021l4.674-3.359l3.048,3.049l-3.324,4.736
  c-0.11,0.156-0.118,0.363-0.02,0.529c0.731,1.217,1.278,2.535,1.623,3.917c0.047,0.187,0.2,0.327,0.391,0.358l5.699,0.933v4.31
  l-5.704,1.001c-0.188,0.033-0.34,0.175-0.386,0.361c-0.342,1.38-0.887,2.698-1.619,3.918
  C33.224,28.564,33.232,28.772,33.345,28.932z"></path>
  </svg>
`;
   let svgHandler = document.getElementById("svg");
       svgHandler.innerHTML = svg;

       // Using Falsy values, flags control on loops and iterators 
          let falsyStr = document.getElementById("falsy");
       
       // Created en Empty variable // Not filled by def its undefined
          let testFalsy;
            testFalsy ? falsyStr.innerHTML="Its evaluated as truthy":falsyStr.innerHTML="Its evaluated as Falsy just created has : "+testFalsy;
        
       // setting testFalsy = 0
       testFalsy = 0;
           testFalsy ? falsyStr.innerHTML+="<br/>Its evaluated as truthy with :"+testFalsy:falsyStr.innerHTML+="<br/>Its evaluated as Falsy with :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+testFalsy;  
       // setting testFalsy as empty array
       testFalsy = [];
           testFalsy ? falsyStr.innerHTML+="<br/>Its evaluated as truthy with empty array []:"+testFalsy:falsyStr.innerHTML+="<br/>Its evaluated as Falsy with :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+testFalsy;  
       // setting testFalsy as empty object
       testFalsy = {};
           testFalsy ? falsyStr.innerHTML+="<br/>Its evaluated as truthy with empty object :"+testFalsy:falsyStr.innerHTML+="<br/>Its evaluated as Falsy with :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+testFalsy;  
       
       
       // Playing with arrays
       testFalsy = [];
       testFalsy == false ? falsyStr.innerHTML+="<br/>Its evaluated as truthy empty array testFalsy==false  :"+testFalsy:falsyStr.innerHTML+="<br/>Its evaluated as Falsy against empty array testFalsy==false empty array:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+testFalsy;  
       
       // setting testFalsy as empty object
       testFalsy = []; // Empty array is taken as truthy value ![] negation to truthy is a falsy so the conditional wont be exec
           !testFalsy ? falsyStr.innerHTML+="<br/>Its evaluated as truthy with ![] :"+testFalsy:falsyStr.innerHTML+="<br/>Its evaluated as Falsy with ![]:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+testFalsy;  
       
       
       // Compared as null
       testFalsy == null ? falsyStr.innerHTML+="<br/>Its evaluated empty array testFalsy==null."+testFalsy:falsyStr.innerHTML+="<br/>Its evaluated as Falsy against empty array testFalsy==null.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+testFalsy;  
       
       // Copare as true
       testFalsy == true ? falsyStr.innerHTML+="<br/>Its evaluated empty array testFalsy==true."+testFalsy:falsyStr.innerHTML+="<br/>Its evaluated as Falsy against empty array testFalsy == true.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+testFalsy;  
       
       // Another test
       testFalsy = { teamA: 0, teamB: 1 };
       testFalsy.teamA ? falsyStr.innerHTML+="<br/>Its evaluated testFalsy.teamA which is zero as truthy."+testFalsy:falsyStr.innerHTML+="<br/>Its evaluated testFalsy.teamA obj  which is zero as Falsy.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+testFalsy;  

       // In this context I personally just test against obj stored value zero
       testFalsy.teamA == 0 ? falsyStr.innerHTML+="<br/>Its evaluated testFalsy.teamA which is zero as truthy comparing against zero ."+testFalsy:falsyStr.innerHTML+="<br/>Its evaluated testFalsy.teamA which is zero as falsy comparing against zero.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+testFalsy;  
       
       // 
       if (testFalsy == "[object Object]") {
        falsyStr.innerHTML+= "<br/> Ist taken as [object Object]";
      }

      // Creating a bigger object 
      testFalsy = { teamA: 0, teamB: 1, teamC: 2 }; 
      testFalsy.teamA = "Milan";
      testFalsy.teamB = "Liverpool";
      testFalsy.teamC = "Manchester United";
        falsyStr.innerHTML += "<br/>"+testFalsy;
        falsyStr.innerHTML += "<br/>"+testFalsy.teamA;

    // ----------------------------------------------------------
    falsyStr.innerHTML += "<br/>---------------------------------------------------------<br/ Using switch/case clause>";
    // Using switch/case statement 
    switch(testFalsy.teamC){
        case "Milan":
        falsyStr.innerHTML += "<br/>Team C es Milan.";
        break;
    
        case "Liverpool":
        falsyStr.innerHTML += "<br/>Team C es Liverpool.";
        break;

        case "Manchester United":
        falsyStr.innerHTML += "<br/>Team C es Liverpool.";
        break;

        default:
            falsyStr.innerHTML += "<br/>Team C no es ninguno de la super leage.";
    }

    //--------------------------------------------------------------------

    // Using a function and returning value tricky
    function myFunction(a,b){ // multiply two numbers and return the obtained value
        return a*b;
    }
     
    // Calling the function to obtain the resulting value to make something
     testFalsy = myFunction(2,3);
     falsyStr.innerHTML += "<br/>Got the function returned :"+testFalsy;

     // Call the function with no argument acts as an object and the variable obtain the function itself
     testFalsy = myFunction;
     falsyStr.innerHTML += "<br/>Got the function returned :"+testFalsy;

     // Add an event listener
     function eventFunction(a,b){
        if(a ==undefined || b ==undefined){
        alert("Function called with no parameters");
        }else{
               alert("Function called with:"+a+" "+b);
             }
     }
     let eventHandler = document.getElementById("event");
         //  Add event binding a function to the object classic forms
         
         //  eventHandler.addEventListener(`click`,eventFunction,false); 
         
         //  Add event binding a function to the object 
         
         //  by modern ARROW FUNCTION way
         eventHandler.addEventListener("click",()=>eventFunction("Hello","world"),false);
         
         // Using Objects
         const car = {
            model:500,
            brand:"Fiat",
            weight:500,
            carType: function (){ return this.brand+" "+this.model;}
        };
        
        console.log(car.carType());
        
        // String Methods
        let str = "Apple, Banana, Kiwi";
        console.log(str.slice(7,13));
        console.log(str.slice(15));
        
        // Using the replace to build new string from previous
        let txt = str.replace("Banana","Microsoft");
            txt = txt.replace("Kiwi","Canonical");
        console.log(txt);
