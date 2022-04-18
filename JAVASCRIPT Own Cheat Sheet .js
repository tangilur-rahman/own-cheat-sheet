/*

❤️❤️❤️ Learn JavaScript ❤️❤️❤️


Chapter 1. What is ECMAScript ?  ✌️

  Note:	ECMAScript is a set of rule provider ( protocol ) which are help to create JavaScript.

  Note: JavaScript = created 1996.
    1.ES1 = 1997.
    2.ES6 =  ECMAScript 6th edition or ECMAScript 2015.

  # What is JavaScript? ✅

    Note: JavaScript improves the user experience of the web page by converting it from a static page into a interactive one.
    
    Note: Add behavior to web pages.


Chapter 2. Connect JavaScript with HTML files  ✌️

  1. <script> write JS codes </script>
  2. <script src="script file path"> </script>

  # async / defer  ✅
    
    Example : 
      1.  <script async src="script file path"> </script>
      2.  <script defer src="script file path"> </script>

    Note: async  =  current position JavaScript file load  where declared the file (default).
                  
    Note: defer = At last JavaScript file load after loading html file , doesn’t matter where the JS file declare .
               

Chapter 3. declaration Hello World  ✌️

    ●	alert( "hello world" );

    ●	document.getElementById( "id" ).innerHTML="hello world";  
            
    ●	document.write( "hello world" );

    ●	console.log( "Hello world" );

    
  # Same with number ✅

    ●	document.write( 23 );

    ●	alter( 34 );



Chapter 4. Statement & comment ✌️

  # Statement : 

    Note: In JS file every statement end with semicolon ( ; ), It's OPTIONAL in JavaScript. 
         
  
  # Comment : 

    1.	// single line comment

    2.  /*

 	   	     multi-line comments

 	      * /

   ~~~ everything same as JAVA ~~~


Chapter 5. Scopes & Declaration Variable ✌️


  # Scope  ✅

    Note: " window " object is the grand global object for all object.

    Note: Outside any function all variables and functions are the member of window object.

    Note: Child ( function ) can access and change parent properties ( window ) but parent  can't access child properties. 
    ( cause it's already Garbage, function properties exist until that function complete execution. )

    Example:
     
      var x = 10;
      var y = 20;

      function funName (){

          var x = 30       // new variable
          console.log(x);  // 30

          y = 40;          // parent variable
          console.log(y);  // 40

          var  z= 10;
          console.log(z)    // 10
      }

      funName();

      console.log(x);    // 10
      console.log(y);    // 40
      console.log(z);    // ReferenceError


    Note: same with let & const.



  # var ✅

    Syntax : 

    	var variable_name = value;
    
    Note: before ES6 version it's only one option to declare variable.

    Note: it's function scope & become a global variable.        

    Example:

      var outside = 10;
      if(true){

        var inside = 20;
      }

      console.log( window.outside );  // 10
      console.log( window.inside );   // 20

      Note: no need to declare window object, compiler automatically understand.

      Example: 
        
        console.log(outside);   // 10
        console.log(inside);    // 20


    Note: function properties exist until function execution completed.
        

  
  # let

    Syntax : 

      let variable_name = value; 

    Note : Include in ES6 version .
    
    Note: It's block scope, const also
          
    Example :

      let outside = 10;

      if(true){
        let inside = 20;
      }
      
      console.log( outside );   // 10
      console.log( inside );    // ReferenceError


  # const

    Syntax :

      const variable_name = value;

    Note: can't change const variable but var & let variable can change.   
                
    Note: must be creation & declaration at a time.      
          

    Example : 

      const outside = 10;

      if(true){
        const inside = 20;
      }
      
      console.log( outside );   // 10
      console.log( inside );    // ReferenceError                      

    
    Note : avoid var and used let & const  👌



Chapter 6 :  Naming Identity 

  # Set of rules

    1. The first character must be a letter or an underscore (_) or an dollar ($) . We can’t use a number as the first character.

    2. The rest of the variable name can include any letter, any number or the underscore. Can’t use any other special character, including spaces.

    3. Variable names are case sensitive.

    4. No limit to the length of the variable name.

    5. We can’t use one of JavaScript’s reserved words as a variable name.
    
    Example: 
      var firs_tName = "Tangilur Rahman";

      let $age = 12;

      let _address = "Abadpur";

      const Null = "money";

  Note: Best practice declare multiple variable in camelCase syntax.



Chapter 7. Operator 
     
  Example: 
    x + 7 = 11;    

    Note:
      x,7,11   => operand ,
      + , =    => operator
     
  Note:  operand & operator = expression.

  # Arithmetic Operators
 
  ●  +   -  *   /   %

  # Assignment Operators

    ●	=      =>    assignment right side data
    ●	+=     =>    Ex:  x = x + number 
    ●	-=     =>    Ex:  x = x - number 
    ●	*=     =>    Ex:  x = x * number 
    ●	/=     =>    Ex:  x = x / number 
    ●	%=     =>    Ex:  x = x % number  
    ●	**     =>    to the power   Ex: (2**3) = 8 ;

  # Comparison Operators

    ●	==     =>  equal values & ignore data-type
    ●	===    =>  equal values & equal   type
    ●	!=     =>  not equal to & ignore data-type
    ●	!==    =>  not equal value & not equal type
    ●	>      =>  greater than
    ●	>=	   =>  greater than or equal to
    ●	<      =>  less than
    ●	<=     =>  less than or equal to


  # Logical Operators

    ●	&&     =>   AND
    ●	||     =>   OR
    ●	!      =>   NOT

      
  # unary operator
   
    ●	++     =>    increment(+1)
    ●	--     =>    decrement(-1)

    Example:
       1. ++x    =>  prefix increment
       2. x++    =>  postfix increment
    
    Note : same with decrement operator


  # Ternary Operator or conditional Operator
    
    Syntax:
      (condition) ? value1 : value2;

    Example :
     let large = (x>y) ?   x   :   y  ;

    Note: if condition will be true then execute 1st value, otherwise execute 2nd value.       

    Note: It’s shorthand of if-else.

    ~~~ same as JAVA ~~~



7 .  Data-Type
1. Number          Ex : let num = 10;
2. String          Ex : let str = “Tangilur”;   ‘tangilur’;  `tangil`;
3. Boolean           Ex : let a = true , b = false ;
4. Array               Ex : let array = ["tangil","rahman",3];


5. Object              Ex:  let object = {
            	name : "tangil",
            	age : 23,
                  key : value
                       };         	
Note : 
 let x = 5 ;
 x = "tangil";

 it's possible in JS
 it's called dynamic variable

 ~ ticks
 let x = "  can't  "
 let y = '  my name is "tangil"   '
 or let z = '  can\'t  '




 typeof  (return type)
	Syntax: 
             Typeof (variable);

     Example :
●	let x =   typeof (10);                  Number
●	let y =   typeof ("tangil");         String
●	let z =   typeof  (true);              Boolean
         console.log(typeof x);        

 `   ${}  `
 let x = `Tangilur Rahman`;
 document.write(`   hello ${x}   <br>   `);

Note :  variable declare in ${ }  , other text & HTML tags as 
            normal.

8. Nullish coalescing operator (  ?? )
      Syntax:
           variable  ?? default_value;

Note :  If variable is undefine/null  then we can set default   
             value   for assign.
 
Example :
 let a ;
 let b = "Tangil";
 const  x = a ??  "d_value";          // d_value
 const  y = b ??  "d_value";               // Tangil
Different between null & undefined ?
   Example: 
            let variable = null ;                   // return null
            let variable ;                              // return undefined

Note: 
•	null means assign null keyword ( nothing),
•	undefined means just created variable, not          
           initialization it.


9. Control Statement  (if/else-if)
     
    Syntax : 
if(condition){
       // to be executed
    } else if ( condition ) {
       // to be executed
    } else {
        to be executed
   }
	
	Note :  We can define multiple number of else-if  
                       statement.
   
         Note: every if-else block can execute only 1st true   
                     statement then break.
                    No matter how many statement is true .

~~~ same as JAVA ~~~
10 . Switch Statement 
  
	Syntax :
		switch (variable){
			case check_1 :
				// to be executed
				break;
			case check_2 :
				// to be executed
				break;
			default : 
				// to be executed
		}

Note:  We can declare multiple number of case for checking .
Note: must be declare break statement after every case ,
           Otherwise, execute all statements after that true case.

Note: switch statement is the shorthand of multiple else-if 
           statement.

Example : 
   let number = 3 ;
      switch (number) {
     case 1:
        document.write(" one ");
        break;
     case 2 :
        document.write (" two ");
        break;
     case 3 :
        document.write (" three ");
        break;
     default: 
	document.write (“ Please enter valid number“ ) ;
 }



~~~ same as JAVA ~~~

 11. Loop   ( for , while , do-while )

  for loop:
	syntax: 
		for(Initialization; condition ; Increment / decrement){
				//codes to be executed
		}
	Example : 
 for (let i = 0; i < 10; i++) {
    document.write(i);
}

while loop : 
	Syntax : 
		Initialization
		while( condition ){
			// codes to be executed
			Increment / decrement;
		}
 Example :
let x = 2;
 while (x<10){
    document.write(x);
    x++;
}

 do-while loop: 
	Syntax : 
		Initialization
		do {
			//codes to be executed
			Increment / decrement
		} while ( condition );
Example:
 let x = 2;
 do{
    document.write(x)
    x++;
}while (x<10);


 Nested Loop :
⮚	loop inside another any loops.

Example : 
 for (let i = 0; i < 10; i++) {

    while(i<3){
        to be executed
    }

    do{
        to be executed
    }while();

     for (let j = 0; j < 2; j++ ){
        to be executed
     }
 }

 we can define label with loop, function

Example : 
 set_name : for (let x = 0; x<10; x++){

        if(x==5){
        break set_name;
        }
 }

~~~ same as JAVA ~~~

12. Break , Continue
●	break = loop ,switch break
●	continue = from there go back to increment / decrement section & jump next loop
                                       
 Note: Both are done through condition.

Example :
 for (let i = 0; i < 10; i++) {
    if(i === 6){
        break ; | continue ;
    }
    document.write(i);
    document.write('<br>');
}

~~~ same as JAVA ~~~


13. alert , confirm and prompt

 alert() =  shows a message;

 prompt() = shows a message for input text . It returns the text             on ok or, if cancel button or esc is clicked , return null;

 confirm() =shows a message , confirm with "ok" or "Cancel". It returns true for ok and false for Cancel/Esc;

 Note : All these pause script execution and don't allow the visitor to interact with the rest of the page until the windows has been dismissed;




Example : 
 alert("Are you Ready");

let getV = prompt("Enter Your name : ",default value );  //(declare default value  optional)
                                               
 let getC = confirm (" Your name is  : "+getV);




14. Data-type Conversion

     typeof   variable ; || typeof(variable)     // return date-type

 let a = 5 + null ;  	 // 5  (String)
 let b = "5" + null; 	// 5null (String)
 let c = "5" + 7 ; 	//57  (String)
 let e = "5" + "2" ; 	//52 (String)
 let c = 5 + "7" ; 	//57  (String)
 let d = "5" - 2; 	// 3   (Number)
let e = "5" * "2" ; 	//10 (Number)
 let f = "5" * "b"; 	// NaN (not a number) Number ERROR

 -   *   /   %      ("5" & 5 same )

 +                     ( "5" & 5 not same )
      Number + String = String 

~~~ JavaScript Intelligence Enough ~~~

What is NaN?
•	NaN is a property of the global object, the initial value of NaN is Not-A-Number.

    isNaN()             // return boolean value 
        Example: 
	       let var1 = 2345;
                let var2  = “Tangil”;
                let var3  = true;
          console.log(isNaN(var1);             // false
          console.log(isNaN(var2);            // true
          console.log(isNaN(var3);            // false       (true = 1) 
          console.log(Number.isNaN(NaN));   // true


type conversion by function
    1.String();        or String.valuesOf(object)
    2.Number();   or Number.parseInt() ;   Number.parseFloat() ;
    3.Boolean();


Example :
	String:
		let a = 23;
		let b = true;
		let c = String ( a);	// ”23”
		let d = String (b);	// “true”
	Number:
let a = Number( “5” );
let b =Number("text")
         document.write(typeof a); 	// return Number type
		document.write(typeof b);	 // return NaN ERROR

true = 1
false = 0

 let a =Number(true);
 document.write( a); //1
 document.write(typeof a); //number

 let b =Number(false);
 document.write(b); //0
 document.write(typeof b); //number

!!! reverse

  0 = false
-1,1,n = true


Boolean:
 let var1 = -6;
 let a =Boolean(var1);
 document.write( a); 	//true
 document.write(typeof a); 	//boolean

empty String  = false
anything = true

 let var1 ="";
 let a =Boolean(var1);
 document.write( a);//false
 document.write(typeof a); //boolean

 String(10,   true,      false);
	     “10”  “true”    “false”

 Number("a"  ,  ”5” ,    true,    false);
        NaN,    5         1,       0

 Boolean(“” ,     "a",      0,        -1);
        false    true,     false,    true

  Note: 0,””,undefined,null,NaN   =>   false .
	     Except those everything    =>   true .


 15. String Manipulation

Declaration :
  1. let a = " string ";
  2. let b = ' string ';
  3. let c = `   ${ value }  `;
  4. let d = new String ( “ Hello “ );    // stored like Array

 Escape Sequence : 
  1. \n    => new line
  2. \t    => tab
  3. \'    => single quote or       "can't"
  4. \"    => double quote or     '  name "t"    '
  5. \\    => backslash (\)



~~~ same as JAVA ~~~


Basic feature in String:

 1. stringVariable.length ;      return length of String
2. stringVariable [2];         return specific character cause String  
                                               is an arrays of character.

 3. str1 + str2 + … ;                concat String
 4. str1 == str2 ;                     compare two String

function in String:
1.	concat(); 
  ex: let str3 = str1.concat(" ",str2 , str4 , ...); 
  Note:  add multiple  String .
 
    2.subStr(); 
ex: let str = var1.substr(f_startNum , endLength); 
Note:  from start position to length 

 Ex:       let str = var1.substr (-4);       
	Note:   from end to - 4

    3.subString(); 
ex: subString(startNum, endNum); 
 Note :  from position to position 
              (both case count start from 0)  
    4.indexOf(); 
ex : let position = var1.indexOf("JS");
         Note:  return Starting position of specific String ,
                     -1 means not found . same as Array.

    5.lastIndexOf(); 
ex : let position = var1.lastIndexOf("JS");
        Note:   Searching from end
for 4 & 5         -1           means not found

    6. trim();
 ex: let var2 = var1.trim(); 
          Note : removing before and after blank space 
    7.trimStart();
ex: let var2 = var1.trimStart(); 
         Note: removing starting blank space 
    8.trimEnd();
ex: let var2 = var1.trimEnd(); 
Note:  removing ending blank space 

    9.toUpperCase(); 
ex: let var2 = var1.toUpperCase();
        Note:  transform UpperCase Character

     10.toLowerCase(); 
ex: let var2 = var1.toLowerCase();
Note:  transform LowerCase Character 

    11. replace(); 
ex: let var2 = var1.replace("good", "the best");
         Note:   replace old String to new String but only 1st match
                     but original String not change.

    12.includes(); 
Ex: let var2 = var1.includes("tangil");
   Note:   check "tangil" contain or not , & return boolean value 
13. charAt();
      Ex: let var1 = “Hello world”;
             let var2 = var1.charAt(0);        // H
      Note: return character of given index position.
14. split();
      Ex:   let str = “ my name is Tangilur Rahman “;
               let arr = str.split(“ “);
      Note: convert String to Array.
     
  16.  Array in JavaScript

    Note: multiple any values store into one variable.

syntax :    2 ways
    1. let arr = ["var1" , var2,  "var3" , var4];     ***
    2. let arr = new Array ("val1","val2", val3);

   note : can store anything inside a Array 
              ( String, Number, Boolean,Function,Object) together
	      & array count start with 0.
   Example :
let arr = [ " Tangil " , 23,   true ];
				0          1       2
    fetch value from array :
      document.write(arr);    	   whole array 
      document.write( arr[2] ); 	   specific value 

    update specific item value into array :
         Ex: arr[1] = new_Value;
 
Function on Array :
    1.Array.length; 		        return Array length. Start with 1

    2. Array.push(values,… );   insert new values at last 

    3.Array.unshift(values,… ); insert new values at first 

    4.Array.pop(); 		        remove last a value , return it

    5.Array.shift(); 		        remove first a value , return it

    6.Array.splice(specific_position, How_many_value,  addElement );       
                                
      Note : from specific position to how many values remove & return it through Array , start with 0
        
Note:  addElement    :    optional.

         add element using splice() at last
               Ex: 
                    const month = [ ‘jan’, ‘fab’, ‘march’];
                     month.splice(3,0,’dec);      //3 or month.length
                     console.log(month);

           update element using splice()
               Ex:
                  const arr = ["tangil","tamim","sagor"];
arr.splice(arr.indexOf( ‘tamim’ ),1,"Tamim");
console.log(arr);

             remove from specific element to all
                Ex: 
                   let arr = ["tangil","tamim","sagor"];
 arr.splice(arr.indexOf("tamim"),Infinity);    
 console.log(arr);
                Note: Infinity means after all . or Array.length


    7.Array_Name = []; 	        remove all value from array 


    8.Array.indexOf("value");    
                  return position of this value's index ,start from 0,
                 -1 mean not found.


    9.Array.isArray(arr_name);                    
                 check it’s array or not & return boolean value 


  10.String.split(" "); 	
                 (it’s String class's function , for convert text to array )
  ex: let fruit = " apple, mango, banana ";
        let array = fruit.split(",");   // [apple, mango, banana]
 note:   split a sentence by given symbol or character or word  
             and convert an array .


    11.Array.join(); 			
(Array class's method for convert array to String)
        Note:   it's reverse  of split , convert an array to text
       Note:   Array.join(“ ! “);  means insert ! with every array’s
                   Elements.
ex: let array = ["apple", "physics" , "mango"];
       let txt = array.join(" ");      // “apple physics mango “


    12.Array.concat(); 	 	connect multiple array 
    	ex: arr.concat(arr1,arr2,...);


     13. Array.filter();
          Syntax:
               let  newArray = Array.filter  ( function (element) {
		return condition;
            };
         Note:   We can filter every elements before store in 
                     new Array.      
            Ex:  array.filter( function  (element) {
			return  element != “” ;
                    }
          Note: pass one by one value into function through 
                     element ,
                     filter it then return & store into new Array.

     14. Array.sort();
          Ex: let arr = [2,3,1,6,8,5];
             arr.sort();           // 1,2,3,5,6,8

    15. Array.reverse();
          Ex: let arr = [2,3,1,6,8,5];
              arr.reverse();           //8,6,5,3,2,1


    16. Array.toString();

			Ex: let arr = [“tamim’’,”tangil”,”munir”,3];
		  arr.toString();       //tamim, tangil,munir,3


    17. Array.includes();  

      Note: check contains or not , return boolean value.

      Ex: 
        const fruits = ["Banana", "Orange", "Apple"]
        fruits.includes("Mango");   

             18. Array.Map();

                   Syntax:
                       Array.Map( function (curElement,index,array){}  );
		Note: 
                        currentElement  :      required
                        index           :     optional
                        arrayName        :     optional
                  Note:  same with forEach(), filter().

                  Ex: 
                      let arr = ["tangil","tamim","sagor"];
    let newArray = arr.map(function(ele,index){
           return (`index is ${index}  value is    ${ele}`);
    });
  console.log(newArray);

                Note: as same like forEach() ,
                           but creating new Array & chain-able.

               Example:
 let arr = [2,3,4,5,6,8];

let newArr = arr.map((element) => element*2).filter((element) => element>10);

console.log(newArr);


 
19.Array.reduce();
        Note:  return a single value ; this function’s 
                     accumulated result.
Syntax: 
      Array.reduce(function( total,curElement,index,arr) 
      {},initial_value );
Note: 
     total                         :           required
      currentElement    :           required
      index                       :          optional   
      arr                            :          optional
     initial_value            :          optional

Example: 
       let arr = [4,5,6,78,4];
        let variable = arr.reduce(function (total,element){
return total +=element;
        }); 
         console.log(variable);

  Note: 1 by 1 value pass into element , after every 
              calculation 1st store in total variable .
              after all calculation total value return into variable.

Note:    forEach()  & map()    :     for array fetching
              filter()                          :     for filtering array
	     reduce()                      :     for accumulated array

Example:  map(), filter(), reduce()
    let arr = [4,5,6,3,2,8];
    let newArr = arr.map((ele) => ele*2).filter((ele) => 
             ele>10).reduce((total,ele) => total+=ele );
    console.log(newArr);


Multidimensional Array in JavaScript

syntax :
        let arr2d = [
              [arr1, ...],
               [arr2, ...],
               [arr3, ...]
        ] ;

fetch value from 2D Array :
let var1 = arr2d[0][2];         specific item
         let var2 = arr2d[1];      	     whole 1D Array 
note: we can declare multiple dimensional Arrays in JS.

Convert multi-dimensional Array To  1D Array.

     Syntax: 
          multiArray.flat( Infinity );
     Note: Infinity means any dimensional Array.
              Or, we can specific dimension.Ex: 2,3,…
     Example :
         let arr = [[“tangil”,23], [“tamim”,15], [“sagor”,23]];
         console.log (arr.flat (Infinity));
     Output :
	 [‘tangil’,23,’tamim’,15,’sagor’,23]
   
  
  $ fetch value from Array using Loop

  1. Loop (for, while, do-while)

    Example:
      for(let i = 0 ; i<arr.length; i++){
        console.log(arr[i]);
      }

  2. forEach()      

    Example : 
      array_Name.forEach(functionName);
        function functionName( element,index ) {
          console.log(` index is ${index} value is ${element}` );
        } 
    Or,

      arr.forEach((element) => console.log(element));

    Note : 1 by 1 value insert function & function print it.
    Note:  1st parameter = current_Element; 2nd parameter = Array’s index number.(optional)
        

  3. for-of Loop

    Note: for-of loop only used with Array, String , Collection.

    Example:
      const cars = ["BMW", "Volvo", "Mini"];
      let text = "Tangilur Rahman";

      for (let key of cars) {
         console.log( key )  ;
      }

      for( let key of text){
			  console.log(key);

      }

     Note :  1 by 1 value insert into key and print it.

  4.for-in Loop 
  
    Note: for-in loop used with mainly Object , but also used with  Array, String, Collection.
      
    Example: with Array
      let arr = ["tangil",34,36,true];

      for (const key in arr) {
        console.log(key);
      }
    Note: return only Array's Index

    for (const key in arr) {
      console.log(arr[key]);
    }
    Note: (like object) return Array's values.



chapter 17. function in JavaScript  ✌️

  Note: A function is a block of code designed to perform a particular task.
          
  Note: main purpose of function is reusable. 
  Define once and  use it many times from anywhere for produce different results.
  

  Syntax :

    function function_Name(){
      //a group of codes
    }

  Note:for execution function we need to call  that function

    Example:  fun_name();


  $ passing value into function using parameter.

    Syntax:
       function function_Name( parameters ){
            //a group of codes
       }

    Example: 
      function funName( a,b ){
 		    return a + b;
      }

    Note : JavaScript intelligence enough no need to declare parameter’s  variable through datatype , it will be automatically understands.    
               
    Note: passing parameter is optional . We can pass multiple parameter or nothing.
        

    @ call that function
      Example : function_Name(3,4);

      variables  = parameter
      values       = argument


  Example: 
	  Function fun ( var1, var2, …){
		  //a group of codes
	  }

   Call: fun( value1 , value2 , …);

  Note: number of arguments must be same as number of parameters. 
           

  $ Return Keyword:

    Note: Through return keyword we can send anything from a function.
                
    Note: When compiler reaches a return statement then function will stop executing and sent that calculation.
                           
    Note: In a function can use return keyword at multiple time but return value only one time .
                
    Note: We can store that return data into any variable.If we didn't use return keyword we can't store the function in a variable. If we print it  output will be undefined.
                   

    Example: 
      function sum (a, b){
        return a + b;
      }

      let total = sum(3,5);

      console.log(total);


  $ Clone Function:

    Syntax:
      let variable = functionName;      // just FunName not ()
      variable( parameters );

    Example: 
      let new_Name = function_name;      
      new_Name(3,4,5,"tangil");


  

Chapter 18 : Arguments Object 

  Note : if we don't know  how many argument user will be passing then we can help arguments object that  treat like an array.
 
  Feature:  
   1.	arguments.length
   2.	arguments[2];
   
  Note: same like Array

  Example : 
   function arguFunction(){
    let sum = 0;

       if (arguments.length == 0){
        document.write("Please input Something");
       } else {
        for (let i = 0; i < arguments.length; i++) {
          sum += arguments[i];
       }
     }
     return sum;
    }

  let sum = arguFunction(3,5,6,7, … );
  document.write(`the sum is ${sum}`);
  
  Note : all passing arguments firstly store in arguments then we  can use it whatever we want .
            
  Note: not work with Arrow function , there we can used Rest parameter (  …ArrayName).
           
















Chapter 19. Global variable vs Local variable

  Note: Global variable = Declare outside function.

  Scope : whole application .
        because it's application label variable.
        it's only destroy from RAM when the application will executed completely.

  Note: Local variable = Declare inside function.

  Scope : only inside its own function.
        cause local variable will be created when its function is starting  execution
        & it's destroy from RAM when the function will executed completely.


  Example :
      let global = 10;
      function funName (){

        let local = 1;

        return  global+=1;
      }

      global+=1;

      local+=1;  //undefine ERROR


Chapter 20. Anonymous Function

  Note: Those function which haven't any_name.

  Note : It's used this time when we need to the function only for 1 time use.
  because we want that don't store the function into RAM , it's waste memory.
 
  Syntax:
    function(parameters){
      // a group of codes
    }

  Example :
   @ normal function
    function functionName(a,b){
      return a + b;
    };
    let sum = functionName(4,6);
     console.log(sum);

  or,

   @ Anonymous function  
    let sum = function(a,b){
      return a + b;
    }
    console.log(sum(5,6));

  Note : it's also called function expression.


# Immediately Invoked function

  Note : It's for function create and declare at a time ,    
         no need to create new variable declaration .

  Benefit : not occupy memory.

  Example :
    ( function (){
        document.write("hello world");
    } ) ();
       called

  Note : Immediately invoked function best used when used third-party codes invoked our application.
  avoid same global variable names .


# Object in JavaScript

  $ Feature of Object
      1. Properties
      2. Action or Function

  Example: Human Object
    1. Properties(name,height,weight,address etc. )

    2.Action ( walk , run, eat , talk ,study etc. )

    ! Define Human !


  $ Create Object

    Syntax :
      let object_name = {
        property : value,
        action   : function() {},
        property : value
      };

    Note: Inside Object We can declare anything.(variable,Array,Function,another Object).

    Note: No need to declare data-type in front of properties .
 
    Note: In object data store through key-value pair format.

    Note: every key-value pair separate then by using comma (,) except last one.


  $ two-way fetch property from object

    1. console.log(objectName.propertyName/method());

    2.console.log(objectName["propertyName"]);

     Note: in the way only property is worked,not object's method().

  Note: console.log(objectName);    // display whole object.
 

  @ get property value
    > object_Name.key;    //return value

  @ modify property value
    > object_Name.property_Name = new_value;

  @ insert new property
    > object_Name.newProperty_Name = new_value;

  @ delete a object's property
    > delete object_Name.property_Name;

  @ checking an object's property contain or not 
    > console.log("property_Name" in object_Name);

  Note: return Boolean value.


# for-in loop in JavaScript

  Note: for-in loop only used for iterates property from object

  Syntax:
    for ( let key in object_Name ){

      console.log(key);       

        Note: print all object's properties.

      console.log(object_Name[key]);  

        Note: print all object properties's values  ( here object.key not worded )

      }
    Note: 1 by 1 value insert into key and print in.


# Methods in Object

  Note : Object relative function is called method.

  $ we can define method several way

  1.
    let person = {
      f_name : "tangil ",
      l_name : " Rahman",
      address: "akkelpur",
      age : 23,
      fullName : function () {
       return this.f_name + this.l_name;
      }
    };
    document.write(person.fullName())


  2.
    let person = {
      f_name : "tangil ",
      l_name : " Rahman",
      address: "akkelpur",
      age : 23,
      fullName () {
        return this.f_name + this.l_name;

         }
    };

    document.write(person.fullName())

    Note : it's ES6 Syntax.



  3.
    person.fullName = function () {
      return this.f_name + this.l_name;

    }
    document.write(person.fullName());


  4.
    function name () {
       return this.f_name + this.l_name;

    }
      person.fullName = name;
      document.write(person.fullName());



# this keyword in object

  Note: this keyword used for refer current object.

  Example :
    let person = {
      name : "Tangilur Rahman",
      age : 23,
      details : function (){
        document.write
          (`your name ${this.name} <br>
          your address is ${school.address}`);
          }
    }

    let school = {
        s_name : "bazla",
         address :"joypurhat"
    }
  person.details();

  Note: we can used another object's property in any object.

  Note: outside any object "this" keyword refer window Object.
  &
  inside any object "this" keyword refer current Object.

  Note: In arrow function "this" keyword always refer window object.


# Math Object

  $ Math Properties

    1.Math.PI    
      Note: return PI value

    2.Math.E     
      Note: return Euler's number.


  $ Math Method

    1.Math.round(4.7); 
      Note: (5) return nearest Integer Number.

    2.Math.ceil(4.1);
      Note: (5) return increment integer value.
    
    3. Math.floor(4.9);
       Note: (4) return decrement integer value.

    4.Math.trunc(4.9); 
      Note: (4) return only its Integer value,
          * when positive number same as Math.floor().
          * when negative number same as Math.ceil().
           
    5. Math.abs (-55);
      Note: (55) return absolute values.

    6.Math.pow (2,3);
      Note:return 2 to the power 3. 
           or, 2 ** 3 .

    7.Math.sqrt(100);  
      Note: (10) return square root.

    8.Math.min(4,5,6,7,1,3);
      Note: (1) return minimum value.

    9. Math.max(4,7,9,10,2);
      Note: (10) return maximum value.

    10. Math.random() * 10 ;
      Note: return generated random number.

    Example :
      function getRandom((min, max) {
        return Math.trunc(Math.random() * (max - min)) + min;
        }
        let num = getRandom(10,20);

    Note: Initial generate number ( 0 - 1 )
          so, we need to multiplication (*) with any number whatever range we want to generate.

    
# Number Object 

    1. Number.isInteger(Variable );   
      Note: return boolean.
            it's reverse of Number.isNaN(variable);

      Example:    
        let num = 23;
        console.log(Number.isNaN(num));      // false
        console.log(Number.isInteger(num));  // true

    2. numberVariable.toFixed( number );       
      Note: return a string with specific number of decimals.

      Example: 
        let num = 2.4356785;
        let newNum = num.toFixed(2);
        console.log(newNum);           // 2.43
        console.log( typeof(newNumb))  // String


# Date & Time Object

  Note: It's used for get & set-up date,time in our application.

  Note: Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

  $ feature of Date object

        January = 0
        December = 11

     @ get current Time.
     1.new Date();   
     Note: return current pc date.

      Ex : let currentDate = new Date();

    @ set Date & Time
    2.new Date( year, month, day, hour, min, sec , millisecond);     
    Note:  7 parameter we can pass , but ( year & month ) requirement

      Ex: let x = new Date(2022,0,21,10,48,10,900);
      Ex: let y = new Date(2022,0);


  $ some methods of Date Object

    1. getTime();    
      Note: return millisecond ,computer store date through millisecond, Start from 1970 January 1.

    2.getFullYear();  
       Note: return year.

    3.getMonth();      
       Note: return month.

    4.getDate();       
       Note:  return date index

    5.getDay();       
       Note: return day through number , 
       sunday = 0
       saturday = 6.

    6.getHours();      
       Note: return hours.

    7.getMinutes();    
       Note: return minutes.

    8.getSeconds();    
       Note: return second.

    9.getMilliseconds();  
       Note: return milliseconds.


    10. here every get related methods have reverse set methods.

      Example : 
        setFullYear(2022); setMonth(11); setDate(29); setHour(11); setMinutes(59); setSeconds(59); setMilliseconds(999);
    or,
        new Date(2022,11,24,11,36,34,99);

      Note: same both of them.

    Example : Current-Date + 50
      let a = new Date(2022,11,24,11,36,34);

      let b = new Date(2022,11,24,11,36,34);

      b.setDate(a.getDate() + 50);

      document.write(a + "<br>");
      document.write(b);

    11. new Date().toLocaleString();
      Note: return date & time (2/8/2022  2:46:24 PM).

    12. new Date().toLocaleDateString();
      Note: return only date (2/8/2022).

    13. new Date().toLocaleTimeString();
      Note: return only time (2: 46:24 PM).
    
    
    Example: display digital clock

      setInterval(() => {
        let date = new Date().toLocaleTimeString();
        document.getElementById("tag").innerText= date;
      },1000); 
 
      
# Creating Object through " new "  keyword 

  $ Syntax :
    let object_Name = new Object();

    Example :
      let person = new Object();

      person.name = "Tangilur Rahman";
      person.age = 23;

      document.write(person.name +"  " + person.age);



# Getters & Setters in JavaScript

  Note : Getter & Setter methods are used for provide more secure Object's properties.  & 
  Manipulate input.

    Syntax:
      get method_name(){
        return something;
      }
  &
      set method_name( parameter ){
        this.property = parameter's value;
      }

  Note: we can call getter & setter methods as like Object's properties.

  Example:
    person.setName = "Tangil";
    person.getName;        


  Example:
   let person = {
    name : null,
    age : null,

    set setName (name){
      this.name = name;
    },
    get getName (){
        return this.name;
    }
  }

  person.setName = "tangilur";
  document.write(person.getName);


# Object Constructor Function

  Note: Constructor use for create object, it's the blueprint of object .

  Note: Constructor is a kind of method so, it's declaration as like method.
  But basic different is that Constructor never return values but method does.

  Note: We can also define methods into constructor same like Object's method.

  Note: A constructor mainly used for initialization creating Object so, must be use "this" keyword in front of declaration properties & methods.

  Note: Creating object by using Constructor must be use "new" keyword.
  
  Example:
   let objectName = new Constructor(arguments);

    $ Syntax :
        function constructor_name(parameters){
           this.property = value;
           this.property = value;
           this.property = function(){};                  
        }


  $ Example :

    function Student(name , age, address) {
      this.name = name;
      this.age = age;
      this.address = address;

      this.details=function (){
          document.write(`Name : ${this.name} <br> Age : ${this.age} <br> Address ${this.address}`);
        }
    }

    let student1 = new Student("tangilur" , 23 , "akkelpur");

    let student2 = new Student("tamim" , 23 , "joypurhat");

    student1.newVariable = "Tamim";
    student1.details();


    Note: Every creating new Object  can insert new properties & methods separately.

    Example :
      person1.Nationality = "Bangladesh";



# Object Prototypes

  Note: The prototype is an object that is inheritance with every functions and objects by default in JavaScript.
  It's the super object for every functions and object in JavaScript.

  Note: By through prototype object we can assign new properties & methods in any constructor from outside .

  $ Syntax:
       Constructor_name.prototype.NewPro = value;

    Example :
      ConstructorName.prototype.Nationality = "Bangladesh";

      ConstructorName.prototype.func = function() { } ;

# declaration feature of Function

  1.func();                  // calling function.
  2. obj.func()              // calling Object's method
  3. let var1 =func();       // store function's return values
  4. let var2 = func;        // clone function into new variable.
  5.let object = new Func(); // create new Object through constructor


# Nested Object

  Note: In an object inside others object.
  We can declare multiple object inside any object

    Example:
      let person = {
       name : "Tangilur",
       age : 23,
       school : {
            s_address : "joypurhat",
            s_name : "bazla"
        }

      };

    document.write(person.school.s_name);



Chapter : Hoisting   ✌️

  Note : All variable & function & Object only declaration move to the top wherever we declare it, but not assignment move.

  Example :

    fun();

    function fun(){
      document.write("hello");
    }

    x = 7;
    console.log(x);

    var = x;

  Note: But that's procedure not working with let & const cause let & const variable aren't initialize " undefined " at execution preparation state,
  but " undefine " initialize when compiler come to that line.

  
  Example:

    console.log(a);   // ERROR

    let a ;  // a = " undefined "

    console.log(a)    // undefined

 
  Note: Hoisting also works with let & const variable.


# "use strict"

  Note: if we forgot to declare any variable but initialization it then JavaScript compiler automatic declare that for us.

  Example :
    x = 10;
    document.write(x);     //10

  Note: If we want that don't JavaScript compiler do that automatic declaration for us then just write "use strict" to the top of JavaScript files.

  Example:
    "use strict"
    x = 10;
    document.write(x);     //ERROR




# window vs document in Javascript
  
  @ window 
    1. Window is the grand parent or main container or we can say the global object and any operations related to entire browser it can be a part of window object.
    Ex: whole Browser.

    2. All the members like object, methods or properties. 
    If they are directly the part of window object then we do not need to refer the window object.

    Example: window.alter(); |  alter();
            window.setTimeOut(); | setTimeOut();


  @ document
    1. Document is just the object of the global object that is window, which deals with manipulating HTML and XML documents.
    Ex: viewport.

    2.Where in the DOM we need to refer the document, 
    if we want to use the document object, methods or properties.
    Example: document.getElementById();
          or,window.document.getElementById();

             getElementById();   // ERROR



# Document Object Model (DOM)

  Note: The Document Object Model (DOM) is an application programming interface(API) for manipulating HTML and XML documents.
  (add, remove , modify parts of the document/HTML).

  Note: We can impact our HTML files using JavaScript through DOM.


  Note: When a web page is loaded, the browser creates a Document Object Model of the page by default.
  It's called DOM tree.

  Note: Document is the root node or Object for any kind of node or Object.
  It represents the whole web-page.

  Note: In the DOM , all HTML tags convert to object. So, it will have both properties and methods.
  > Sibling tags stay same level &
    all parents tags under its own childs tags.
    tag means object in JavaScript

     
  Note: If we want to access any element in an HTML page, we would always start with accessing from document object.



  $ Select an Element by ID

    Syntax:
      document.getElementById("ID_name");

      Example :
        let var1 =  document.getElementById("h-1");     
        
        console.log(var1);
     
    Note: In var1 variable store whole the tag as an object.

    Note: if not found or doesn't exist that ID then return "null".



  $ Select a group of Elements by ClassName

    Syntax :
      document.getElementByClassName( "Class_name ");

    Example :
      let array = document.getElementByClassName("list"); 

      console.log(array[0].innerHTML);

      for (let key of array) {
         document.write(key.innerHTML)
       };
        
    Note: store those tag's objects as like Array & we can treat it like Array.

    Note: We can select multiple classes at a time. But only impact those tags which have those multiple classes.


  $ Select a group of Elements by using TagName

    Syntax:
      document.getElementsByTagName( "Tag_Name");

    Example:
      let array = document.getElementsByTagName("li"); 
      console.log(array[0].innerHTML);

      Note: same as class selector.


  $ Select Element from its parent tag

    Example :
      let div1 = document.getElementsByID("child");
      let tagName = div1.getElementsByTagName("h1");

      for (let tagNameElement of tagName) {
          tagNameElement.innerHTML = "hello";
      }

    Note: it's only work with Class & tag selector ,
          not ID selector (always start with document object).


# querySelector & querySelectorAll

  Note : By using those we can select anything( ID, Class, Tag )
           as same as CSS selector.

      1. class => .class
      2. id    =>  #id
      3. tag   =>  tag

   @ querySelector = only first  satisfy element selected

  @ querySelectorAll = all elements selected & store an Array.

  Example:
    > let var1 = document.querySelector(".container .child #h-1");

    > let var1 = document.querySelectorAll(".container .child .allElement")

      console.log(var1[2].innerHTML);

 Note:
    > id & querySelector = Store like a simple variable
    > class, tag, querySelectorAll = Store like an Array



# Traversing Elements

  Note: indirect selector.

  1. Child to Parent
    Syntax:
      childObject.parentElement;

    Example:
      let childElement = document.getElementById("list-1");

      let parentContainer = childElement.parentElement;

    or,

      let parentContainer = document.getElementById("list-1").parentElement;


  2. Parent to first child element
    Syntax:
      parent.firstElementChild;

    Example:
      let parentContainer = document.getElementById("list-1");

      let firstChild = parentContainer.firstElementChild;


  3. Parent to last child element
    syntax:
       parent.lastElementChild;

    Example :
      et parentContainer = document.getElementById("list-1");

      let lastChild = parentContainer.lastElementChild;


  4. Parent to all child
    Syntax:
      parent.children;
    
    $ specific child
      parent.children[0];

    Example:
      let parentContainer = document.getElementById("list-1");

      let childs = parentContainer.children;

    Note: all selected objects stored in a Array.


  5. sibling to previous sibling
    Syntax:
      siblingTag.previousElementSibling;

    Example :
      let sibContainer = document.getElementById("list-2");

      let preSib = sibContainer.previousElementSibling;


  6. sibling to next sibling
    Syntax:
      siblingTag.nextElementSibling;

    Example :
      let sibContainer = document.getElementById("list-2");

      let nxtSib = sibContainer.nextElementSibling;



# innerHTML property

  $ innerHTML property can use two-way

    1.  get  (get current content)

    Example:
      let content = document.getElementById("h-1").innerHTML;     
      Note: get whole current tags contents

      console.log(content);    
    Note:  store like a simple variable not array

    2.  set ( set new content applied)
        
    Example:
      document.getElementById("h-1").innerHTML = "<h2> hello </h2>";      
    Note:  set new content  , previous content removed.

    Note: we can declare here any HTML tag but into any quotation.


# innerText property
  1. get
    Example:
      let getContent = document.getElementById("h-1").innerText;

    Note: get content text.

  2. set
    Example:
      document.getElementById("h-1").innerText = " hello ";

    Note: innerText same like innerHTML . But innerText only deal with text.


# Element Manipulate

  $ Create Element
    Syntax: 
     document.createElement( " tagName ");

    Note : any HTML tag we can created.


  $ Append Element
    Syntax :
     whereAdd.appendChild (tag);   

    Note: add element last of this container.

    Note: every Tag we can append anywhere.(HTML file's tag also).


  $ remove any child element
    Syntax:
     parentContainer.removeChild ( childElement );

    Example:
     let child = ParentContainer.firstElementChild;

    ParentContainer.removeChild(child);


  $ Clone Element

    1. selectedTag.cloneNode();    
    Note: without childs

    2. selectedTag.cloneNode(true);      
    Note: with childs

   Example:
    let cloneEle = selectedTag.cloneNode(true);
    console.log(cloneEle);


  $ replace Element
    Syntax:
      parentTag.replaceChild( newChild, replaceChild )

    Example:
     parentContainer.replaceChild(newChild, replaceElement);


  $ createTextNode()   function
    Syntax:
      > document.createTextNode("we can insert text through the function and then append it ");

    Example:
      let text = document.createTextNode("hi,i can append");
      p.appendChild(text);

    Note: didn't replace , just append text context.


  $ textContext property
    Syntax:
      (1)  get
          > console.log(element.textContent);

      (2)  set
          > element.textContent = " whatever you want ";


    Note: textContext same as like innerText. replace previous contents.
        

# class selector (CRUD)

  $ using className property

    1. get  
      > console.log(selectedTag.className);

      Note: return applied class selector.(simple variable)
          
    2. set
      > selectedTag.className += " newClass";
 
    Note: += means append,
        if use only "=" then replace previous classes.
  

  $ using classList() function
        
    1. get
      > console.log(selectedTag.classList);      
      Note: return applied class list's through a Array

    2. add 
     > selectedTag.classList.add("newClass");
    Note: added new CSS class

    3. remove
     > selectedTag.classList.remove("newClass");
    Note: removed CSS class

    4. replace
      > selectedTag.classList.replace("oldClass" , "newClass");
    Note: replace old CSS class to new CSS class.

    5. contains
      > selectedTag.classList.contains("className");   
    Note: check contains or not & return Boolean value.

    6.toggle
      > selectedTag.classList.toggle("class");   
    Note: if not added then add or,
          if added then remove.


# add new ID selector
    1.set
      > selectedTag.id = " idName " ;

    2. get
      > console.log(selectedTag.id);


# Insert Before
  Syntax:
    parentContainer.insertBefore(newElement , beforeWhom);

  Example :
    let h1 = document.createElement("h1");
    parentContainer.insertBefore(h1, lastChild);

  Note: insert that element before lastChild.



 # Insert Adjacent

   1.insertAdjacentHTML   
   Note: direct html tag

   2.insertAdjacentElement  
   Note:  html element object

   3.insertAdjacentText    
   NOte: only text


   Syntax:
    parentContainer.insertAdjacentHTML ( ' position ' , '<html>  </html>');

  $ we can define 4 position
    Example:

      <!-- beforebegin-->
    <div id="container">
      <!--afterbegin-->

      <h2> Heading </h2>

      <p>This is a p Tag </p>

      <!--beforeend-->
    </div>
      <!--afterend-->

  Example :
    let parentContainer = document.querySelector("#container");

    parentContainer.insertAdjacentHTML("afterend" , "<img src='../images/tangil.jpg' />");

      
#  Attribute in JavaScript

  $ set Attribute
    syntax:
     1.SetAttribute
     > SelectedTag.setAttribute( "attributeName","attributeValue");

     2.getAttribute
     > SelectedTag.getAttribute("attributeName");

     3.removeAttribute
     > SelectedTag.removeAttribute("attributeName");

     4. check Attribute
      > selectedTag.hasAttribute("attributeName")    
    Note:  return Boolean value

  Example:
    1. setAttribute
      child.setAttribute("style","color : red");

    2. getAttribute
      let value = child.getAttribute("style");
        document.write(value);

    3. removeAttribute
        child.removeAttribute("style");

    4. hasAttribute
      let bool = child.hasAttribute("style");
      console.log(bool);



# inline Style

  1.selectedTag.style.cssText = " can declare multiple style ";

  Note: But it's totally override old style.

  Example:
    child.style.cssText = "background-color : red; color : green; ";

   2. selectedTag.style.cssText += "can declare multiple style " ;

  Note: (=+) It's include old inline style.


  Example:
    child.style.cssText += "background-color : red; color : green; ";


  3. selectedTag.style.styleName = "values";

  Example:
    child.style.backgroundColor = "red";

  Note: previous style not remove , it's append.


  4. we can also use setAttribute for inline Style.

  Example:
    child.setAttribute("style","background-color : red");



# Get Computed CSS

  Note: get all CSS styles into one object which are applied in the element.

  Syntax:
   getComputedStyle ( selectedTag );

  Example:
    let getStyles = getComputedStyle(tagName);
    console.log(getStyles.color);



# get width & height
      
  $ width

    1. offsetWidth = border + padding + content
    2. clientWidth = padding + content
    
    Example:
      let width = selectedTag.offsetWidth;
      console.log(width);


  $ height

    1. offsetHeight = border + padding + content
    2. clientHeight= padding + content

    Example :
      let width = selectedTag.offsetWidth;
      console.log(width);

  
# DOM Events
    
  Note: DOM events are actions that as a result of the user action or as result of state change of the elements of a DOM tree.

  Note: "event" Object is the parent Object for all DOM Events.

  Example:
    document.getElementById("btn").addEventListener("click",()=>{
      console.log(event);
      console.log(event.target);
      console.log(event.type);
  });


  $ WE can register any events on any HTML tags in 2 ways.

    1. inline event attribute
      
      Note : add "on" keyword with every eventName.
      Ex : onclick, onmouseover, onpaste, ondrop etc.

      Note: declaration any event same as like declare normal attribute.

      Ex: onclick = "functionName(parameters)";

      Note : we can add multiple events same as like normal attribute.

      Example: 
        <button onclick="funcName()" id = "btn"> click me ! </button>
      
      <script>
        function funcName(){
          console.log("clicked")
        }
      </script>

    or,
     
      <script>

        let btn = document.getElementById("btn");

        btn.onclick = function(){
            console.log("clicked");
        }
      </script>

      

  $ return statement with inline attribute
        
    Example :
      <form action = "#" 
         onsubmit = "return validationForm()"> 
      </form>
           
    Note: Here return statement means if the function return "true" then the function apply on HTML element ,
    otherwise, not apply if the function return "false" .

    
                  
  2. addEventListener() method

    Note: addEventListener()  can declare into script file.
      
    Syntax:
        element.addEventListener(" event ", function);

    Note: no need to declare function symbol but, we can also declare here anonymous function.
      
    Example :
      function fun_name(){
        console.log(`i was clicked`)
      }

      selectedTag.addEventListener("click",fun_name);

    or,

      selectedTag.addEventListener("click",function(){
        console.log(`i was clicked`)
      });

  $ different between inline event vs addEventListener?

    Note: Inline event override old function 
    but addEventListener append multiple old event.


# removeEventListener
      
  Note : must be used addEventListener and not used anonymous function.
      
  syntax:
    element.removeEventListener("event",functionName);


  Example:

    child.addEventListener("click",clickFunction);
    child.addEventListener("click",click2Function);

    child.removeEventListener("click",clickFunction);


    
# Page Load Events
      
  $ Two types of pages load
      
    1. DOMContentLoaded 
      > The browser fully loaded HTML and completed building the DOM tree. 
      However, it hasn't loaded external resources like css, images, videos, pdf etc.
      In this event, we can start selecting DOM nodes or initialize the interface.
      
      
     Note : use " window " Object with Load Events.
 
     Example:
      window.addEventListener("DOMContentLoaded", function(){
          console.log("dom loaded");
      });


    2. load
      > The browser fully loaded the HTML and also external resources like images and css.

      Example:
        window.addEventListener("load", function(){
            console.log("fully loaded page");
        });

      
      Note: window means whole this page contents. 
      We can add load event any specific element.

      Example:
        img.addEventListener("load", function(){
            console.log("fully loaded page");
          });


# Mouse Event

  1. click 
    Note: action when click.
 
  2. contextmenu
    Note: action when click right side on mouse.
   
  3. dblclick
    Note: action when double click.

  4. mousedown
    Note: action when mouse down.
    
  5. mouseup
    Note: action when mouse up.

  6. mouseover
    Note: action when mouse over.

  7. mouseout
    Note: action when mouse out. 


  
# Key event
 
  1. keydown

  2. keyup

  3. keypress
   
  Example:
    window.addEventListener("keyup" , function(parameter){
        console.log(parameter.key);
    });
   
  Note: can used with window object or input field.

  Note: "parameter.key"  // return key Name. 

    
# Scroll event

  1. scroll

    * window.pageXOffset = horizontal
    * window.pageYOffset = vertical
    
    Note: return px;

  Example:
    window.addEventListener("scroll", function(){
    if(window.pageYOffset > 550){
        document.body.style.background = "red";
    }else if(window.pageYOffset<150){
      document.body.style.background = "green";
            }
    );


  2.wheel

    * deltaX = horizontal
    * deltaY = vertical 
        
    Example :
      window.addEventListener("wheel",function(event){
      if(event.deltaY < 0){
        console.log("scrolling up...")
          }else if(event.deltaY > 0){
            console.log("scrolling down ...")
          }
      });



# Form Event
  1.focus
    Note: When the input field is activated.

    Example: 
      selectedField.addEventListener("focus",function(){
        selectedField.style.background = "yellow";
      });


  2.blur
    Note: When the input field wasn't focus.

    Example: 
        selectedField.addEventListener("blur", function(){
        selectedField.value = this.value.toUpperCase(); 
    });
    

  3. change
    Note: when something was changed on input field.

    Example: 
      selectedField.addEventListener("change",function(){
         console.log(this.value);   
      });


  4. input
    Note: Every Input will be detected.

    Example:
      selectedField.addEventListener("input",function(){
          console.log(this.value);
       });
     

  5. invalid
    Note : when was something invalid

    Example: 
      input.addEventListener("invalid",function(){
        console.log("something was wrong");
      });
 

  Note: 
    this.value;         // get input field values.
    this.value = " ";   // set input field values.


# ERROR Event
     
  $ error 

    Note: Those state when something went to wrong.
    
  Example:
    img.addEventListener("error" , function(){
    p.innerText = "something was wrong";
      });



# Event Bubbling & Event Capturing

  1. Bubbling Event
    Note: most specific element & then least specific element.
    In the other word, child to grand parent.
    Ex: div to document.

    Note: It's default.

    
  2. Capturing Event
    Note: reverse of Bubbling Event.
    In the other word, grand parent to child.
    Ex: document to div.

  Note : 
    true = Capturing Event
    false = Bubbling Event

  Note: 
    If you want to Capturing event , then declare "true" on 3rd parameter in every addEventListener.

  Example:
    btn.addEventListener("click",btnClicked,true );
    container.addEventListener("click" ,divClicked, true);

    document.body.addEventListener("click" , bodyClicked,true);


  Note: event Bubbling & event Capturing only works with addEventListener.

# stopPropagation()
  Note: used this function we can stop all related event.
   
  Example:
    btn.addEventListener("click",funClicked(event){
    console.log("i am clicked");
      event.stopPropagation();
    });



# preventDefault() 
   
  Note: We can control/stop DOM default behavior  through this function.

     
  Example: 
    anchor.addEventListener("click", function(event){
       event.preventDefault();
    });
    

# Browser Object Model (BOM) 

  Note: The Browser Object Model (BOM) is Used to interact with the browser.


  Note: Window is the grand parent or main container or we can say the global object and any operations related to entire browser it can be a part of window object.
    Ex: whole Browser.

  Note: All the members like object, methods or properties. 
  If they are directly the part of window object then we do not need to refer the window object.

  Example: window.alter(); |  alter();
            window.setTimeOut(); | setTimeOut();


  Note: All JavaScript objects, function and variables with the " var " keyword automatically become members of the window object ( or, global object).
  ( but, let & const function scope )


  Note: Global variables are properties of the window object.
  &
  Global functions are methods of the windows object.

      *** var = window = global ***


# window 
    
  1. window.innerWidth
  2. window.innerHeight
    Note: return viewport width & height by px.

  3. window.outerWidth
  4. window.outerHeight
    Note: return entire the browser width & height by px.

  5. ( open new window)

    Syntax:
      window.open(url,name,features);

    Example: 
      button.addEventListener("click", function(){
        window.open("https://www.yahoo.com","yahoo","width=500,height=500");
      });


  6. (close opened popup windows)
       
    Syntax:
      windowObj_variable.close();

      Example:
        var win;
        btn.addEventListener("click",function(){
           win.close();
        })

  

#  Time Out 

  1. setTimeOut(function , millisecond);

    Note: after milliseconds execute a function.

    Example:
      function changeBackground(){
        parentContainer.style.background = "red";
      };

    setTimeout(changeBackground,5000);

   
  2. clearTimeout(setTimeout_Id);

    Note: It's use for stop specific setTimeout through setTimeout_id;

    Example:
      let id = setTimeout(changeBackground,5000);

      button.addEventListener("click",function(){
        clearTimeout(id);
      });

            
# Time Interval
    
  1. setInterval(function, millisecond);
    Note: After every milliseconds execute a function (like infinite loop).
    
    Example: 
      setInterval(infiniteLoop,3000);
    
      function infiniteLoop(){
        console.log("hello....");
      }

        
  2. clearInterval( setInterval_Id);

    Note: It's use for stop specific setInterval through setInterval_id;

    Example:
      let id1 = setInterval(function(){
        console.log("hello ....")
      },2000);
            
      btn.addEventListener("click",function(){
        clearInterval(id1);
      });

    
# Location
  Note: The location object contains information about the current URL.

  Note: The location object is a property of the window object.

    
  $ location properties
      
    1. location.href
        Note: return full url  ( pathname + protocol )
      
    2. location.pathname
        Note: return only url path.
      
    3. location.protocol
        Note: return only protocol.
        
    4. location.host
        Note:  returns the host (IP address or domain) and port of a URL.

    5. location.search
        Note: return the queryString part of a URL, including the question mark (?).


  $ location methods

    1. location.assign(" url ");
      Note: redirect url link & store history.

      Note: location.href = " url ";      // same
      
    2. location.replace( "url" );
      Note: redirect url link but not store history.
      
      
    3. location.reload(); 
      Note: reload current url.



# Navigator
    
  Note: The navigator object contains information about the browser.
     
  Note: The location object is a property of the window object.


  $ navigator properties
      
  1. navigator.cookieEnabled
    Note:	Returns true if browser cookies are enabled
     
  2. navigator.onLine
    Note: Returns true if the browser is online


# Screen Object

  Note: The screen object contains information about the visitor's screen.

  Note: The screen object is a property of the window object.


  1.screen.width
    Note: return total width of screen.

  2.screen.height
    Note: return total height of screen.
     

  
  # Temperature Converter
  # words & character counter
  # Background Color Switcher
` # Navbar Sticky
  # Form Validation
  # Image Slider
  # stopwatch





  % Start ES2015 or ES6 Feature %

# Data-type (let & const)
    
  Note: before ES6, JavaScript only have one Data-type (var).
  But In ES6, include 2 more data-type (let & const).
 

  Example: 
    let variable = "block scope & changeable";
    const variable = "block scope & unchangeable";


# Default Parameters

  Note: we can set default value as a parameter.
  This value will be String, Number or Boolean.

  Note: Default parameter apply this time  when user / programmer didn't declare parameter through its function.
  
  Example: 
    function defaultPara(name ="Tangilur  Rahman ",age = 23){
     console.log(name + age );           //Tangilur Rahman 23
    }

    defaultPara();
    defaultPara("Tamim",15)
   



# Rest Parameters

  Note: If we don't know how many parameter will be given then we can used there rest parameter.

  Note: Rest parameter as same like arguments Object parameter.
  But it's declare in function's parameter & Array_Name selection by us.
     
  Note: we can passing multiple separate parameters also.

  Syntax:
    function fun_name( ,...ArrayName){
      // used the Array.
    }

    Ex:
      function Sum(name, ...arr){
    
        console.log(arr.length);       // 3
        console.log(name);
      }

    Sum(3,4,5,6);

  Note: Rest parameter must be always declare at last in function's parameter.



# Spread Operator
  
  Note: spread operator doing spread (separate) with array or object values.

  Note: Spread_Operator's declaration as same like Rest_Parameter's declaration but purpose not same.

  Note: Rest_Parameter used for storing given parameter into new Array.
    & Spread_Operator's used for copy a Array or a Object & 
    also we can send array as a parameter and used it with rest parameter.

  Example:  (with Array)
  
    1) let arr2 = [4,5,6,7,8];
      console.log(...arr2);   // 4 5 6 7 8

    2) let array1 = [1,2,3];
      let array2 = [4,5,...array1,6];  
     console.log(array2);     // [4, 5, 1, 2, 3, 6]

  
  Example: (with Object)

    let person = {
    name : "Tangilur Rahman",
    age : 12
    }

    let person1 = {
        ...person,
        address : "joypurhat"
    }

    console.log(person1);


  Note : Primitive Data-Type Object directly copy But
  Object & Array aren't directly copy , just there are share reference.

    Example:
       let person = {
           name : "Tangilur"
       }

       let newPerson = person;

       newPerson.name = "Tamim";

       console.log(person);    //Tamim
       console.log(newPerson); // Tamim

      Note: cause share reference , anyone can change anything & impact on everyone.

    
    Note: But we can copy totally Object & Array by using Spread operator.

     Example:
        let person = {
           name : "Tangilur"
        }

        let newPerson = {
          ...person
        }

        newPerson.name = "Tamim";

        console.log(person);    //Tangilur
        console.log(newPerson); //Tamim



# for-of Loop
     
  Note: it's used with Array,String for iteration ( or used forEach(function) ).
      or we can also used for-in loop.

  Ex:
    let text = "Tangilur Rahman";
    for (let key of text) {
     console.log(key);
    }


# for-in loop

  Note: It's used with Everything for iteration .

  Syntax:
    for (let anyName of Object / Array / String) {

       console.log( anyName );   // return only its index numbers

       console.log( Object / Array / String [anyName] )        // return its values
    }



# Template Literals 

  $ Symbol:   `  ` ;

  Example: 
    let txt = `hello        Welcome ,
    Thanks you` ;
  
     console.log(txt);
       
  Note: worked like <pre> tag.

  Example: 
    let num = 10;

    console.log(`the value is ${num * 2}.`);

  Note: variable must be declare inside ${variable}.
     


# Array Destructuring

  $ before ES6
    Example : 
      let personal = ["Tangilur",23,"Akkelpur"];

      let name = personal[0];
      let age = personal[1];
      let address = personal[2];

    
  $ In ES6
    Example :
      let personal = ["Tangilur",23,"Akkelpur"];

      let[name,age,address] = personal;

    
  $ set default values 
    Note: We can also set default values if that variable doesn't initialization.

    Example :
      let personal = ["Tangilur",23];
      let[name,age,address="akkelpur"] = personal;


  $ with multidimensional array 

    Example : 
      let personal = ["Tangilur",23,["bazla",2015]];

      let[name,age,["school_name",year]] = personal;



# Object Destructuring

  $ before ES6 
     
    Example :
      let personal = {
        name : "Tangilur Rahman",
        age : 12,
        address : "akkelpur",
        fun :  function(){
              return "hello";
        }
      }

    let name = personal.name;
    let age  = personal.age;
    console.log(name);
  
      
  $ in ES6
     
    Example :
      let personal = {
        name : "Tangilur Rahman",
        age : 12,
        address : "akkelpur",
        fun:  function(){
            return "hello";
        }
      }

      let{name,age,address,fun} = personal;

    console.log(address);

  Note: In this way, declare must be same names as properties name.


  $ change object's properties name :
     
    Syntax:
      let{old_name : new_name ,...} = Object_Name;
  
    let {name: fullName,age} = person;
    console.log(fullName);

  $ nested object 

    Example :
      let personal = {
        name : "Tangilur Rahman",
        age : 12,
        education : {
            school : "bazla",
            year : 2015
          }
      }

      let{name,age,education: {school : high_school,year}} = personal;

      console.log(school);

    Note: same structure applied for destructuring.



  $ generate dynamic key in Object
   
   Example : 
     let key = "fullName";

     let person = {
       [key+student] : "Tangilur Rahman",
       [20+3] : "your age";
     }

    console.log(person.fullName);
    console.log(person[23]);


  $ when key & value both are same 

    Example :
      let fullName = "Tangilur Rahman";
      let age = 23;

      let person = {
          fullName,age
      }

      console.log(person.fullName);

    Note: if key & value both are same no need too declare value.
    
     


Chapter :  Modules  ✌️

  Note: For modules system must needed http or https protocol server.
  
    👉 We can achieve that in VS Code by using 
      Extension : live server .

    
  # add script with html files  ✅

    Note: we need to define type = "module" when using modules system with this script.

 
    Example : 📝

      <script type="module" src = " javascript file path "><script/>
    
      
  # export another files to import main file  ✅

    Note: we can export & import anything what do we want
     
     👉 variable,function,object,class,constructor etc.

    from any_file to any another_file.


    🟢 export 
    
      Note: sent something. (given permission)

      Note: A module file always export a object which have bundle of export's items( one or many items )


    Syntax:  🧬

      export anything;  
      
      👉 separately

    or, 

      export { variable,function,object,constructor };  
      
      👉 together

    or, 

      export { anything } from " javascript another file path "; 

      👉 import from another file then export at a time.


    Example:
      
      export let name = "Tangilur Rahman";

      export function funName(){

         return "something";
      }

      export let object = {

        name : "Tangilur",
        age : 23

      }

    or,

      export { variable,function,object,constructor };

    or, 

      export { name } from " javascript another file path ";
        


    🟢 import 
    
      Note: Receive any exported module's object.

    Syntax: 

      import * as objectName from "javascript file location";

    or, 

      import {export's names} from "javascript file location";

      👉 Object Destructuring

      Note: Name must be match.
    

    Example:  📝

      import * as objectName from "javascript file path";

      ⭐ objectName.anyItem;
    
    or,

      import { variable, function,object, constructor } from " javascript file path ";


  Note: we can't import anything without export.(any way )

  
  # rename exported items  ✅
    
    Syntax:

     import { anything as any_name ,...} from "javascript file path";
    
    Note: as means rename.

    Note: solved duplicate item's name.


  
  #  export default ✅

    Syntax: 

      export default function funName(){
        // to be executed.
      }

    or,
      
      export default function(){
        // to be executed.
      }

    or,

      const funName = () => {
         // to be executed.
      }

      export default funName;

      👉 That way we can exported anything as like variable, object, class etc.
    

    Note: Declare with anonymous function or can also define function name.

    Note: Every javascript file can have only one default function & it must be export that.

    Note: we can export anything through export default.


  # import default  ✅

    Syntax:  🧬

      import { default as any_name,...} from "javascript path";

    or,

      import anyName from 'javascript path';
       
    Note: " export default " item must be rename in object destructuring & 
     Syntax => default as any_name

     or, can declare any-name directly match or not match doesn't any matter.( normal exported Items can't )

     👉 cause one module can exported only one " export default " any item,
      so, compiler understand it must be that.

    Note: When just need one item exported then used " export default ".(better)

        

Chapter :  Object Oriented Programming Language (OOP)  ✌️

  Benefit: Don't repeat yourself(DRY)

  $ Three important words to understand
     
    1. Object.
    2. Class.
    3. Inheritance.

  Object = In the world every thing is a object (living things and non living things).
     
  @ Every object has 2 things
    1. Properties or features (define how that object look like).

    2. action performed by or performed on it.(define can work or work on it).

 
  Class = Grouping of Object.

  Inheritance = achieve properties & actions from parent classes.
  
  Note: In OOP concept we group function and variable in a Block Called Class.

  
  Note: primitives are copied by their value.(Number, String, Boolean)
  & Object are copied by their reference. (Object , Function, Array)
  

  $ Four pillars of object oriented programming language.
   
    1. Encapsulation.
    2. Abstraction.
    3. Inheritance.
    4. polymorphism
 


# OOP before ES6

  $ create new Object
    Syntax:
      1. data-type objectName = {
             
        property : value;
        functionName: function(){};
      }
       

      2. data-type objectName = {};

        objectName.property = value;
        objectName.functionName = function(){};


      3. data-type objectName = new Object();

        objectName.property = value;
        objectName.functionName = function(){};


      4.(using constructor)
           
        Syntax:

          function Constructor(parameters){

            this.property = value;
            this.functionName = function(){};
          }
          
      let objectName = new Constructor(parameter's values);

      Note: "this" keyword must used before properties or methods name.
    
  

  
# Prototype and Inheritance
    
  Note: prototype object attach with every object automatically
  & prototype provide some method to object.


  $ check that's property present or not 
    Syntax:
     object.hasOwnProperty("property_name");
    
    Note: return boolean value.
    Note: hasOwnProperty () method belong to prototype object.


  Note: Prototype help to doing inheritance.

  Note: if we create object by using constructor then 2 type of prototype created.
      
    1. constructor prototype (by us)
    2. object prototype  (by js)
    
  Note: those 2 prototype connected each other.(prototype chaining).
    
    
  
  Note: prototype link with object, not copy paste like object's properties.
  So, every common properties & function should add with Constructor's prototype.


  $ add properties & function into Constructor's prototype.

    Syntax:   
      ConstructorName.prototype.property = value;

      ConstructorName.prototype.functionName = function(){};

      Example: 
        function person(name,age){
          this.name = name;
          this.age = age;

        }

      person.prototype.address = "akkelpur";
      person.prototype.fullName =    function(){
        return this.name + " " + this.age;
      }

      let person1 = new person("Tangilur",23);
      let person2 = new person("Tamim",20);

      console.log(person1.fullName());
      console.log(person2.fullName());


    Note: It's better to declare methods into prototype object.

    Note: we can't declare properties dynamically into prototype object.(Fixed Value)

      Example: 
        Constructor.prototype.Nationality = "Bangladesh"; 
     
      


  $ inheritance using prototype

    Note: change Constructor's prototype direction.
 
    Example: 
      function Engineer(education,experience){
        this.education = education;
        this.experience = experience;
      }

      let engineer1 = new Engineer("bsc",2);

      Engineer.prototype.details = function(){
         console.log("can inheritance")
      }


      function Person(name,age){
        this.name = name;
        this.age = age;

      }

      Person.prototype.define = function(){
        return this.name + " " + this.age;
      }

      let person1 = new Person("Tangilur",23);


      Person.prototype.__proto__ = Object.create(Engineer.prototype);

      console.log(person1.details);


    Note: Only inheritance prototype object, not whole constructor.


 
 # OOP in ES6

  Note: internal system same like before ES6 through prototype object,
  but just procedure change.


  $ create Class
    Syntax:
      class className{
        // declare properties & methods,array
      }
  
  $ create object
    Syntax:
      let objectName = new className(); 

    Note: We can check any object its specific class instance or not by using instanceof. 
    
    Syntax:
      console.log(objectName instanceof className); 
    
    Note : it's return Boolean value.



  $ 3 types of method.
  
    1. Constructor
      Syntax:
        class className{
            constructor(){
              // initialization class's properties.
            }
        }

    
      Note: constructor called automatically when its objects will be created.

      Note: every class provide default Constructor.(no parameter)
 

   2. prototype method
      Syntax:
        class className{

          functionName(){
             //to be executed.
          };
        }  
      
      Note: add with prototype method automatically.
      & called through its Object.


    3. static method
      Syntax: 
       class ClassName{

          static functionName(){
            // to be executed
          };
       }
     
    Note: we can also declare static property.
      Example :
         static property = value;

    Note:both are called through ClassName.

    

  Note: we can also declare Property,Array,Object but,
  no need to declare data-type before them.

  Example:
      
    class Men {
      constructor(name,age){
            this.name = name;
            this.age = age;
      }
      variable = "value";
      array = ["tangil",3,4,5];
      object = {
          name: "tangilur",
          age : 23
      }
     prototypeFunction(){
          console.log("hello");
      }
        
      static staticFunction(){
          console.log("call through ClassName");
      }
        
      arrowFunction = () => console.log("hi");
      }

      let man = new Men("tangil",23);

      man.arrowFunction();
      console.log(man.name);



# inheritance with class

  Syntax:
    class subClass extends ParentClass{

    }

  $ sub class's constructor 
    Syntax:
      constructor(both class parameters){
      super(super class all parameter);
          this.property = values;
      }

    Note: super = parent class
          this  = current class 

    Note: must be declare super(parameters) inside sub class's constructor in first statement.



    Example:
      class Man {
      constructor(name,age){
          this.name = name;
          this.age = age;
      }
      sayHi(){
          console.log("hi");
      }
    }


    class Software extends Man{
      constructor(experience,degree,name,age){
          super(name,age);
          this.experience = experience;
          this.degree = degree ;
    
      }

      @override
      sayHi(){

        super.sayHi();

        console.log(`your name is ${this.name} your experience is ${this.experience}`);
      }
    }

    let software = new Software("tangil",23,3,23);

    software.sayHi();



# encapsulation in JavaScript
   
  #variable = private variable
  #method   = private method
  
  Example: 
    class person{
      #name

      setName(name){
         this.#name = name;
      }

      getName(){
        return this.#name;
      }

      #privateMethod(){
        console.log("Private method")
      }

      publicMethod(){
        this.#privateMethod();
        
      }

    let person1 = new person();

    person1.setName("Tangilur");
    console.log(person1.getName());
    person1.publicMethod();
   
    
  Note: we can't call private properties & methods outside from class by using ClassName or ObjectName.
  
    for Private_Properties : used getter $ setter method.
    for Private_Method     : used public method.




# Object attach with class (mixin)
   
  Syntax:
    Object.assign(className.prototype,objectName);

  Note: Now we can call that object properties & method by using Class's object.

  Note: Inheritance one at a time 
    but Mixin multiple-time whatever you want.

  
  Example:
     let person = {
  
      }
      let person1 = {
        
      }

      class Man {
          
      }

      class Software extends Man{
          
      }

      Object.assign(Software.prototype,person);

      Object.assign(Software.prototype,person1);

      let software = new Software();

      console.log(software);  



# Arrow Function
      
  $ Normal function

    function sum(a,b){
       return a+b;
    }

    console.log(sum(2,3));


  $ Arrow Function
    syntax:
      datatype functionName = (parameters) =>{
          //codes
      }

  Note: "this" keyword don't work with Arrow function.
   

  1. let sum = (a,b) => {
      a+= 1;
      return a+b;
    }

    console.log(sum(2,3));

      
  2. let sum = (a,b) => {
        return a+b;
      }
    
  or,

     let sum = (a,b) => a+b;
     let sum = (a,b) => console.log(a+b);

    Note: when single line statement then we can declare like that.
    Also remove return keyword.


  3. let double = a => a*2;

    Note : when just single parameter.

     
  3. let random = () =>  Math.random() * 10 ;

    Note: when no parameter.

     
  4. document.addEvenListener("click",() => console.log("click"));
     
    Note: when anonymous function.





  % Advance JavaScript %


# Higher Order Function  ✅

  Note: That function which takes another function as an arguments in called higher Order Function.


# Callback Function   ✅

  Note: That function which get passed as an argument to another function is called Callback function.

  
  $ Example : 📝 ( Higher Order & Callback Functions )


      let sum = (a,b) => a + b;
      let subtract = (a,b) => a - b;
      let multiplication = (a,b) => a * b;
      let division = (a,b) => a / b;

      let Calculator = (operator,num1,num2) => operator(num1,num2);


      console.log(Calculator(division,6,3));
      
    Note: 

      sum,subtract,multiplication,division  = Callback Function.

      Calculator = Higher Order Function.

      

  Example: 📝

    const highOrderFunction = (callback) =>{
      callback(10);
    }

    highOrderFunction((n)=>{

          console.log(n);
    })

    const callBack = (n) =>{
          console.log(n);
    }

    highOrderFunction(callBack);


  Note: callBack function always called from highOrderFunction ,
   that's why it's name callBack.

  Note: As a argument in highOrderFunction, we can directly define callBack function like anonymous function or we can pass callBackFunction's just name.

  Note: callBack function mainly used with asynchronous execution, 
   for that tell compiler i have done my work we can execute it now.



# Currying Function  ✅

  Note: When a function , instead of taking all arguments at one time, 
  takes the first one and return a new function that takes the second one and returns a new function which takes the third one,
  until all arguments have been fulfilled.

  
  Example: 📝
   
    function sum (num1){

    return function(num2){
        return function(num3){
            console.log(num1 + num2+ num3);
        }
        }
    }

    sum(5)(4)(5);

  or,

     const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

     sum(6)(9)(5);   


🟡 Execution Flow 🟡

Chapter :  Synchronous  ✌️

  Note: JavaScript is a single threat programming language, that's why at a  time one task will be done.

  Note: Synchronous means to be execution in a sequence flow one by one line.

  Note: It's normal execution flow in JavaScript.(Default)

  Note: Synchronous get more priority than asynchronous.


Chapter :  Asynchronous  ✌️

  Note: Asynchronous means can move to another task before the previous one finish execution.

   Never wait for anyone,if someone take time then jump next one.
  
   Execution in BACKGROUND.

  
  Note: We know that when starting execution our program at first all task functions store into Stack then " last in first out " process applied and executing them,

   but when complier get any asynchronous function into Stack then that asynchronous function move to " Web Api " & in Stack another tasks start to be execute not wait for asynchronous function,

   & when that asynchronous function ready to execute then that function move to " callback queue " from here " event loop " insert that into this Stack and execute it,

  👉 All asynchronous functions executed through this procedure.


  # Some of  asynchronous functions ✅

    1. setTimeOut()
    2. setInterval()
    3. new Promise()
    4. async function  and more...


  Example:

    let func1 = () => console.log("function 1 ");

    let func2 = () => console.log("function 2 ");

    let func3 = () => console.log("function 3 ");


    setTimeout(func2,1000);

    func1();
    func3();

  Output:

       function 1
       function 3
       function 2



Chapter : How JavaScript runs our codes ✌️

  # overview ✅

    1. At first programmer write JavaScript codes at code editor

    2. Then those codes execute start in Browser or Node JS server.

    3. Each Browser have JavaScript Engine which convert our code into machine code ( Binary ) and start executing.

    4. After execute complete then that machine code convert human readable and output them into browser.
     
      
  Note: JavaScript interpretation & Compilation both way to complete execution.
    Means JIT ( Just-In-Time ) compiler.


  # Interpreter  ✅

    Note: A interpreter translates programming code into machine code one by one line and execute it.

    Note: slow process but easy to debug.


  # Compiler  ✅

    Note: A compiler at first translates whole page programming codes into machine codes and then start execution.

    Note: Compiler is faster than Interpreter, but hard to debug. 




  # Global Execution Context ✅

    Note: " Global Execution Context " created when we run that program for execute.

    Note: JIT compiler not directly start execution.
    
    @ At first preparation for execution 😎

      1. create global object " window "
 
      2. all declared global " var " variable initialize with " undefined " &  " let & const " variable just allocate here.

       Example : ( 1 )
     
          console.log(name);
          
          var name =" Tangilur Rahman";

        output: undefined

       Example : ( 2 )

          console.log(name1);

          let name1 = "Tamim";

        Output: Reference Error.
        

      3. all declared global method's body, Array, Object store into JIT compiler storage ( HEAP ) & only share reference.

       Example with Object : 

          let object = {
              name : "Tangilur"
          }

          let object1 = object;

          object1.name = "Tamim"

          console.log(object1);
          console.log(object);


       Example with Array :

          let array = ["Tangilur"];

          let array1 = array;

          array1[0] = "Tamim";

          console.log(array1);
          console.log(array);
      
      

    @ Execution Start  😎

      Note: All global variable initialize with programmer given values instead of " undefined "
      & if any method called by programmer then start " Function Execution Context ".



  
  # Function Execution Context ✅

    Note: " Function Execution Context " create when that function called.

    Note: Almost same like global execution context

    @ At first preparation for execution 😎

      1. creating arguments object  ( only different )

      2. all declared local " var " variable initialize with " undefined " & " let & const " variable just allocate here.


      3. all declared local method's body, Array, Object store into JIT compiler storage ( HEAP ) & only share reference.

 
      Example :
     
       function funName (parameter){

         console.log(name);
         var name =" Tangilur Rahman";

         console.log(name1);
         let name1 =" Tangilur Rahman";
 
       }

       output: undefined
       output: Reference Error.


    @ Execution Start  😎

      Note: All variable initialize with programmer given values instead of " undefined "
      & if any another method called by programmer from there then same procedure start.


      Note: After execution completed that function, the function execution content remove from the call stack,

      & all local everything ( variable,Array,Object etc. ) go to JavaScript Garbage Collection and destroy them.

        Example :

          function funName()

          { // initialize start


          }  // destroy everything


      Note: Every method return something whether it undefine or value.



  # Heap ✅

    Note: Heap is a storage of our compiler , here store all non-primitive data-type ( function, Array, Object etc ) and share just reference.

  
  # Call Stack  ✅

    Note: We can tell that is execution flow.
  
    Global Execution context => Function Execution context => another function ...

    Note: Last in Fist out.

    Note:  At first Global execution context add  and at last Global execution context remove from here && execution completed.

  
  # Web Api ✅

    Note: Web Api is not a JavaScript Engine part, it is a runtime environment.

    Note: Here Store window Object, DOM, Event, Asynchronous function etc.

    Note: When compiler get any Asynchronous function into " Call Stack " then that function give to Web Api and continue execute other Stack.



  # callBack Queue ✅

    Note: When Asynchronous function done it works then that function come to  " callBack Queue " from  " Web Api ".

    Note: Here applied " First in first out " procedure.



  # MicroTask Queue ✅

    Note: Here store only promise &  async function.

    Note: It's more priority than callBack Queue for Event Loop.


  # Event Loop  ✅

  Note: The event loop is a constantly running process that monitors both the " Callback queue " or " MicroTask Queue " and " the call stack " .



Chapter : Promise  ✌️


  Note: Promise is a asynchronous Object which take a function as a callback,
   that callback function used for tell compiler that my codes execute completed in asynchronously now you can execute them.

  Note: Promise works base on condition.

  Note: state of promise

      1. pending
      2. resolve
      3. reject

    then( resolve() );
    catch( reject() );
      

  $ create promise

     Syntax:
       let variable = new Promise(function(resolve,reject){

          // pending
          // resolve() or reject();

       });

      variable.then(resolve).catch(reject);

     Example: (1)

       let num = 4;

       let promise = new Promise( function(resolve,reject){

        console.log("pending");

          if(num==4){
              resolve("success");
          }else{
              reject("fail");
          }
        });

        promise.then(function(result){
           console.log(result);
        });
       promise.catch((error) => console.log(error));     // fail


     Example: (2)

       let promise = (condition) =>{
        return new Promise(function(resolve,reject){
            console.log("please wait....");

            setTimeout(() =>{
                if(condition){
                    resolve("i am successful");
                }else{
                    reject("i am fail");
                }
            },4000);
        })
        }

        promise(true).then(Success).catch(Fail);

        function Success(result){
            console.log(result);
        }

        function Fail(error){
            console.log(error);
        }


    Note: resolve() & reject() are callback function.
    We can used it base on condition. 

    Note: We can also define pending state before condition.

    Note: not required callback function names are resolve() & reject(),
    we can define any name.

    Note: if condition is true then callback resolve() function & its resolve() function get through then() function.

     if condition is false then callback reject() function & its reject() function get through catch() function.


    Note: we can return anything through callback functions ( resolve() & reject() ).



  $ Promise.all();  ✅

    Note: we can check multiple promise  through that function.  
    
    Note:
      1. if all promises resolve only that time call then() function.

      2. if any one promise reject then that time call catch() function.
  
      
    ExampLe:  (1)

      let promise = new Promise((resolve,reject) => resolve(10));

      let promise1 = new Promise((resolve,reject) => resolve(20));

      let promise2 = new Promise( (resolve,reject) => resolve(30));

      Promise.all([promise,promise1,promise2]).then(([res1,res2,res3]) => {

          var sum = res1 + res2 + res3;
          console.log(sum);
        }).catch((error) =>{
            console.log(error);
      });


    Example : ( 2 )
    
      let promise = () => Promise.resolve("one");
      let promise1 = () => Promise.resolve("two");
      let promise2 = () => Promise.resolve("three");

      Promise.all([promise(),promise1(),promise2()])
      .then(res => console.log(res))
      .catch(error => console.log(error.message));


      output : [ 'one', 'two', 'three' ]



  $ Promise.race()  ✅

    Note: Promise.race() is same like real race.
    
    Note: only get first one execution from multiple Promises Object.

    Example: 

      let promise = () => {

        return new Promise(function(resolve,reject){
          
          setTimeout(() =>{
            resolve ("i am first promise ");
          },4000);
        })
      }


      let promise1 = () => {
        return new Promise ((resolve,reject) => {

        setTimeout( () =>{
          resolve(" i am second promise")
          },3000);
       
        });
      }

      let promise2 = () => {
        return new Promise ((resolve,reject) => {

        setTimeout( () =>{
          resolve(" i am second promise")
          },3000);
       
        });
      }

    Promise.race([promise(),promise1(), promise2()])
    .then((res) => console.log(res));      
    
    output: i am second promise.



  $ Promise chain  ✅

    Note: The main purpose of Promise chain is to control asynchronous functions execution flow,
    After a asynchronous function execution completed then start another one.

    Syntax:

      function().then(resolve)
      .then(function).then(resolve)
      .then(function).then(resolve)
      ...
      .catch(reject);


    Example : (1)

      let promise = new Promise((resolve,reject) => resolve("one"))

      let promise2 = new Promise((resolve,reject) => resolve("two"))

      let promise3 = new Promise((resolve,reject) => resolve("three"))


      promise.then((result)=>{
          console.log(result);

          promise2.then(result =>{
              console.log(result);

              promise3.then(result =>{
                  console.log(result);
              })
          })
      });



    Example: (2)

      let taskOne = () =>  new Promise((resolve,reject) => {
          resolve("task 1 completed");
      });


      let taskTwo = () =>  new Promise((resolve,reject) => {
          resolve("task 2 completed");
      });


      let taskThree = () =>  new Promise((resolve,reject) => {

          setTimeout(() =>  resolve("task 3 completed"),2000);
        
      });


      let taskFour = () =>  new Promise((resolve,reject) => {
          resolve("task 4 completed");
      });


      taskOne()
      .then((res) => console.log(res))
      .then(taskTwo)
      .then((res) => console.log(res))
      .then(taskThree)
      .then((res) => console.log(res))
      .then(taskFour)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));



    Example : (3)

      let hasMeeting = true;

      let  meeting = () =>  new Promise((resolve,reject) =>{

          if(hasMeeting){
              let meetingObject = {
                  name : "Technical Meeting",
                  location : "Google Meet",
                  time : "10:00 pm"
              }
              resolve(meetingObject)
          }else{
              reject (new Error("meeting already scheduled"))
          }
      });


      const addToCalender = (meetingDetails) =>{

          const calender = (`Meeting name : ${meetingDetails.name} Location : ${meetingDetails.location} Time : ${meetingDetails.time}`);

          return Promise.resolve(calender);   // when return only resolve() or reject()
      }


      meeting()
      .then(addToCalender)  // call that function with meeting function's argument
      .then(result => console.log(result))
      .catch(error => console.log(error.message));


        ☢️☢️☢️
        
          function sum(num){
              console.log(num);
          }

          function number(callBack){
              return callBack(10)
          }

          number(sum); 

        ☢️☢️☢️


    or,

      meeting()
      .then(result => addToCalender(result).
      .then(result => console.log(result)))
      .catch(error => console.log(error.message));


    Note: for multiple Promise chain one catch() function is enough.

    Note: If somewhere reject() callback is applied then from here don't another chain function is executed.




Chapter : async & await  ✌️
  
  Note: its the update version of Promise for control asynchronous functions execution flow.
  
 # async ✅

  syntax: 

    async function funName(){

      await something;

    } 
  or,
    let functionName = async function(){

      await something;

    }
  or,
    let functionName = async() => {

      await something;

    }

  Note: If async function return something it's must be a promise.

    1. if everything is "ok" then return resolve() function & we can get it through then()

    2. if anything is "wrong" then return reject() function & we can get it through catch()

  Note: no need to declare resolve() or reject() functions into async function.
  its return automatically through JS compiler.


  Note: async function couldn't complete without await

  
  # await ✅ 

    Note: " await " keyword only works with async function.

    Note: " await " keyword can declare with any statement into async function.

    Note: 

      🟡 Instead of " then "   =>   await 

      🟡 Instead of " catch "  =>   try{}catch{}

      👉 anywhere

    Note: The main purpose of " await " keyword is from here tell compiler that start asynchronous & not execute from there that async function's other statement please wait & 
    continue execute statements outside async function,

    after those completed then come back here and execute them.

    Note: it's main used when exchange data between server & client.

    Note: We can easily control asynchronous functions execution flow by using " await " keyword.

      Example: 

        let funcName = async()=>{

          await ... ; after completed then start next statement execution
          await ... ; after completed then start next statement execution
          await ... ; after completed then start next statement execution
            
        }


   Example: (1)

    let fun = async () =>{

      console.log("two");
      await console.log("three");
      console.log("four")
      console.log("six")
      return "Tangilur"

    }

    console.log("one");

    fun().then(response => console.log(response));

    console.log("five");

    output: one two three five four six Tangilur

  
  Example: (2)

    let meeting = () =>{

      if(true){
          return object = {
              name : "technical meeting",
              location : "google meeting",
              time : "10:30 pm"
          }
      }else {
          return (("i am not available"))
      }
    }


    let addToCalender = (meetingDetails) => {

        return `Meeting Name : ${meetingDetails.name} Location : ${meetingDetails.location} Time : ${meetingDetails.time}`
        
    }

    let myMeeting = async() =>{
      
        const meetingObject = await meeting();

        if(typeof(meetingObject) === "object"){

            const calender = await addToCalender(meetingObject); 

            console.log(calender);        

        }else{

            return  new Error("something is wrong")
        }
      
    }

    myMeeting();




Chapter :  Ajax  ✌️

  Note: AJAX =>  Asynchronous JavaScript And XML

  Note: Ajax is a oldest technique for creating fast and dynamic web pages without refreshing whole page.

  Note: Need live server for working with Ajax.


  Note: XMLHttpRequest class help to fetch data from server.

  Note: XMLHttpRequest works with 5 steps

      🟢 readyState property's value

      0.request not initialized
      1. server connection established
      2. request received
      3. processing request
      4. request finished and response is ready

  Note: server response two thing

      1. Status

      2. 
        if request for Text or JSON (responseText).
        if request for XML  (responseXML).


  Note: checking response status

      200: "ok",
      403: "forbidden",
      404: "not found".
        and more.

  Note: 3 types of format data Ajax can fetch from server.
  
      1. Text file.
      2. XML Data.
      3. JSON Data


  $ create XMLHttpRequest Object

    Syntax:
      let xhttp = new XMLHttpRequest();

    
    @ send request to server
      xhttp.send();

    @ get response from server
      xhttp.open("method",fileName / url ,asyncMode);
     
     Note: 
       method = "GET" / "POST" / "put" / "PATCH" / "DELETE" ;
       asyncMode = true / false;
  

  $ check readyState Update
      xhttp.onreadyStatechange = function (){

         if(this.readyState == 4 && this.status == 200){
            tag.innerHTML = this.responseText;
         }else if (this.readyState == 4 && this.status == 404){
            tag.innerHTML = "file not found";
      }

  
    Example:
      document.querySelector("button").addEventListener("click", function () {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            document.querySelector("h2").innerHTML = this.responseText;
          } else if ( this.readyState == 4 &&
            (this.status == 404 || this.status == 403)
          ) {
            document.querySelector("h2").innerHTML = "file not found";
          }
        };
        xhttp.open("GET", "./js/demo.txt", true);
        xhttp.send();
     });
   
    
  Note: we can process CRUD procedure by using AJAX.



# fetch() API (ES6)

  Note: fetch() is the update version of Ajax.

  Note: fetch() is a global method for making HTTP Request.

  Note: Need live server for working with fetch() API.

  Note: we can also process CRUD through that fetch() API

    1. create
    2. read
    3. update
    4. delete 

  
  Syntax:  🧬

    fetch(file / url )
    .then(function(response){
      return.response.text() / response.json();
    })
    .then(function(result){
      console.log(result);
    })
    .catch(function (error){
      console.log(error);
    });


  Note: fetch() method return a promise ,
  get that promise using then(),
  again that then() method return another response promise which send by server ,
  & we can also get that promise using another then() after that used that response data.

  At last we can declare catch() method for catch any error.



   # read, insert, update, delete using fetch() ✅

   Syntax: 🧬

     fetch(file / url ,{
       method : "GET" / "POST" / "PUT" / "DELETE" / "PATCH",

       body : from Data / JSON Data / Text,

       header : {
         'content-type' : 'application/json'   // for json data

         'content-type' : 'application/x-www-form-urlencoded'    // for form data

       }
     }).then(response).then(result).catch(error);


    @ method : for define HTTP Method
    
    @ body : send Data through that property

    @ header : for define content-type.


  Note: HTTP method format. ✅

    1. read   = get
    2. insert = post
    3. update = put
    4. delete = delete
    4. specific-data-update = PATCH


  # read JSON data  ✅

    Example:  📝

      fetch("./js/dmo.json",{
       method : "GET"    // By Default, NO NEED to define [OPTIONAL]
      })
      .then((response) =>{
          if(response.ok){
              return response.json();
          }else{
              throw new Error("something is Wrong");
          }
      })
      .then (function(result){

          for (const key in result) {
              
              document.querySelector("h2").innerHTML += `User Name : ${result[key].name} User Age : ${result[key].age} <br> `
          }
      })
      .catch( function(error){
      document.querySelector("h2").innerText = error;
      });


  $ insert new JSON Data

    Example:     
      let obj = {
          name : "Sagor",
          age  : 23, 
          
      }
      fetch("https://jsonplaceholder.typicode.com/users",{
          method : "POST",
          body : JSON.stringify(obj) ,
            
          headers :{
              'content-type' : 'application/json'
          }
      })
      .then(response => {
          if(response.ok){
              return response.text();
          }else{
              throw new Error("Something was wrong");
          }
      })
      .then(result =>{
          console.log(result);   // display insert data
      })
      .catch(error => console.log(error));

  
  $ update JSON Data

    Example: 
      fetch('https://jsonplaceholder.typicode.com/posts/100000', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    Note: add id number into JSON url.

  
  $ delete JSON specific data
    Example: 
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });

    Note: add id number into JSON url.

  
  $ patching a resource

    Example:
    
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
     .then((response) => response.json())
     .then((json) => console.log(json));



  $ get data from form & submit it into JSON

   Syntax:
     fetch("json file path",{
        method: "POST" / "PUT"
        body : new FormData(document.getElementByID("myForm")),
        header : {
          'content-type' : 'application/x-www-form-urlencoded'
        }
     }),then(response).then(result).catch(error);

   Note: we can also do it through creating object.



  $ fetch() api into async function
    Example:
      let fun = async () =>{
       
        let response = await fetch("./js/demo.json",{
            method : "GET"
        });
        if(response.ok){
          let promise =  response.json();
          return promise;
        }else{
          throw new Error("something was Wrong")
        }
        
    }

   fun().then(result => console.log(result)).catch(error => console.log(error));


   Note: Here we can also used try-catch() instead of fun().catch();

   Note: can process CRUD procedure. 

   
  @ shortcut
    Example
      let fun = async () =>{
           return (await fetch("./js/demo.json")).json();
      }

      fun().then(result => console.log(result)).catch(error => console.log(error));

    Note: we can also used 1 or 2 then() with fetch() api into async function.


    

# Symbol() Data-Type

  Note: we can pass data inside Symbol() method.

  Example:
    let text = Symbol("hello");
    let num  = Symbol(34);
    let bool = Symbol(true);
    let array = Symbol(["tangil",23]);
    let obj = Symbol({name:"tangil",age: 23});

    let undefine ;
    let x1 = Symbol(undefine);
    console.log(typeof(x1)); 

  Note: Symbol() represent unique value.
   Example:
     let txt = Symbol("hi");
     let txt1 = Symbol("hi");
     console.log(txt == text1)   //false

  
  Note: we can get Symbol() method's content using description property

    Example:
      let txt = Symbol("hi");
      console.log(txt);      //Symbol("hi");
      console.log(txt.description)   //hi
    


# iterators

  Note: iterators used for iterating Array , String (not Object) as like other loop, but full control in our hand.

  Syntax:
    let variable = anything[Symbol.iterator]();
    variable.next();

  Note: next() method return 2 thing
    1. next().value   // iterator value
    2. next().done    // iterator state return boolean value.

  Example:
    let arr = [100,"tangil",200];
    let iter = arr[Symbol.iterator]();
    let result = iter.next();

    document.querySelector("button").addEventListener("click",() =>{
    if(!(result.done)){ 
            document.querySelector("h2").innerText = result.value;
            result = iter.next();
        }else{
            document.querySelector("h2").innerText = "empty";     
        }   
    });

  Note: every next() method iterating next value.


  $ get all data using iterator
    Example:
      let arr = [3,4,5,"tangil"];
      let iter = arr[Symbol.iterator]();
      let result = iter.next();

      while(!(result.done)){
        console.log(result.value);
        result = iter.next();
      }

  
  $ create own iterator
    Example:
      function OwnIterator(arr){
        let arrayIndex = 0;
        return {
         next(){
            if(arrayIndex<arr.length){
                return{
                    value : arr[arrayIndex++],
                    done : false
                }
            }else{
                return{
                    done: true
                }
            }
          }
        }
      }

   let arr = [100,"tangil",200];
   let iter = OwnIterator(arr);
   console.log(iter.next().value);



# Generators  (update version of Iterators)

  Note: generator only work with function

   Syntax:
     function *normalFunction(){
        yield "First";
        yield "Second";
     }

    let iter = normalFunction();
    iter.next();

  Note: yield means paused.
        we can also declare anything with yield.
    Example:
      function *funName(){
         yield "massage";
         yield 23;
         yield {name: "tangil",age: 23};
         yield ["tangil,23"];
         yield* ["tangil,23"];
      }

      let fun1 = funName();
      console.log(fun1.next().value);     // massage
      console.log(fun1.next().value);      // value

  
  
  Note: Generator function return 2 method
     1. next();    // next yield
     2. return();  // from there stop execute all yield



  Example:
    function *funName(num,num2){  
   
      for(let i = 1;i<=10;i++){
          console.log(`${num} x ${i} = ${num * i}`);
      }
      yield "next number";
      for(let i = 1;i<=10;i++){
          console.log(`${num2} x ${i} = ${num2 * i}`);
      }
    }

    let fun1 = funName(2,3);
    fun1.next();
    fun1.next();



  $ create yield using loop
    Example:
      function *funName(){  
        let num = 4;
        while(num<10){
          yield(num++);
        }
      }

      let fun1 = funName();
      console.log( fun1.next().value);
      console.log( fun1.next().value);
      console.log( fun1.next().value);

  

# Error Handling

  Note: we can handle RUNTIME ERROR through try-catch().

  Syntax:
    try{
      // correct codes execute
    }catch() {
      // catch any error from try block
    }

  
  Example:
    try{
      console.log("start of Try"); 🆗

      undefined;

      console.log("end of Try");   ❌
    }catch(error){
      console.log(error)           🆗
    }

  Note: we can declare multiple try-catch() into a JavaScript file.

  NOte: without try-catch(), if anywhere one error was found from here whole file execution was stopped.

  with try-catch(), if any error was found into specific try-catch() block , then catch() function handle it,
  but normal execution continue after only that try-catch() function.


  Note: try-catch didn't work outside from setTimeout() function cause its asynchronous function.
  we can declare try-catch inside setTimeout();

  Example:
    setTimeout(function(){
       try{

       }catch(){

       }
    },1000);


  $ catch(object) 3 types of properties

    1. object.name              // error name
    2. object.massage           // error massage
    3. object | object.stack    // error (name + massage)


  $ common type of Errors in JS
    
    1. ReferenceError    // undefined anything
    2. SyntaxError       // write wrong syntax
    3. TypeError         // declare wrong data-type 
              ... and more.

        
  $ create own Error Object

    Note: we can create anywhere into try{} our own Error Object and throw it in catch() function base on condition.

    Syntax:
     throw new Error ("error description");

    Example:
      try {
         for (let i = 0; i <=10 ; i++) {
         if(i == 5){
            throw new Error(`the number is ${i}`)
          }   
        } 
      } catch (error) {
         console.log(error);
      }


  $ finally{}
    
    Note: try{} or catch(){} it doesn't care finally{} must be execute.

    Example:
      try {
       for (let i = 0; i <=10 ; i++) {
        if(i == 5){
            // throw new Error(`the number is ${i}`)
            console.log(`the number is ${i}`);
         }   
       } 
      } catch (error) {
         console.log(error);
      }finally{
        console.log("i am end");
      }

*/



