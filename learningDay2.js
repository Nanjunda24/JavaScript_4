//Day2 String and String Method

  const firstName="Nanjunda";
const lastName="K M";
const age = 21;
const str = "Hello there my name is Nanjunda";
const tags = "Web dasign ,  Web development , Programming";


let val; // variable declaration we can use how many  times we wants
 // concatenation
 val=firstName + lastName; // Nanjundak ,here there is no space between first name and last name, to get space we use "" quotes
 val= firstName +" "+lastName;//output: Nanjunda K M

 //Append  one mroe method 
 val="Nanjuna";
 val += "K M";// is equal to val=val+"K M"

 val="Hello my name is " +firstName+ " and my age is "+age; //output:Hello my name is Nanjunda K M and my age is 21

 //Escaping
 val= "That's awesome, I can't wait";

 // length
  val=firstName.length; //output:8;

  //concat
  val=firstName.concat(" ",lastName);

  //change case
  val=firstName.toUpperCase();
  
  val=firstName.toLowerCase();

  // indexOf()
  val=firstName.indexOf("a"); //output:1

  val=firstName.lastIndexOf("a"); //output:7 //count from last

  //charAt

  val=firstName.charAt(0); //  output: N ,it defines which character there in that particular index

  //substring 
  val=firstName.substring(0,4); //output: Nanj ,start with 0 index and end with index 4 ,substring method defines fisrt how much character you want from where to where.
                               //it divides the string
                           
  //slice ,perform the same as substring()

   val = firstName.slice(0,5);// it is also divides the string

   //split()

   val=str.split();

   val=tags.split(","); //output: ['Web dasign ', '  Web development ', ' Programming']//which divides the word with taking reference (,) comma.
   
   //replace()

   val= firstName.replace("N","C") ;//output:Nanjunda, Canjunda.

   val = str.replace("Nanjunda","Charan");//output:Hello there my name is Charan.
   
   //includes()

   val=str.includes("Nanjunda"); // output:true //includes() methid chexk whethervthe given word us there in that variable or not
   val = str.includes("Charan");// output:false
    val=str.replace("there","here") //replace only works only for  string means not works for Number

   console.log(val); 



   //Numbers and MathObject 

   const num1=100;
   const num2=50;

    let value;

    value=num1+num2; //addition

    value=num1-num2; //substraction

    value=num1*num2; //multiplication

    value=num1/num2;  //Division

    value=num1%num2; //modulous or remainder

    //math object 

    value=Math.PI;

    value=Math.round(2.989);

    value=Math.ceil(2.2); // output: 3  // if you give any decimal  number that will show the next value mean examole=2.1 output will be 3.

    value=Math.floor(4.5); // output:4

    value=Math.sqrt(8); // output :2.8284 something

    value=Math.pow(8,2); // output :64 , first one number should be number then second one will be power of that number.

    value=Math.min(12,3,4,56,7,90); // output :3

    value=Math.max(12,34,5,67,89,90,4);

    value =Math.random() *20 +1;  //rondom function generate number 0 to 20 but +1 is used because for range 0 to 20 

    value=Math.floor(Math.random() *20  ); //  it is used to get only number without decimal value

    console.log(value);


//outcomes :

/*

1.String 
2.string operation 
3.math objects

*/