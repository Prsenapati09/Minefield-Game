// random box generate
function boxfind() {
  const boxes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25,];
  let boom = "box";

  for (let i = 0; i < 1; i++) {
    boom += boxes[Math.floor(Math.random() * 24)];
  }
  return boom;
}
let value = boxfind();


 // dinymic div
 let overdiv = document.createElement("div");
 overdiv.setAttribute("id", "over");

 let main = document.querySelectorAll("#main div");

let score = document.getElementById("score");
let highscore = document.getElementById("highscore");
let counter = 0;
let checkingArray = [];

// Show high score at game start
let storedHighScore = localStorage.getItem("highscore") || 0;
highscore.style.display = "block";
highscore.textContent = `High Score : ${storedHighScore}`;

main.forEach((e) => {
  e.addEventListener("click", (e) => {
    let selectBox = e.target.id;
    let targetbox = document.getElementById(selectBox);

    if (checkingArray.includes(selectBox)) {
      return; // Exit early if box was already clicked
    }
    checkingArray.push(selectBox);

    if (selectBox == value) {
      targetbox.style.backgroundColor = "red";
      targetbox.textContent = " ";
      document.body.appendChild(overdiv);

      // Save high score if it's greater than stored value
      if (counter > storedHighScore) {
        localStorage.setItem("highscore", counter);
        highscore.textContent = `High Score : ${counter}`;
      }

      setTimeout(() => {
        location.reload();
      }, 1000);
    } else {
      targetbox.style.backgroundColor = "green";
      targetbox.textContent = " ";
      score.style.color = 'orange';
      counter++;
      score.textContent = `Score : ${counter}`;
    }
  });
});

// //functional part
// let main = document.querySelectorAll("#main div");

// let score =document.getElementById("score")
// let highscore =document.getElementById("highscore")
// let counter = 0

// let checkingArray = [];
// main.forEach((e) => {
//   e.addEventListener("click", (e) => {
//     let selectBox = e.target.id;
//     let targetbox = document.getElementById(selectBox);
    
//     if (checkingArray.includes(selectBox)) {
//       return; // Exit early if box was already clicked
//     }
//     checkingArray.push(selectBox);

//     if (selectBox == value) {
//       targetbox.style.backgroundColor = "red"
//       targetbox.textContent = " "
//       document.body.appendChild(overdiv)
//       setTimeout(()=>{
//         location.reload()
//       },1000)
      
//       // Save high score if it's greater than stored value
//       let storedHighScore = localStorage.getItem("highscore") || 0;
//       if (counter > storedHighScore) {
//         localStorage.setItem("highscore", counter);
//       }
      
//       // Show high score
//       highscore.style.display = "block"
//       highscore.textContent = `High Score : ${localStorage.getItem("highscore")}`

//     }
//     else{
//       targetbox.style.backgroundColor = "green"
//       targetbox.textContent = " "
//       score.style.color='orange'
//       counter ++
//       score.textContent=`Score : ${counter}`
//       }
//   });
// });

// reset button

let reset = document.getElementById("reset-btn");
reset.addEventListener("click", () => {
  location.reload();
});

//light button
let lightbtn = document.getElementById("light-btn");
let resetbtn = document.getElementById("reset-btn");
let light = document.getElementById("light");
let dark = document.getElementById("dark");
let body = document.querySelector("body");

let small = document.querySelector(".small");

let thems = dark;

light.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  dark.style.display = "block";
  light.style.display = "none";
  small.style.color = "black";
  resetbtn.style.color = "black";
});
dark.addEventListener("click", () => {
  body.style.backgroundColor = "#383838";
  light.style.display = "block";
  dark.style.display = "none";
  small.style.color = "white";
  resetbtn.style.color = "white";
});

