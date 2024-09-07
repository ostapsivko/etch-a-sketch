let divs = new Array(16);
let container = document.querySelector(".container");

for(i = 0; i < 16; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
    divs[i] = div;
    container.appendChild(div);
}
