export const questions = [{
    'que':'Which of the following is a Hypertext Language?',
    'a':'HTML',
    'b':'CSS',
    'c':'Javascript',
    'd':'Python',
    'correct':'HTML'
},
{
    'que':'What does WWW stands for?',
    'a':'what what what',
    'b':'world wide web',
    'c':'wohoo what when',
    'd':'why when where',
    'correct':'world wide web'
},
{
    'que':'What is the best language in programming?',
    'a':'Python',
    'b':'Javascript',
    'c':'C++',
    'd':'Rust',
    'correct':'Javascript'
}
]

// import { questions } from "./questions.js";

// let heading = document.querySelector(".head");
// let btn = document.querySelector(".submit button");
// let options = document.querySelectorAll(".btn");

// let index = 0;

// heading.innerText = `${index + 1}) ${questions[index].que}`;
// options[0].innerText = questions[index].a;
// options[1].innerText = questions[index].b;
// options[2].innerText = questions[index].c;
// options[3].innerText = questions[index].d;

// index = 1;

// const updateQuestions = () => {
//   heading.innerText = `${index + 1}) ${questions[index].que}`;
//   options[0].innerText = questions[index].a;
//   options[1].innerText = questions[index].b;
//   options[2].innerText = questions[index].c;
//   options[3].innerText = questions[index].d;

//   index++;
// };

// let latestButton ;
// let right = 0,
//   wrong = 0;
// let total = questions.length;
// index = 0
// options.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     if (elem == options[0]) {
//       elem.style.backgroundColor = "black";
//       options[1].style.backgroundColor = "rgb(120, 176, 171)";
//       options[2].style.backgroundColor = "rgb(120, 176, 171)";
//       options[3].style.backgroundColor = "rgb(120, 176, 171)";
//       latestButton = options[0]
//     } else if (elem == options[1]) {
//       elem.style.backgroundColor = "black";
//       options[0].style.backgroundColor = "rgb(120, 176, 171)";
//       options[2].style.backgroundColor = "rgb(120, 176, 171)";
//       options[3].style.backgroundColor = "rgb(120, 176, 171)";
//       latestButton = options[1]

//     } else if (elem == options[2]) {
//       elem.style.backgroundColor = "black";
//       options[0].style.backgroundColor = "rgb(120, 176, 171)";
//       options[1].style.backgroundColor = "rgb(120, 176, 171)";
//       options[3].style.backgroundColor = "rgb(120, 176, 171)";
//       latestButton = options[2]

//     } else if (elem == options[3]) {
//       elem.style.backgroundColor = "black";
//       options[0].style.backgroundColor = "rgb(120, 176, 171)";
//       options[1].style.backgroundColor = "rgb(120, 176, 171)";
//       options[2].style.backgroundColor = "rgb(120, 176, 171)";
//       latestButton = options[3]

//     }
//     if(latestButton.innerText === questions[index].correct){
//         right++
//     }else{
//         wrong++
//     }
//     index++
//     console.log(right);
    
// });


// });


// const reset = () => {
//   options.forEach((elem) => {
//     elem.style.backgroundColor = "rgb(120, 176, 171)";
//   });
// };

// btn.addEventListener("click", () => {
//   updateQuestions();
//   reset();
// //   answer()
// });

