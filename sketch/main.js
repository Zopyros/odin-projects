
function createContainer(size){
    

let contain = document.querySelector(".contain");
contain.style.gridTemplateColumns = `repeat(${size},1fr)`;
contain.style.gridTemplateRows = `repeat(${size},1fr)`;

let numDivs = size * size

for (let i=0;i<numDivs;i++){
    let div = document.createElement("div");
    div.style.backgroundColor ="blue";
    contain.insertAdjacentElement("beforeend",div)

}
}
createContainer(16);