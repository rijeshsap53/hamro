// var mybutton = document.getElementById("go_up");

// window.onscroll = function() {
    
//     scrollFunction();

// }

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

document.getElementById("nav").style.visibility="visible";

// classswork
// let is camel casing
// let rijesh_marks = 10;
// let sabin_marks= 0;

// // || this is used for or
// // && is used for and
// // ! is used for not


// // this is or ko example
// if(rijesh_marks==0 || sabin_marks==0){
//   console.log("One Of The Mask Is 0");
// }else{
//   console.log("Mathe ko code run bhayena kenake expression flase theyo");
// }

// // this is and ko example
// if(rijesh_marks==0 && sabin_marks==0){
//   console.log("This is and logical operator");
// }else{
//   console.log("Mathe ko code run bhayena kenake expression sabay flase hunu parxa");
// }

// // this is not ko example
// if(rijesh_marks!=10){
//   console.log("This Is Not Logical Operator");
// }else{
//   console.log("Mathe ko code run bhayena kenake expression flase theyo");
// }

// hw

let d_a= (97+112+101)/3;
let k_a= (109+95+123)/3;

console.log(`Team Dolphins Average Score Is ${d_a}`)
console.log(`Team Koalas Average Score Is ${k_a}`)

if(d_a>k_a && d_a>100){
  console.log(`Team Dolphin Wins`)

}else if(k_a>d_a && k_a>100){
  console.log(`Team Koalas Wins`)

}else if(k_a===d_a && (k_a && d_a)>100){
  console.log(`Draw Match`)

}else{
  console.log("No Teams Win The Match")
}







    




