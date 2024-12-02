//5.write a javascript prg to classify age groups.
// let age=2;
// if(age<=12){
//     console.log("age is child");  
// }else if(age>12 && age<=18){
//     console.log("age is teenager");
// }else if(age>18 && age<=58){
//     console.log("age is younger");
// }else if(age>=58){
//     console.log("age is old");
// }else{
//     console.log("invalid age");
// }

//---------------------------------------------------------------------------------------------------------------------------------

//3.write a javascript prg to find rate based on year and calculate total interet using nested if 
// formula=(i=prn/100)principal amount(p),interest rate,no of years(n)
// let  P=1000,N = 4,R;           
// if (N >3 && N<= 5) {
//     R = 3;
// } else if (N >5 && N<=8) {
//     R = 5;
// } else if (N >8 && N<=12) {
//     R = 12;
// }
//  else 
// {
//     R = 15;
// }
// I = (P * R * N) / 100;
// console.log("principal amount :" + P);
// console.log("no of year :" + N);
// console.log("interest rate :" + R + "%");
// console.log("total interest :" + I);


//-------------------------------------------------------------------------------------------------------------------------------------

//4. write a javascript prg to check voting eligibility.
//enter any age
// let age;
// if(age>=18){
//     console.log("vote is eligible");
// }else{
//     console.log("invalid vote")
// }

//----------------------------------------------------------------------------------------------------------------------------------

//2.write a javascript prg to print season according user input using switch case.
//(1->4 for winter,5->8 for summer,9->12 monsoon,and add any no print invalid season)
// let season=13;
// switch(season){
//     case 1:
//     case 2:
//     case 3:
//     case 4: 
//     console.log("season is winter");
//     break;  
//     case 5:
//     case 6: 
//     case 7:
//     case 8: 
//     console.log("season is summer");
//     break;
//     case 9:
//     case 10: 
//     case 11:
//     case 12:
//     console.log("season is monsoon");
//     break;    
//     default:
//     console.log(" invalid season ");
// }

//---------------------------------------------------------------------------------------------------------------------------------

//1.enter electricity unit and  calculate amt to pay 
// 1 50 units,rs:1/unit
// 2 100 units,2/unit
// 3 100 units,3/units
// units above 150 units
// surcharge 20% of total bill 20/100 0.2
// add amt?
// let  units = 11,amount = 12; 
// if (units > 50) 
//     {
//     amount += (units - 50) * 2;
//     units = 50;
// }
// if (units > 150) 
//     {
//     amount += (units - 150) * 3;
//     units = 150;
// }
// if (units > 250)
//     {
//     amount += (units - 250) * 4;
//     units = 250;
// }
// amount += units * 1;
// // Add 20% surcharge if total units  150
// if (units > 150) {
//     amount += amount * 0.2;
// }
// console.log("Total bill: rs " + amount);