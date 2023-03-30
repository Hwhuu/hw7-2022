var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	vol = document.getElementById('volume');
	vol.innerHTML = slider.value + '%';
	video.volume = slider.value * 0.01;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate = video.playbackRate * 0.90;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate = video.playbackRate * 1.10;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) { 
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	var button = document.getElementById('mute');
	if (button.innerHTML == 'Mute') { 
		video.muted = true;
		button.innerHTML = "Unmute";
		console.log(button.innerHTML);
	}
	else { 
		video.muted = false;
		button.innerHTML = "Mute";
		console.log(button.innerHTML);
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	slider = document.getElementById('slider');
	vol = document.getElementById('volume');
	video.volume = slider.value * 0.01;
	vol.innerHTML = video.volume * 100 + "%"
	console.log("The current value is" + video.volume)
	console.log(vol.innerHTML);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool"
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
});
