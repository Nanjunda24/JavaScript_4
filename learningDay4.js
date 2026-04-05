//template Literal 

const name="Nanjunda";
const age=21;
const job="Web Development";
const city="Banglore";


//without using template literal
 //it is too taugh so that why no need learn this one ,beacause easiest one there in below that is also same to this 
//In es5and es6 updated

//Using template literals
let html;
function hello(){
    return "Wel come to the javascript";
};

html=`
<ul>
<li>Name:${name}</li>
<li>Age:${age}</li>
<li>Job:${job}</li>
<li>City:${city}</li>
<li>${hello()}</li>
</ul>
`;

document.body.innerHTML=html;

// creating our own to test my knowledge

const firstName=prompt("Enter your name : ");
const lastName=prompt("Enter your last name : ");
const  age2=prompt("Enter ypur age : ");
const job2=prompt("Please specify your job :");
const city2=prompt("Mention your city :");

let render;

function Nanjunda(){
    return "Hello Nanjunda has  already in JavaScript World";
}

render= `
<ul>
<li>Name:${firstName}</li>
<li>LastName:${lastName}</li>
<li>Age:${age2}</li>
<li>Job:${job2}</li>
<li>City:${city2}</li>
<li>${Nanjunda()}</li>
</ul> `;

document.body.innerHTML=render;

//Object Literals

//here person is the object and inside those are properties of objects.

//when using object that diffrencciate with : not = opearator remember example firstName:"Nanjunda" colon are used 

const person={            // parent object
    firstName:"Nanjunda",   // differenciate with comma , for each variable
    age:21,
    
    hobbies:["Listening Music","Playing cricket","Speaking English"],  // we can declare array inside the object.

    address:{                //child object , we can declare object within the object.
        city:"Banglore",     
        State:"Karnataka",
        District:"Manndya",
        Taluk:"nagamangala",
        Village:"Konanuru",
    },
     getBirthYear: function(){  // This is method , When we declare the function inside the object then it is called as method .
        return 2025 -this.age;  //this key word is used to  acces value of age from outside the object .
    },
};

console.log(person.firstName);
console.log(person.age);


let val;

val=person;
console.log(val.hobbies[2]) ; 
console.log(val.getBirthYear()); 



// array inside object, declared inside array

const people=[
    {
        firstName:"Nanjunda",
        age:21,

    },
    {
        firstName:"Charan",
        age:21,
    },
    {
        firstName:"Nanjunda K M",
        age:20,
    },
    
];


//console.log(people[1].age);
N=people.length;
console.log(N);

let i;
for( i=0;i<people.length;i++)
{
    console.log(people[i])
}




// Coditionals and  Comparisions


//if condition 

const num=100;

if (num==100){
    console.log("Hello kido , yes id equal 100");
}


//else condition

const num1=190;

if(num1!=190)   
{
    console.log("Yes your right");
}
    else{
        console.log("No, you are wrong , actually num1 is equal to 190");
    }


//=== equal to always compare data type 

const num3="1000";
if(num3===1000)  //=== opearator also check the data type , this will do two  operation simultaneously ,one is comapare the value  and another is  checking data types of the variable
{
    console.log("Sorry , 1000 is not Number data type  ");
}
else{
    console.log(" 1000 is a not a number it is a string data type ");
}


 let id; //when we assign value to a id variable then only it consider id is there
if( id){
 console.log("Id  is there");
}
else{
    console.log("No, Id found");
}



if( typeof num=="undefined") //Actually the id not defined so that's why the condition become true
{
    console.log("Id  is there ");   //also check if it is not equal
}
else{
    console.log("No id found ");
}



 const number=prompt("Enter a number that should be less than or equal to 100:  ");
if(number>=100){
    console.log ("Hello, kidoo number is greater than the 100");
}
else{
 console.log("Hello, kidoo number is less than 100 ")
}

//else if condition.

const color=prompt("Mention any color name here ");
if(color==="blue"){
    console.log("entered color is blue ");
}
else if(color==="red") 
{
    console.log("Entered  color is red ");
 }
 else if(color==="orange")
  {
    console.log("Entered color is orange");
}
else
     {
    console.log(" your entered wrong color or choice");
    }



//Logical operator

//logiival && operator 
//when we using && operator ,the both condition should be true other wise it execute false statement 

const age1=21  
if(age1>0 && age1<5)
{
    console.log("The person is child");
}

else if(age1>5 && age1<15)
{
    console.log("The person is young boy  ");
}
else if (age1>10 && age1<20 )
{
    console.log("The person is adult ");
}
else if(age1>20 && age1<50)
{
    console.log("The person is elder adult")
}
else{
    console.log("You entered wrong choice");
}

//age asking from the user 
const age_child=prompt("Ennter your age : ");
if(age_child>0 && age_child<5)
{
    console.log("The person is child");
}

else if(age_child>5 && age_child<15)
{
    console.log("The person is young boy  ");
}
else if (age_child>10 && age_child<20 )
{
    console.log("The person is adult ");
}
else if(age_child>20 && age_child<50)
{
    console.log("The person is elder adult")
}
else{
    console.log("You entered wrong choice");
}

//Loogcal  || operator
//either one condition is true then that statement will execute

const age_person=15;
if(age_person>10 || age_person<35)
{
    console.log("You eligible to play");
}
else if(age_person>35 || age_person<100)
{
    console.log("You can play with elders");
}
else{
    console.log("Your are not eligible")
}

//asking age from user using promp() function or method 



const age_people=prompt("Enter yopur age :");
if(age_people>15 || age_people>65)
{
    console.log("You eligible to play");
}
else{
    console.log("Your are not eligible");
}


//ternary operator 
 const id4 =100;

 console.log(id4===100?'yes, id is 100':'No, id is not equal to 100');

 


//outcomes

/*
1.template leteral
2.object literal
3.comparision and conditions
4.if (), if else(),else if()
5.logical operator
6.&& operator
7. || opearator
8.ternary opearator
*/