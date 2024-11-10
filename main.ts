// 2-RASMDAGI MASALALAR>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 1-masala------------------------------>
// let newValue:string | null = prompt("Qiymat kiriting")
// let list:string[]=[]
// function collectList(value:string | null):void {
//     if (value){
//         list.push(value)
//     }
// }
// collectList(newValue)
// console.log(list)


// 2-masala------------------------------>
// let numberList:number[]=[22,44,66,99]
// function findMaxNumber(arr:number[]):number{
//     let maxNum:number=arr[0]
//     for(let num of arr){
//         if(num>=maxNum){
//             maxNum=num
//         }
//     }
//     return maxNum
// }

// const result:number=findMaxNumber(numberList)
// console.log(result)



// 3-masala------------------------------>
// let value:string | null =prompt("So'z kiriting...")
// let list:string[]=["Salom","Nima gap"]

// function findValue(newValue:string | null, arr:string[]):void{
//     let count:number=0
//     arr.forEach((item:string)=>{
//         if(item==newValue){
//             count++
//         }
//     })
//     console.log(count> 0  ? true:false);
// }
// findValue(value,list)



// 4-masala------------------------------>
// function filterEvenNumbers(numbers: number[]): number[] {
//     return numbers.filter((number) => number % 2 === 0);
// }

// const numbersArray = [5,10,22,24,45,14,60];
// const evenNumbers = filterEvenNumbers(numbersArray);
// console.log(evenNumbers);




// 5-masala------------------------------>
// const numbers: number[] = [1, 2, 3, 4, 5];

// let sum: number = 0; 

// for (let i: number = 0; i < numbers.length; i++) {
//   sum += numbers[i]; 
// }

// console.log("Sum:", sum);



// 6-masala------------>kinro ishlab qo'yaman xozi ideya kemayapti



// 7-masala------------------------------>
// type User = {
//     id: number;
//     name: string;
//     address: string;
//   };
  
//   const users: User[] = [
//     {
//       id: 1, 
//       name: "Shaxzoda", 
//       address: "Bekobod"
//      },

//     { 
//       id: 2, 
//       name: "Nodira", 
//       address: "Toshkent" 
//     },

//     { 
//       id: 3,
//       name: "Anora", 
//       address: "Angren"
//      },

//     { 
//       id: 4,
//       name: "Durdona",
//       address: "Chirchiq" 
//     },

//     { 
//       id: 5, 
//       name: "Lola", 
//       address: "Samarqand" 

//     },

//     {
//       id: 6, 
//       name: "Xadicha", 
//       address: "Buxoro"
//      },

//     { 
//       id: 7, 
//       name: "Muslima",
//       address: "Andijon"     
//     },
//     { 
//       id: 8, 
//       name: "Nilufar",
//       address: "Qashqadaryo"    
//     },

//     { 
//       id: 9, 
//       name: "Sevara",
//       address: "Surxandaryo"     
//     },

//     { 
//       id: 10, 
//       name: "Dilnoza",
//       address: "Andijon viloyati" 
//     }
//   ];
  
//   function getUserAddressById(id: number, userArray: User[]): string | undefined {
//     const user = userArray.find((user) => user.id === id);
//     return user ? user.address : undefined;
//   }
  
//   const address = getUserAddressById(1, users);
//   console.log("User's address:", address);





// 8-masala------------------------------>
// type User = {
//     id: number;
//     name: string;
//     address: string;
//   };
  
//   function getUserNames(users: User[]): string[] {
//     const names: string[] = [];
  
//     for (let i = 0; i < users.length; i++) {
//       names.push(users[i].name);
//     }
  
//     return names;  
//   }
  
//   const users: User[] = [
//     { id: 1, name: "Shaxzoda", address: "Toshkent" },
//     { id: 2, name: "Zaxro", address: "Sanarqabd" },
//     { id: 3, name: "Sumayya", address: "Buxoro" }
//   ];
  
//   const namesArray = getUserNames(users);
//   console.log("User names:", namesArray);





// 9-masala------------------------------>ishlolmadim



// 10-masala------------------------------>
// type NumberArray = number[];

// function splitEvenOdd(numbers: NumberArray): { even: number[], odd: number[] } {
//   const evenNumbers: number[] = [];
//   const oddNumbers: number[] = [];

//   numbers.forEach(num => num % 2 === 0 ? evenNumbers.push(num) : oddNumbers.push(num));

//   return { even: evenNumbers, odd: oddNumbers };
// }

// const numbers: NumberArray = [-5, -8, 2, 3, 7, -4, 6, 0];

// const result = splitEvenOdd(numbers);
// console.log("Even numbers:", result.even);
// console.log("Odd numbers:", result.odd);






// 1-RASMDAGI MASALALAR>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// 1-masala------------------------------>
// function reverseNumber(number: number): number {
//     return parseInt(number.toString().split('').reverse().join(''));
//   }
  
//   const result = reverseNumber(127);
//   console.log(result); 





// 2-masala------------------------------>
// type NumberType = number;

// function factorial(number: NumberType): NumberType {
//   let result: NumberType = 1;

//   for (let i = 1; i <= number; i++) {
//     result *= i;
//   }

//   return result;
// }

// const result = factorial(7);
// console.log(result);







// 3-masala------------------------------>





// 4-masala------------------------------>






// 5-masala------------------------------>







// 6-masala------------------------------>







// 7-masala------------------------------>






// 8-masala------------------------------>



  