console.log("This is functions in js");
function greet(name, greettext="Greetings from JavaScript") {
  let name1 = "Name1";
  console.log(greettext + "" + name);
  console.log(name + "is a good boy");
}
function sum(a,b,c) {
  let d=a+b+c;
  return d;
  }
let name = "Harry";
let name1 = "shubam";
let name2 = "rohan";
let name3 = "sagar";
let greettext = "Good Morning";
greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3);
// let returnval=greet(name3);
// console.log(returnval);
let returnval=sum(1,2,3);
console.log(returnval);
