

const ele = document.getElementById("face")
var melker;

var x;
var y;

var offsetX = 15;
var offsetY = 15;

document.addEventListener('pointermove', function(event) {

        x = event.clientX;
        y = event.clientY;
        if (melker) {
            ele.style.position = "absolute";
            ele.style.left = `calc(${x}px - ${offsetX}rem)`;
            ele.style.top = `calc(${y}px - ${offsetY}rem)`;
        }
}, {duration: 10, fill: "forwards"});