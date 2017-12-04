
/*
Create invisible 'canvas' element to overlay on page
*/
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

draw(document.getElementById('canvas'));

/*
Draw rectange on page. Click once to start rectange, again to finish.
*/
function draw(canvas) {
   
	var mouse = {
		x: 0,
		y: 0,
		startX: 0,
		startY: 0
	};
	var element = null;
	
	canvas.style.cursor = "crosshair";
	
	canvas.addEventListener("mousemove", mouseMoveHandler)
	canvas.addEventListener("click", clickHandler);
	
	function mouseMoveHandler(e) {
		setMousePosition(e);
		 if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
	}
	
	function setMousePosition(e) {
        mouse.x = e.pageX + window.pageXOffset;
        mouse.y = e.pageY + window.pageYOffset;
	};
	
	function clickHandler(e) {
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
			
			// Remove event listeners
			canvas.removeEventListener("click", clickHandler);
			canvas.removeEventListener("mousemove", mouseMoveHandler);
			 
        } else {
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
        }
    }
}

