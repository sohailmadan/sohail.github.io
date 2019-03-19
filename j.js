var numsquares = 6;
var colors = generaterandomcolors(numsquares);
function generaterandomcolors(num){
var arr = [];
for(var i =0;i<num;i++){
	arr.push(randomcolor());

}
return arr;	
}

function randomcolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+g+", "+b+")"
}
var squares = document.querySelectorAll(".square")
var pickedcolor = pickcolor();
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
resetbutton.addEventListener("click",function() {
	numsquares=6;
	colors = generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	messagedisplay.textContent="";
	this.textContent="New colors";
});
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click",function() {
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares=3;
	colors = generaterandomcolors(numsquares);
	pickedcolor=pickcolor();
	colorDisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			  squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display= "none";
		}
	}
});

hardbtn.addEventListener("click",function() {
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares=6;
	colors = generaterandomcolors(numsquares);
	pickedcolor=pickcolor();
	colorDisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display= "block";
		
	}
});

var colorDisplay = document.getElementById('colorDisplay')
colorDisplay.textContent =  pickedcolor;
var messagedisplay = document.querySelector("#message");
 
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){


		var clickedcolor = this.style.background;
		if (clickedcolor ===  pickedcolor){
			messagedisplay.textContent = "correct";
			changecolors(clickedcolor);
			h1.style.background = clickedcolor;
			resetbutton.textContent="Play Again? ";

		}
		else{
			this.style.background="#232323";
			messagedisplay.textContent = "try again";
		}
	});
}

function changecolors(color){
	for(var i =0;i<colors.length;i++){
	squares[i].style.background=color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}