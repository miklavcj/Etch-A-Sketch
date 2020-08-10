let canvas = document.querySelector("#canvas");
const btn = document.querySelector("button");
const clr = document.querySelector("#clear");

let initSize = 16


function makeGrid(x = initSize) {
	canvas.style.gridTemplateColumns = `repeat(${x}, auto)`;
	canvas.style.gridTemplateRows = `repeat(${x}, auto)`;

	for( let i=0; i < (x*x); i++ ) {
		
		const cell = document.createElement("div");
		cell.classList.add("cell");
			cell.addEventListener('mouseenter', () => {
            cell.style.background = document.querySelector('input[type="color"]').value;
            

            
  	});
        canvas.appendChild(cell);
        
	
    }
    
    
}

makeGrid()




function clearGrid() {
	canvas.innerHTML = "";
}



function setGridSize() {
    initSize = prompt("Enter a number");
    clearGrid()
    makeGrid();
    
}
function clearAll() {
    cells.forEach((cell) => {
        cell.style.background = 'white';
  });
}

let cells = document.querySelectorAll(".cell");
clr.addEventListener('click', clearAll);

