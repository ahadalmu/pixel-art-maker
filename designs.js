// define a new variables in javascript that get element by ID in HTML
const submit = document.getElementById("submit");
const pixelCanvas = document.getElementById("pixelCanvas");
// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    // stop the default action of an element from happening
    event.preventDefault();
    // to clear the canvas
    pixelCanvas.innerHTML = "";
    // Select size input
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    //  the loop that make the canvas
    for (let i = 0; i < height; i++) {
        // to create row at the canvas
        const tRow = document.createElement("tr");
        for (let j = 0; j < width; j++) {
            // to create cell inside the row
            const cell = document.createElement("td");
            // Add an event listener that color the cell when a user clicks the button
            cell.addEventListener('click', function (event2) {
                // Select color input
                const color = document.getElementById("colorPicker").value;
                // to chane the cell back ground color
                event2.target.style.backgroundColor = color;
            });
            tRow.appendChild(cell);
        }
        pixelCanvas.appendChild(tRow);
    }
}
// Add an event listener that make a canvas when a user clicks the button
submit.addEventListener('click', makeGrid);
