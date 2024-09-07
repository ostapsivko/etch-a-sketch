let container = document.querySelector(".container");
let grid = createGrid(4);
grid.forEach(element => {
    container.appendChild(element);
});

let shaker = document.querySelector(".shaker");
shaker.addEventListener("click", () => {
    let sizeInput = prompt("Please enter grid size up to 100", 10);
    let size = Number(sizeInput)
    if(size > 100) {
        size = 100;
    }

    if(size < 0) {
        size = 1;
    }

    let newGrid = createGrid(size);
    container.replaceChildren();
    newGrid.forEach(element => {
        container.appendChild(element);
    });
});

function createGrid(size) {
    let divs = new Array(size);

    for(i = 0; i < size*size; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });
        divs[i] = div;
    }

    return divs;
}