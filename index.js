// Your code here


const dodger = document.getElementById("dodger")

document.addEventListener("keydown", function (event) { 
    if (event.key ==="ArrowLeft") {
        moveDodgerLeft()
    }

    if (event.key === "ArrowRight") {
        moveDodgerRight()
    }
})






function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "")
    console.log(leftNumbers)
    dodger.style.left = (`${ (parseInt(leftNumbers, 10)) - 10 }px`)
    console.log("Left Arrow is being pressed!")
    
}



function moveDodgerRight() {
    
    
    dodger.style.left = (`${ (parseInt(( dodger.style.left.replace("px", "") ), 10)) + 10 }px`)
    
    

}












































// const dodger = document.getElementById("dodger");

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     if (left > 0) {
//         dodger.style.left = `${left - 1}px`;
//     }
// }

// function moveDodgerRight() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     if (left < 360) {
//         dodger.style.left = `${left + 1}px`;
//     }
// }



// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//         moveDodgerLeft();
//     }
//     if (e.key === "ArrowRight"){
//         moveDodgerRight();
//     }
// });

