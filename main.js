let backgrounds = Array.from(document.querySelectorAll('.landing .backgrounds img'));
let toRight = document.getElementById('to-right');
let toLeft = document.getElementById('to-left');
let bullets = Array.from(document.querySelectorAll('.landing .bullets li')) 

let currentBackground = 2;

toLeft.onclick = toLeftFunc;
toRight.onclick = toRightFunc;

checker();

function toLeftFunc() {
    if(toLeft.classList.contains('disabled')){}
    else {
        currentBackground--;
        checker();
    }
}
function toRightFunc() {
    if(toRight.classList.contains('disabled')){}
    else {
        currentBackground++;
        checker();
    }
}

function checker() {
    removeAllActive();
    backgrounds[currentBackground -1].classList.add('active');
    bullets[currentBackground-1].classList.add('active');

    if(currentBackground == 1) toLeft.classList.add('disabled')
    else toLeft.classList.remove('disabled');
    
    if(currentBackground == backgrounds.length) toRight.classList.add('disabled')
    else toRight.classList.remove('disabled');
}

function removeAllActive() {
    backgrounds.forEach(back => back.classList.remove('active'));
    bullets.forEach(bull => bull.classList.remove('active'));
}

for (let i = 0; i < bullets.length; i++) {
    bullets[i].onclick = () => {
        currentBackground = i +1;
        checker();
    }
}



// stll need to learn code  ((--  it's just copied  --))


var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// stll need to learn code 
