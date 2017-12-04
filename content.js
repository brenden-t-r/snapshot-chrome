
var canvas = document.createElement("canvas");
canvas.id = "canvas";
canvas.style.width = "100px";
canvas.style.height = "100px";
canvas.style.zIndex = 9000;
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
document.body.appendChild( canvas );

var canvasElement = document.getElementById('canvas');
console.log(canvasElement);

draw(document.getElementById('canvas'));

function draw(canvas) {
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
		}
	};
	
	var mouse = {
		x: 0,
		y: 0,
		startX: 0,
		startY: 0
	};
	var element = null;
	
	canvas.onmousemove = function (e) {
		setMousePosition(e);
		 if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
    }
	
	document.body.onclick = function (e) {
		console.log("Click");
		console.log(element);
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            console.log("finsihed.");
        } else {
            console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle'
			element.style.position = 'absolute';
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
			//element.style.border = "1px solid black";
			element.style.zIndex = 9001;
			element.style.background = "#EEEEFF";
			element.style.opacity = 0.3;
            document.body.appendChild(element)
            canvas.style.cursor = "crosshair";
        }
    }
}

