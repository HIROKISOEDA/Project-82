var mouserodent = "empty"
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var color = "green"
var width_of_line = 5;

 canvas.addEventListener("mousedown", mouse_down)
 function mouse_down(e){
     mouserodent = "Mousedown"
     color = document.getElementById("color").value
     width_of_line = document.getElementById("width_of_line").value
 } 

 canvas.addEventListener("mouseup", mouse_up)
 function mouse_up(e){
mouserodent = "Mouseup"
 }

 canvas.addEventListener("mouseleave", mouse_leave)
function mouse_leave(e){
    mouserodent = "Mouseleave"
}

 canvas.addEventListener("mousemove", mouse_move)
 function mouse_move(e){
 current_position_of_x = e.clientX -canvas.offsetLeft
 current_position_of_y = e.clientY -canvas.offsetTop
 
 if(mouserodent == "Mousedown"){
     ctx.beginPath()
     ctx.strokeStyle = color
     ctx.lineWidth = width_of_line
     
    //In ctx.arc we take 5 numbers:
    //x position of the circle/arc
    //y position of the ARC/circle
    //radius of the ARC/circle
    //starting angle of the arc
    //ending angle of the arc
     ctx.arc(current_position_of_x, current_position_of_y, 20, 0, 2*Math.PI)
     //ctx.lineTo(current_position_of_x, current_position_of_y)
     ctx.stroke()

 }
 last_position_of_x = current_position_of_x
 last_position_of_y = current_position_of_y
 }