// 1. What are the results of these expressions? (answer first, then use console.log() to check)
// console.log("" + 1 + 0);     //10
// console.log("" - 1 + 0);     //-1
// console.log(true + false);   //1
// console.log(!true);          //false
// console.log(6 / "3");        //2
// console.log("2" * "3");      //6
// console.log(4 + 5 + "px");   //9px
// console.log("$" + 4 + 5);    //$45
// console.log("4" -2);         //2
// console.log("4px" - 2);      //NaN
// console.log(" -9 " + 5);     // -9 5
// console.log(" -9 " -5);      //-14
// console.log(null + 1);       //1
// console.log(undefined + 1);  //NaN
// console.log(undefined == null);  //ture
// console.log(undefined === null); //false
// console.log(" \t \n" -2);    //-2
// 
// 2.Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
// let three = "3"
// let four = "4"
// let thirty = "30"
// 
// 
// 3.what is the value of the following expressions?
// 
// let addition = three + four
// console.log(addition);     //34  
// let multiplication = three * four
// console.log(multiplication);  //12 
// let division = three / four
// console.log(division);       //0.75
// let subtraction = three - four
// console.log(subtraction);    //-1
// 
// 
// let lessThan1 = three < four
// console.log(lessThan1);     //ture
// let lessThan2 = thirty < four
// console.log(lessThan1);     //ture
// 
// 4.Which of the following console.log messages will print? Why?
// if (0) console.log('#1 zero is true')      //No
// if ("0") console.log('#2 zero is true')    //#2 zero is true
// if (null) console.log('null is true')      //No
// if (-1) console.log('negative is true')    //negative is true
// if (1) console.log('positive is true')     //positive is true
// 
// 4. Rewrite this if using the ternary/conditional operator '?'. 
//    Test it with different values for a and b. What does the ‘+=’ do?
// let a = 3, b = 7;
// let result = `${a} + ${b} is `;
// 
// 
// if (a + b < 10) {
//   result += 'less than 10';
// } else {
//   result += 'greater than 10';
// }
// console.log(result);           //3+7 is greater than 10
// 
// 
// 5. Rewrite the following function using: 
//   a) function expression syntax, and b) arrow function syntax. 
//   Test each version to make sure they work the same.
// const getGreeting = function(name) {
    // return 'Hello ' + name + '!';
// }
// console.log(getGreeting("KIM"));        //Function Expression Hello KIM!

//      //Function Arrow Hello KIM!     
// 
// 
// /* 6. a) Complete the inigo object by adding a lastName property and including it in the greeting. 
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597. 
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator. */
// const westley = {
    // name: 'Westley',
    // numFingers: 5
    // }
    // const rugen = {
    // name: 'Count Rugen',
    // numFingers: 6
    // }
    // const inigo = {
    // firstName: 'Inigo',
    // greeting(person) { 
    // let greeting = `Hello, My name is ${this.firstName} ${person.name}. `;
    // console.log(greeting + this.getCatchPhrase(person));
    // },
    // getCatchPhrase(person) {
        // return 'Nice to meet you.';
    // }
// }
// 
// inigo.greeting(westley)
// inigo.greeting(rugen)

// /* 7. The following object represents a basketball game and keeps track of the score as the 
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of 
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to 
// increment it, similar but separate to the score. Include the foul count in the half time and 
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.*/board JavaScript

// const basketballGame = sum
// {
// {function fp(fTry, fPoint) {
    // return fTry*fPoint;
// }
// let result1 = fp(3, 1);
// console.log(fp(3, 1));
// }
// 
// {function twp(twTry, twPoint) {
    // return twTry*twPoint;
// }
// let result2 = twp(10, 2);
// console.log(twp(10, 2));
// }
// 
// {function thp(thTry, thPoint) {
    // return thTry*thPoint;
// }
// let result3 = thp(3, 3);
// console.log(thp(3, 3));
// }
// 
// {function sum(fp, twp, thp) {
    // return fp + twp + thp;
// }
//  
// let result = sum(3, 20, 9);
// console.log("Halftime score is " + sum(3, 20, 9));
// }
// }
 
// 
// 8.modify each of the above object methods to enable function chaining as below:
    // basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
// 
// /* The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for…in loop to access 
// and print to the console each of those object properties and their values. Test it using 
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function 
// again with the new object. */

// const sydney = {
    // name: 'Sydney',
    // population: 5_121_000,
    // state: 'NSW',
    // founded: '26 January 1788',
    // timezone: 'Australia/Sydney'
    // };
// console.log(sydney.name);   



// /*9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport 
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they 
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the 
// originals remain independent*/

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// console.log(teamSports);
// 
// let dog1 = 'Bingo';
// console.log(dog1);
// 
// let dog2 = "Ruby";
    // dog2.name = "ruby";
    // dog2.gender = "mail;"
    // dog2.sayHello =function() {
        // console.log("Hi I am " + this.name + "and I am " + this.gender);
    // }
// console.log("Ruby");
// console.log(dog2);
// 
// dog2.sayHello();
// 
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// console.log(cat1);
// 
// let emptyObject = {};
// console.log(typeof emptyObject);
// 
// let cat2 ={
    // name: "milky",
    // gender: "male",
    // sayHello: function() {
        // console.log("Hi My name is " + this.name);
    // }
// };
// 
// console.log(typeof cat2);
// console.log(cat2);
// 
// cat2.sayHello();

// /*10. The following constructor function creates a new Person object with the given name and 
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate 
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a 
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true 
// if the person is old enough to drive. */
// 

// function Person(name, gender) {
    // this.name = name;
    // this.gender = gender;
    // this.sayHello = function(){
    //   console.log('Hi! My name is ' + this.name);
    // };
//   }
//   
// 
//   var person1 = new Person('Lee', 'male');
//   var person2 = new Person('sara', 'female');
//   
//   console.log('person1: ', typeof person1);
//   console.log('person2: ', typeof person2);
//   console.log('person1: ', person1);
//   console.log('person2: ', person2);
//   
//   person1.sayHello();
//   person2.sayHello();


//   function Person(name, gender) {
    // var married = true;         // private
    // this.name = name;           // public
    // this.gender = gender;       // public
    // this.sayHello = function(){ // public
    //   console.log('Hi! My name is ' + this.name);
    // };
//   }
//   
//   var person = new Person('Lee', 'male');
//   
//   console.log(typeof person); // object
//   console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }
//   
//   console.log(person.gender);  // 'male'
//   console.log(person.married); // undefined

// let person = {
    // 'first-name': 'Ung-mo',
    // 'last-name': 'Lee',
    // gender: 'male',
    // 1: 10,
    // function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
//   };
//   
//   console.log(person);

