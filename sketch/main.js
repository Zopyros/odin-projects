
document.addEventListener("DOMContentLoaded",function(){

    createContainer(16)
let btn = document.querySelector('#popup');
btn.addEventListener("click", function(){

    let size = getSize()
    createContainer(size)

})


})




function createContainer(size){
    

let contain = document.querySelector(".contain");
contain.style.gridTemplateColumns = `repeat(${size},1fr)`;
contain.style.gridTemplateRows = `repeat(${size},1fr)`;

let numDivs = size * size

for (let i=0;i<numDivs;i++){
    let div = document.createElement("div");
    div.addEventListener("mouseover",function(){
        div.style.backgroundColor = "black"   
    })
    contain.insertAdjacentElement("beforeend",div)

}
}

function getSize(){
    let input = prompt("What Size will you choose?");
    let message = document.querySelector("#message");
    console.log(message)
    if(input ==""){
        message.innerHTML = "please provide a number";
  
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Please reenter a valid number from 1 - 99";
        
    }
    else{
        message.innerHTML = `You chose ${input} X ${input}`;
        return Number(input)
    }

}

function reset(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor ="white")
}

