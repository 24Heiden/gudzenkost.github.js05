var timer = document.getElementsByClassName('timer')[0];
var	start = document.getElementsByClassName('start')[0];
var reset = document.getElementsByClassName('reset')[0];

var time = 0;
var running = 0

function pauseResume(){
	if(running == 0){
		running= 1;
		clock();
		start.innerHTML = "Pause";

	}
	else{
		running = 0;
		start.innerHTML = "Resume";
	}
}
function resettime(){
	running = 0
	start.innerHTML = "Start";
	timer.innerHTML = "0:00:00:0";
	time = 0;
}
start.addEventListener("click", pauseResume);
reset.addEventListener("click", resettime);

function clock(){
	if (running ==1) {
		setTimeout(function(){
			time++;
			var milisec = time%10;
			var min = Math.floor(time/10/60);
			var sec = Math.floor(time/10%60);
			var hour = Math.floor(time/10/60/60);
			if(min < 10){
				min = "0"+ min
			}
			if(sec < 10){
				sec = "0"+ sec
			}
			timer.innerHTML = hour +":"+ min +":"+ sec + ":" +milisec;
            clock()

		},100)
	}
}
