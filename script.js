let container = document.querySelector(".container");
createGrid(4);

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

    createGrid(size);
});

function createGrid(size) {
    let dimensions = 840 / size;
    let percent = 100 / size;
    container.replaceChildren();

    for(i = 0; i < size*size; i++) {
        let div = document.createElement("div");
        div.style.height = `${dimensions.toString()}px`;
        div.style.width = `${percent.toString()}%`;
        div.style.opacity = "0.1";

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = generateRandomColor();
            
            let opacity = Number(div.style.opacity);
            
            if(opacity < 1) {
                opacity += 0.1;
            }

            div.style.opacity = `${opacity.toFixed(2)}`;
        });
        container.appendChild(div);
    }
}

function generateRandomColor() {
    let r = randomBetween(0, 256);
    let g = randomBetween(0, 256);
    let b = randomBetween(0, 256);

    return `rgb(${r} ${g} ${b})`;
}

function randomBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}