$( document ).ready(function() {

  console.log('its alive');
   // mobile navigation
   $(".burger").click(function(event) {   
    if($(".menu").is('.menu__open')){
      $(".burger").removeClass('burger__cross')
      $(".menu__open").removeClass('menu__open');
      $("body").removeClass('no-scroll');
    }
    else{
      $(".burger").addClass('burger__cross')
       $(".menu").addClass('menu__open');
       $("body").addClass('no-scroll');
    }
   });
// acordion auto height   -----------сайдбар-----спосіб 1
  $('.sidebar__nav>ul>li').click(function(event) {
    $('.sidebar__nav>ul>li div').innerHeight(0);
    var height_of_ul = $(this).find('ul').innerHeight();
    $(this).find('div').innerHeight(height_of_ul);
  });
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  }

function generateColor(){
// знайдено тут https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript
return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

var paragraf = document.getElementsByTagName('p');

for(var i=paragraf.length-1; i>=0; i--){
  paragraf[i].style.backgroundColor=generateColor();
  paragraf[i].style.color=generateColor();
}

$.each(paragraf, function(index, val) {
  this.addEventListener("click", сlickChange);
});

var curent_style = '';
function сlickChange(a) {
  // отримуємо стилі елементу на який клікнули
  var atrStyle = this.style.cssText; 

 //перевіряємо чи є елемент з атрибутом  prev_click
  if(document.querySelector('[prev_click]')){

          // prevCliked - це елемент з атрибутом prev_click
    var prevCliked = document.querySelector('[prev_click]');

    //  значення поточного 
    var ff =  this.style.cssTextlocalStorage.clear();
    //в елемент, на який ми клікнули перезаписується стилі  з атрибута prev_click в елементі prevCliked
    this.style.cssText = prevCliked.getAttribute('prev_click');
    prevCliked.style.cssText = atrStyle;

      // alert('стилі для prtv елемента '+ prevCliked.style.cssText); 
    prevCliked.removeAttribute("prev_click");

  }
  else{
      this.setAttribute("prev_click", atrStyle);
  }

}

// ________________________________________SLIDER_______________________
var slider = document.getElementsByClassName('slider');
var slides = slider[0].getElementsByClassName('slide');

var nextBtn = document.createElement('div');
  nextBtn.innerText='next';
  nextBtn.classList.add('slider__btn');
  nextBtn.classList.add('slider__btn__next');

var prevBtn = document.createElement('div');
  prevBtn.innerText='prev';
  prevBtn.classList.add('slider__btn');
  prevBtn.classList.add('slider__btn__prev');

var autoPlay = document.createElement('div');
  autoPlay.innerText='pausePlay';
  autoPlay.classList.add('slider__btn');
  autoPlay.classList.add('slider__btn__pausePlay');

var pins = document.createElement('div');
    pins.classList.add('pins');
for (var i = 0; i <= slides.length - 1; i++) {
      var pin = document.createElement('div');
     pin.classList.add('pin');
     pin.setAttribute('data-num', i);
     pin.addEventListener( "click" , function() {
      var num = this.getAttribute('data-num');
       changeSlideCarousel(num);
    });
     pins.appendChild(pin);
    }
var LenghtSlider = slides.length - 1;
slides[0].classList.add('active');
slides[LenghtSlider].classList.add('prevClass');
console.log(LenghtSlider);
slides[1].classList.add('nextClass');

var sliderHeigth = slider[0].querySelector('.active').clientHeight+'px';
slider[0].style.height=sliderHeigth;

var sliderWidth = slider[0].querySelector('.active').clientWidth+'px';
slider[0].style.clientWidth=sliderWidth;

// var sliderWidth = slider[0].querySelector('.prevClass').clientWidth+'px';
// slider[0].style.clientWidth=sliderWidth;

// var sliderWidth = slider[0].querySelector('.nextClass').clientWidth+'px';
// slider[0].style.clientWidth=sliderWidth;
// console.log(sliderWidth);




slider[0].appendChild(nextBtn);
slider[0].appendChild(prevBtn);
slider[0].appendChild(autoPlay);
slider[0].appendChild(pins);

document.querySelector('.pin').classList.add('active');

prevBtn.addEventListener( "click" , function() {
  var go_to = activeSlide() - 1;
  // changeSlide(go_to);
  changeSlideCarousel(go_to);
});

nextBtn.addEventListener( "click" , function() {
  var go_to = activeSlide() + 1;
  // // changeSlide(go_to);
  changeSlideCarousel(go_to);

  // nextSlide(slider[0]);
});

function changeSlide(IndexSlide){
  var  pins_arr =  document.getElementsByClassName('pin');
  if(IndexSlide == slides.length){
    IndexSlide = 0;
  }
  else if(IndexSlide < 0){
    IndexSlide = slides.length - 1;
  }
  for (var i = slides.length - 1; i >= 0; i--) {
    slides[i].classList.remove('active');
    pins_arr[i].classList.remove('active');
  }
  slides[IndexSlide].classList.add('active');
  pins_arr[IndexSlide].classList.add('active');
}

function activeSlide(){
  var nodes = Array.prototype.slice.call( slider[0].children);
  var liRef = slider[0].querySelector('.active');
  var currentSlide =  nodes.indexOf(liRef); 
  return currentSlide;
}



function changeSlideCarousel(IndexSlide){
  var  pins_arr =  document.getElementsByClassName('pin');

  var nextIndex = IndexSlide + 1;
  var prevIndex = IndexSlide - 1;
  
    if(IndexSlide == slides.length){
      IndexSlide = 0;
      nextIndex = IndexSlide + 1;
      prevIndex = slides.length - 1;
    }
    else if(IndexSlide < 0){
      IndexSlide = slides.length - 1;
      prevIndex = IndexSlide - 1;
      nextIndex = 0;
    } 
    else if(IndexSlide == slides.length - 1){
      IndexSlide = slides.length - 1;
      nextIndex =  0;
      prevIndex = IndexSlide - 1;
    } else if(IndexSlide == 0){
      IndexSlide = 0;
      nextIndex =  IndexSlide + 1;
      prevIndex = slides.length - 1;
    }

  for (var i = slides.length - 1; i >= 0; i--) {
   
    pins_arr[i].classList.remove('active');
    slides[i].classList.remove('prevClass');
    slides[i].classList.remove('nextClass');
  }

  slides[IndexSlide].classList.add('active');
  pins_arr[IndexSlide].classList.add('active');
  slides[nextIndex].classList.add('nextClass');
  slides[prevIndex].classList.add('prevClass');

  console.log(prevIndex, IndexSlide, nextIndex);


// function nextSlide(slider){
//   var slides = slider.getElementsByClassName('slide');
//   console.log(slides.length);

//   for(var i=slides.length-1; i>=0; i--){
//     slides[i].classList.remove('active');
//     console.log(slides[i]);
//   }

//   slides[0].currentSlide=0; 
//   // var x = slides[0].currentSlide++;
//   // console.log(x);

//   // if(slider.currentSlide>=slides.length){
//   //   slider.currentSlide=0;
//   // }

//   // slides[slider.currentSlide].classList.add('active');

}

// _________________________________________________________Pause/Play________________________________________
var checkAutoPlay = false;
var timerId;

autoPlay.addEventListener( "click" , function() {
  checkAutoPlay =! checkAutoPlay;
  if (checkAutoPlay) {
    timerId = setTimeout(function auto_play() {
      var go_to = activeSlide() + 1;
      changeSlide(go_to);
      timerId = setTimeout(auto_play, 5000);
    }, 5000);
  }
  else{
    clearTimeout(timerId);
  }
});
// _______________________________________________________________________________________________


var pos =0;
var block = document.getElementsByClassName('block');
var anim = document.getElementsByClassName('anim');
console.log(anim);
console.log(block);

var t = setInterval (move, 500);




function move(){
var posLeft = document.querySelector('.anim');
  if (pos>=190){
    clearInterval(t);
  } 
  else{
    pos +=1;
  anim[0].style.left = pos + 'px';
// word.style.left=parseInt(word.style.left)+10;
  }
  
}




