// Arrays Concept Very important
//Array elements always stored in Square brackets []. and differenciate with , commas

const number=[12,34,56,75,43,21,34,89,87];

// Another method of creating array 

const number2=new Array(12,87,89,90,78,65,54,78);


const fruit =["Apple","Banana","Cherry","Orange"];

//we can store multiple data types nto the array

const mixed=[12,"Apple","Orange",true,"hello",null, undefined];

let val;

//get the array length

val = number.length;

 //output:9

//check it's an array

val=Array.isArray(number);

//get a single value
val=number[0]; //output:12

//insert or replace 

number[3]=100;  // it will strore the 100 element at the index 3

//find the index of the element 

val =number.indexOf(100); //output:3

//Mutatting array
//add number to the end of the array
number.push(250);

//add to the front of the array 
number.unshift(20);//unshift() is used to add front  to the array

//remove the last number from the array
number.pop();

//remove the  first number from the array
number.shift();

//splicing
number.splice(1,1); //splice point out the which index need to delete 
//fist number denotes the index ,second number denotes the how many number you are going to  delete from that index.


//reverse the array

console.log(number);

val=number.reverse();

//concat array
val=number.concat(number2);

//sort the array
val=number.sort();
val=fruit.sort();

val=number.sort(function(x,y){
    return x - y; //ascending order
});
val=number.sort(function(x,y){
    return y-x; //Decending order 
});
console.log(val);

//out comes 
/*
 1.Array daclaration 
 2.array element accessing
 3.Array element adding to the array
 4.some array operations

 */
 




 