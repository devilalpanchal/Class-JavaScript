// // object creation
// let obj = {
//     key:'devilal',
//     age:'20'
// }

// obj.name
// obj.age

// let name=['devilal',20]

// let obj={}
// let obj=new Object();

// let dog={
//     name:'dommy',
//     legs:'4',

// }
// console.log(dog.legs);
// dog.owner='devilal'
// console.log(dog)
// for Each method
// in there any value in like 6 object in all value
// let student =[
//     {name :'devilal', section: 'bia3',marks:99}
// ]

// student.forEach((item,index,array)=>{
//     console.log(item)
//     console.log(index)
//     console.log(array)
// })

// let num =[2,4,5,65,6,5]
// num.forEach((item)=>{
//     console.log(hello)
// })

// value changes not returning so not store value something work of foreach method?

// let num =[2,4,5,65,6,5]
// let a= num.map((item)=>{
//     //   array[i] = array[i]++
//     console.log(item)
// })

// let num =[2,4,5,65,6,5]
// let a= num.map((item,i,array)=>{
//     //   array[i] = array[i]++
//     // console.log(item)
//     array[i] =item+1
// })
// console.log(num)
// function randomNumber(n){
//       let random=(Math.random()*n-1)+1
//        console.log(random)


// }
// randomNumber(10)
// let random=Math.random()*6
// console.log(random)

// one to seven value in output
// let random1=(Math.random()*6)+1
// console.log(random1)
// to escape after . value
// let num = 1.23;
//  let a= Math.floor(num)
// console.log(a)
// / console.log(num)
// function randomNumber(n){
//       let random=Math.floor((Math.random()*n)+1)
//        console.log(random)


// }
// randomNumber(5)
// let min = 10;
// let max = 20;
// function randomNumber(){
            // let random= Math.floor((Math.random()*b-a)+a)
            // let random= Math.floor((Math.random()*a+10))
            // let random= Math.floor((Math.random()*a+a+1))
      //       let random= Math.floor(Math.random()*(max-min+1))+min
      //        console.log(random)
      // }
      // randomNumber(10,20)
//       let userActivity = {
//             id : 258522558,
//             date : 'January 1,2018',
//             data: {
//                   totalUsers: 51,
//                   Online:12,
//             },
//       }
// console.log(userActivity.id)
// console.log(userActivity.date)
// console.log(userActivity.data)
// console.log(userActivity.data.Online)
// console.log(userActivity.data.totalUsers)
// userActivity.data.Online =50;
// console.log(userActivity.data.Online)








// document.addEventListener('DOMContentLoaded', function () {
//       const questionsContainer = document.getElementById('questions-container');
  
//       const questions = [
//         //   {
//         //       question: "How would you write a function to reverse the order of words in a given sentence?",
//         //       answer: `function reverseWords(sentence) {
//         //                   return sentence.split(' ').reverse().join(' ');
//         //               }`,
//         //        `console.log(reverseWords("devilal")); `
//         //   },
//           {
//               question: "Write a JavaScript program to find the largest element in a nested array.",
//               answer: `function findLargestInNestedArray(nestedArray) {
//                           let largestElement = Number.NEGATIVE_INFINITY;
                      
//                           for (let i = 0; i < nestedArray.length; i++) {
//                               for (let j = 0; j < nestedArray[i].length; j++) {
//                                   if (nestedArray[i][j] > largestElement) {
//                                       largestElement = nestedArray[i][j];
//                                   }
//                               }
//                           }
                      
//                           return largestElement;
//                       }`,
//               example: `const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//                       console.log(findLargestInNestedArray(nestedArray)); // Output: 9`
//           },
        //   {
        //       question: "Write a function to generate the Fibonacci series up to a given number of terms.",
        //       answer: `function fibonacciSeries(n) {
        //                   let fibSeries = [0, 1];
        
        //                   for (let i = 2; i < n; i++) {
        //                       fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
        //                   }
                      
        //                   return fibSeries;
        //               }`,
//               example: `console.log(fibonacciSeries(5)); // Output: [0, 1, 1, 2, 3]`
//           },
//           {
//               question: "Create a JavaScript function to check if a given number is a prime number.",
            //   answer: `function isPrime(number) {
            //               if (number <= 1) return false;
                      
            //               for (let i = 2; i <= Math.sqrt(number); i++) {
            //                   if (number % i === 0) {
            //                       return false;
            //                   }
            //               }
                      
            //               return true;
            //           }`,
//               example: `console.log(isPrime(11)); // Output: true`
//           },
//           {
//               question: "Write a JavaScript function to determine whether a given number is even or odd.",
//               answer: `function isEvenOrOdd(number) {
//                           return number % 2 === 0 ? 'Even' : 'Odd';
//                       }`,
//               example: `console.log(isEvenOrOdd(7)); // Output: "Odd"`
//           },
//       ];
  
