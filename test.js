"use strict";
// // function
// function printSum(){
//     let num1 :number = 10
//     let num2 :number= 20
//     let result = num1  + num2
//     console.log(result)
// }
// printSum()
// function sum (Number1:number,Number2:number){
//     let Result = Number1 + Number2
//     console.log(Result)
// }
// sum(54,87)
// sum(87,98)
// //Arrow functions
// let subtract = ()=>{
//     let res = 9-4
//     console.log(res)
// }
// subtract()
// //variable scope
// let num1 = 40;
// function add (){
//     let num1 = 34;
//     console.log(num1)
// }
// add()
// console.log(num1)
// var num1 :number = 30;
// var num1 :number = 30;
// console.log(num1)
// let num2:number=2
// // num2=4
// console.log(num2)
// //objects
// let person1:{
//     name: string;
//     fatherName: string;
//     age :number;
// }={
//     name : "Ali",
//     fatherName:"abc",
//     age:35
// }
// console.log(person1)
// //type alias
// type personType= {
//     name: string
//     age:number
//     gender:string
// }
// let Person1:personType = {
//     name: "Hamzah",
//     age:20,
//     gender:"Male",
// }
// console.log(Person1)
// //type literal
// let trafficLight :"red" | "yellow" | "green"
// trafficLight = "red" ,
// trafficLight = "yellow",
// trafficLight="green"
//         // green is assign 
// console.log(trafficLight)
// //type union
// let myBag :string | number
// myBag = "Sunglasses"
// myBag = 4
// console.log(myBag)
// //type intersection
// type teacher = {
//         name :string
//         roll:string
// }
// type student = {
//         name: string
//         rollNum:number
// }
// let both: student & teacher ={
//         name:"Ali",
//         rollNum :1234,
//         roll: "student"
// }
// console.log(both)
// //Arrays
// let fruit:string[] = ["Apple", "Banana" , "Orange" , "Grapes"]
// // console.log(fruit[3])
// // console.log(fruit.length)
// console.log("original array" , fruit)
// //pop method delete element from last
// fruit.pop();
// console.log("pop" , fruit)
// //pop method add element in last
// fruit.push("kiwi");
// console.log("push" , fruit)
// //shift method delete element from start
// fruit.shift();
// console.log("Shift" , fruit)
// //unshift method add element in start
// fruit.unshift("Strawberry")
// console.log("unshift" , fruit);
//slice method: 
//      ye on elements ko show krta h jo hm ne aaray me diye hoty hen original array ko      change nhi krta
// let fruits:string[] = ["Apple", "Banana" , "Orange" , "Grapes"]
// console.log("original array" , fruits)
// console.log("slice method" , fruits.slice(1,3));
// console.log(fruits);
// //splice : insert and delete elements and change the original array
// let fruits:string[] = ["Apple", "Banana" , "Orange" , "Grapes"]
// console.log("original array" , fruits)
//            //go to  // kitny elements ko delete krna h   //add element
// fruits.splice(2,      3, "Mango" ,                   "Pineapple")
// console.log("after splice" , fruits);
// // tupple: data type array me dety hain
// let FruitsTupple:[string,number,string,string] = ["Apple", 4 , "Orange" , "Grapes"]
// console.log(FruitsTupple);
// // FruitsTupple.push("watermelon")   it is bad practice but kr skty hain
// console.log(FruitsTupple);
// console.log(FruitsTupple[3]);
// enum colour {
//         red,//0
//         yellow= 4, //we can change the index number
//         blue,//5
//         green//6
// }
// console.log(colour.red)//0
// console.log(colour.blue)//5
// console.log(colour[2])//6
// console.log(colour["yellow"]) //4
// let trafficLight :colour = colour.blue
// console.log(trafficLight);
// //any & unknown
// let num1 : unknown;     //provides type safety  // good practice
// num1 = "abc";
// num1 = 56;
// num1 = true
// let num2 : any;
// num2 = "abc"; //bad practice
// num2 = 56;
// num2 = true
