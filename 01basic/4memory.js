/* primitive data type uses stack to store the data
   non primitive data type uses heap to store the data


   stack ->give the copy of that 
   heap->give the refrence the value */

   let myName= "priyanshugupta"
   
   let anotherName=myName

   anotherName="gupta"

   console.log(myName);
   console.log(anotherName);  // here it changes in copy not in original (stack)



   let userOne={
    email : "user.com",
    upi:8716
   }
   let userTwo=userOne

   userTwo.email="prianshu.com"
   console.log(userOne.email);
   console.log(userTwo.email);
   
   
   
   