const submit = document.getElementById("submit");
const table = document.getElementById("pixelCanvas");
// Select size input
const height = document.getElementById("inputHeight").value;
const width = document.getElementById("inputWidth").value;
// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    // Your code goes here!
    event.preventDefault();
    table.innerHTML = "";
    for (var i = 0; i < height; i++) {
        const tRow = document.createElement("tr");
        for (var j = 0; j < width; j++) {
            const cell = document.createElement("td");
            cell.addEventListener('click', function (event2) {
                // Select color input
                const color = document.getElementById("colorPicker").value;
                event2.target.style.backgroundColor = color;
            });
            tRow.appendChild(cell);
        }
        table.appendChild(tRow);
    }
}
submit.addEventListener('click', makeGrid);
