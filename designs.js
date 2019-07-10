const submit = document.getElementById("submit");
const pixelCanvas = document.getElementById("pixelCanvas");
// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    // Your code goes here!
    event.preventDefault();
    pixelCanvas.innerHTML = "";
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    for (let i = 0; i < height; i++) {
        const tRow = document.createElement("tr");
        for (let j = 0; j < width; j++) {
            const cell = document.createElement("td");
            cell.addEventListener('click', function (event2) {
                // Select color input
                const color = document.getElementById("colorPicker").value;
                event2.target.style.backgroundColor = color;
            });
            tRow.appendChild(cell);
        }
        pixelCanvas.appendChild(tRow);
    }
}
submit.addEventListener('click', makeGrid);
