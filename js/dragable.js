// SNIPPING TOOL
dragElement(document.getElementById("mydiv"));
function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById("mydivheader")) {
document.getElementById("mydivheader").onmousedown = dragMouseDown;
} else {
elmnt.onmousedown = dragMouseDown;
}
function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
document.onmousemove = elementDrag;
}
function elementDrag(e) {
e = e || window.event;
e.preventDefault();
pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;
elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}
function closeDragElement() {
document.onmouseup = null;
document.onmousemove = null;
}
}







// ABOUT WINDOWS
// dragElement2(document.getElementById("mydiv3"));
// function dragElement2(elmnt2) {
// var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
// if (document.getElementById("mydivheader3")) {
// document.getElementById("mydivheader3").onmousedown = dragMouseDown2;
// } else {
// elmnt2.onmousedown = dragMouseDown2;
// }
// function dragMouseDown2(e) {
// e = e || window.event;
// e.preventDefault();
// pos3 = e.clientX;
// pos4 = e.clientY;
// document.onmouseup = closeDragElement2;
// document.onmousemove = elementDrag2;
// }
// function elementDrag2(e) {
// e = e || window.event;
// e.preventDefault();
// pos1 = pos3 - e.clientX;
// pos2 = pos4 - e.clientY;
// pos3 = e.clientX;
// pos4 = e.clientY;
// elmnt2.style.top = (elmnt2.offsetTop - pos2) + "px";
// elmnt2.style.left = (elmnt2.offsetLeft - pos1) + "px";
// }
// function closeDragElement2() {
// document.onmouseup = null;
// document.onmousemove = null;
// }
// }