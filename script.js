let container = document.querySelector(".container");
let reset = document.querySelector(".reset");

function squareCreation(sze = 16){
    for (let i = 0; i < sze * sze; i++){
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "gold";
        newDiv.style.outline = "1px solid black"
        newDiv.style.width = `${90 / sze}vh`;
        newDiv.style.height = `${90 / sze}vh`;

        let backgroundChange = function(e) {
            let getRandomInt = (max) => Math.floor(Math.random() * max);
            e.target.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
            e.target.removeEventListener("mouseover", backgroundChange);
        };

        newDiv.addEventListener("mouseover", backgroundChange);
        container.appendChild(newDiv);
    }
}

reset.addEventListener("click", () => {
    let newSize = prompt("Enter new side size (Max = 100): ");
    newSize = (+newSize <= 100) ? +newSize : 100;
    container.textContent = "";
    squareCreation(newSize);
});

squareCreation();