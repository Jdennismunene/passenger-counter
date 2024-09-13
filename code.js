// document.getElementById("count").innerText = 5

// initial the count as 0
// listen for clicks in the increment button
// increment the count variable when the button is clicked
// change the count in the html to reflect the new count

let saveEl = document.getElementById("save-el")
let Counter = document.getElementById("count")
let count = 0;

console.log(saveEl)

function increment(){
    count = count + 1;
    Counter.textContent = count;
}


function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    Counter.textContent = 0
    count = 0
}





