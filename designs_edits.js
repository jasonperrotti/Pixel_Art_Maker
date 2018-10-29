
//This function prevents the form from refreshing the page
document.getElementById("sizePicker").addEventListener("submit", function(event){
    event.preventDefault()
});
//This function creates a grid based on height and width inputs from the user.
//Each "box" has an event listener function added that turns the individual
//box to the selected color when it is clicked.
function makeGrid() {
var div = document.getElementById('div');
var table1 = document.getElementById('pixelCanvas');
table1.parentNode.removeChild(table1);
var table1 = document.createElement('table');
table1.setAttribute('id', 'pixelCanvas');
div.appendChild(table1);
var gridWidth = document.getElementById("inputWidth").value;
var gridHeight = document.getElementById("inputHeight").value;
var colorPicker = document.getElementById('colorPicker');
function colorFunction(evt) {
  evt.target.style.backgroundColor = colorPicker.value;
}
for (var a = 0; a < gridHeight; a++) {
  var row = document.createElement("tr");
  document.getElementById("pixelCanvas").appendChild(row);
  for (var b = 0; b < gridWidth; b++) {
    var box = document.createElement("td");
    document.getElementById("pixelCanvas").appendChild(box);
    box.addEventListener('click', colorFunction);
        }
    }
  }
