//console.log("shravna");

//let boxes = document.getElementsByClassName("box");
//console.log(boxes);

//boxes[0].style.backgroundColor = "red";

 /*document.getElementById("sh").addEventListener("click", function() {
    console.log("Button clicked");
    boxes[1].style.backgroundColor = "blue";
});  */

//using querySelectorAll 
// what is the difference between getElementsByClassName and querySelectorAll
// getElementsByClassName returns a live HTMLCollection, while querySelectorAll returns a static NodeList.  

let BOXES = document.querySelectorAll(".container ")[0].children;
// This will select all children of the element with class "container"
console.log(BOXES);


function getRandomColor() {
       
    let val1=(0+Math.random() * 255);
    val1 = Math.ceil(val1);
    let val2=(0+Math.random() * 255);
    val1 = Math.ceil(val2);
    let val3=(0+Math.random() * 255);
    val1 = Math.ceil(val3);
    
    return `rgb(${val1}, ${val2}, ${val3})`;
    }
   

    
    Array.from(BOXES).forEach(e => {
        e.style.backgroundColor = getRandomColor();
        e.style.color = getRandomColor();
    });
