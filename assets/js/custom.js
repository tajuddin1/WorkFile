var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("menu_item_top");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  })};


// Video Play Pause





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