//       function createQuestionElement(questionObj) {
//           const questionContainer = document.createElement('div');
//           questionContainer.classList.add('question');
  
//           const questionText = document.createElement('p');
//           questionText.textContent = questionObj.question;
  
//           const answerText = document.createElement('p');
//           answerText.textContent = questionObj.answer;
//           answerText.classList.add('answer');
  
//           const exampleText = document.createElement('p');
//           exampleText.textContent = questionObj.example;
  
//           const revealButton = document.createElement('button');
//           revealButton.textContent = 'Reveal Answer';
//           revealButton.addEventListener('click', function () {
//               answerText.style.display = answerText.style.display === 'none' ? 'block' : 'none';
//           });
  
//           questionContainer.appendChild(questionText);
//           questionContainer.appendChild(answerText);
//           questionContainer.appendChild(exampleText);
//           questionContainer.appendChild(revealButton);
  
//           return questionContainer;
//       }
  
//       function generateQuestions() {
//           questions.forEach((questionObj) => {
//               const questionElement = createQuestionElement(questionObj);
//               questionsContainer.appendChild(questionElement);
//           });
//       }
  
//       generateQuestions();
//   });
  

//   let a = 'devilal';
//   let b= a.split(' ').reverse().join(' ');
//   console.log(b)

// function reverse(str){
//     return 
// }

// let arr = [3,5,8[68,25,25],65,89]
// // let array = arr.flat()
// // console.log(array)
// // let result = Math.max(...array)
// // console.log(result)


// function findLargest(arr){
//     let array = arr.flat()
//     let result = Math.max(...array)
//     console.log(result)
// }
// findLargest(arr)
// function fibo(){
//     let a = 0
//     let b = 1
//     for (let i=2; i<=n;i++){
//         let c= a+b
//         a=b
//         b=c
    
//         if (c<=n){
//         console.log(c)
    
    
//         }
//     }
    
// }

// const inputContainer = document.getElementsByClassName('input')
// console.log(inputContainer[0].placeholder)
// console.log(inputContainer)
// inputContainer = {

// }
// const input = document.getElementById('main')
// console.log(main.className)

// const container = document.getElementsByTagName('div')
// console.log(div)

// const p1
// document.querySelector('.main>p')
// document.querySelectorAll('div')
// REad in dom
// 1 getElementbyid
// 2 getElementbyclassName
// 3 getElementbyTagName
// 4 querySelector
// 5 querySelectorAll
// const mianContainer = document.querySelector('.bmi')
// console.log(mianContainer)

// // // creatElement
// // let div = document.createElement('div')
// // div.className='card';
// // // // div.id = 'card'
// // // div.textContent = 'devilal panchal'
// // let h1 = document.createElement('h1')
// // // let obj={}
// // h1.innerText = 'BMI'
// // console.log(h1)

// let weightInput = document.createElement('input')
// weightInput.placeholder = 'weigth in kg'
// weightInput.type = 'number'
// weightInput.className = 'weight'

//  let heightInput = document.createElement('input')
// heightInput.placeholder = 'height in cm'
// heightInput.type = 'number'
// heightInput.className = 'height'

// console.log(weightInput)

// let button =document.createElement('button')
// button.innerText='submit'

// button.className='btn'
// console.log(button)

// // div.appendChild(h1)
// // div.appendChild(weightInput)
// // div.appendChild(heightInput)
// // div.appendChild(button)

// div.append(h1,weightInput,heightInput,button)
// mianContainer.appendChild(div)


/////////// innerhtml



// mainContainer.innerHTML = `
// <section class="bmi">
// <h1></h1>
// <button onclick="calcbmi">submit</button>
// </section>`


// how to add function in object
// let obj ={}
// obj.sayHello = function(){
//       console.log('hello')
// }
// obj.sayHello = ()=>
//       console.log('hello')

// obj.sayHello()
// obj.sayHello()
// obj.sayHello()


// // for show passward

// const input= document.querySelector('#passward')
// input.type = 'text'
// console.log(input.type);

// function showpassward(){

//       const input = document.querySelector('#passward')
//       let btn= document.querySelector('.btn')
//       // console.log('hello')
//       if (input.type=='possward'){
//             input.type='text'
//             btn.innerText ='hide passward'
//       }
//       else{
//             input.type='passward'
//             btn.innerText ='show passward'

//       }
//       console.log(input.type)

// }
// to change background color

function changeBackgroundColor() {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
      // document.body.style.background = "rgb( ${red} , ${green},${blue} )";

}






