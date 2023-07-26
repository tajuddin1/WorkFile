var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("menu_item_top");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  })};


// Video Play Pause

const videoElement = document.querySelector('video');
const playPauseButton = document.querySelector('.video-control');
var overly_content = document.getElementById('video_overly_content');

playPauseButton.addEventListener('click', () => {
	playPauseButton.classList.toggle('playing');
  overly_content.classList.toggle('hide');
	if (playPauseButton.classList.contains('playing')) {
		videoElement.play();
	}
	else {
		videoElement.pause();
	}
});

videoElement.addEventListener('ended', () => {
	playPauseButton.classList.remove('playing');
});



// Count Numbering

const numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
  const incrementCounter = () => {
    const target_number = +num.getAttribute("data-target-number");
    const current_number = parseInt(num.innerText);

    if (current_number < target_number) {
      num.innerText = Math.floor(current_number + target_number / 20);
      setTimeout(incrementCounter, 100);
    } else {
      num.innerText = target_number.toLocaleString();
    }
  };
  incrementCounter();
});


// Mobile Menu 

var navIcon = document.getElementById("navIcon");
var leftmenu =document.getElementById("leftMenu");


navIcon.addEventListener('click' , function(){
    navIcon.classList.toggle('active');
    leftmenu.classList.toggle('fitMenu');
});



// var lang_btn = document.getElementById("lang_btn");
// var lang_page =document.getElementById("lang_page");

// document.onclick= function(e){
//   if(e.target.id !=='lang_page' && e.target.id !=='lang_btn'){
//     lang_page.classList.remove('active');
//   }
// };

// lang_btn.addEventListener('click' , function(){
//   lang_page.classList.toggle('active');
// });