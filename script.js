let container = document.querySelector(".container");

function squareCreation(sze = 16){
    for (let i = 0; i < sze * sze; i++){
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "gold";
        newDiv.style.border = "solid"
        newDiv.style.borderWidth = "1px"
        newDiv.style.width = `${80 / sze}vh`;
        newDiv.style.height = `${80 / sze}vh`;
        container.appendChild(newDiv);
    }
}

squareCreation();