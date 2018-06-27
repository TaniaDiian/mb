
$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:true
  });
});

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
// var slider = document.getElementsByClassName('slider');
// var slides = slider[0].getElementsByClassName('slide');

// var nextBtn = document.createElement('div');
//   nextBtn.innerText='next';
//   nextBtn.classList.add('slider__btn');
//   nextBtn.classList.add('slider__btn__next');

// var prevBtn = document.createElement('div');
//   prevBtn.innerText='prev';
//   prevBtn.classList.add('slider__btn');
//   prevBtn.classList.add('slider__btn__prev');

// var autoPlay = document.createElement('div');
//   autoPlay.innerText='pausePlay';
//   autoPlay.classList.add('slider__btn');
//   autoPlay.classList.add('slider__btn__pausePlay');

// var pins = document.createElement('div');
//     pins.classList.add('pins');
// for (var i = 0; i <= slides.length - 1; i++) {
//       var pin = document.createElement('div');
//      pin.classList.add('pin');
//      pin.setAttribute('data-num', i);
//      pin.addEventListener( "click" , function() {
//       var num = this.getAttribute('data-num');
//        changeSlide(num);
//     });
//      pins.appendChild(pin);
//     }

// slides[0].classList.add('active');
// var sliderHeigth = slider[0].querySelector('.active').clientHeight+'px';
// slider[0].style.height=sliderHeigth;

// slider[0].appendChild(nextBtn);
// slider[0].appendChild(prevBtn);
// slider[0].appendChild(autoPlay);
// slider[0].appendChild(pins);

// document.querySelector('.pin').classList.add('active');

// prevBtn.addEventListener( "click" , function() {
//   var go_to = activeSlide() - 1;
//   changeSlide(go_to);
// });

// nextBtn.addEventListener( "click" , function() {
//   var go_to = activeSlide() + 1;
//   changeSlide(go_to);
// });

// function changeSlide(IndexSlide){
//   var  pins_arr =  document.getElementsByClassName('pin');
//   if(IndexSlide == slides.length){
//     IndexSlide = 0;
//   }
//   else if(IndexSlide < 0){
//     IndexSlide = slides.length - 1;
//   }
//   for (var i = slides.length - 1; i >= 0; i--) {
//     slides[i].classList.remove('active');
//     pins_arr[i].classList.remove('active');
//   }
//   slides[IndexSlide].classList.add('active');
//   pins_arr[IndexSlide].classList.add('active');

// }

// function activeSlide(){
//   var nodes = Array.prototype.slice.call( slider[0].children);
//   var liRef = slider[0].querySelector('.active');
//   var currentSlide =  nodes.indexOf(liRef); 
//   return currentSlide;
// }


// var Square = 25;
// var sliderHeigth = slider[0].querySelector('.active').clientHeight+'px';
// slider[0].style.height=sliderHeigth;

// var sliderWidth = slider[0].querySelector('.active').clientWidth+'px';
// slider[0].style.clientWidth=sliderWidth;

// var SquareHeight = Math.round (parseInt(sliderHeigth) / Square);
// var SquareWidth = Math.round(parseInt(sliderWidth) / Square);



// // _____________________________________________AutoPlay___________________
// var checkAutoPlay = false;
// var timerId;

// autoPlay.addEventListener( "click" , function() {

//   checkAutoPlay =! checkAutoPlay;

//   if (checkAutoPlay) {
//     timerId = setTimeout(function auto_play() {
//       var go_to = activeSlide() + 1;
//       changeSlide(go_to);
//       timerId = setTimeout(auto_play, 5000);
//     }, 5000);
//   }
//   else{
//     clearTimeout(timerId);
//   }
// });

// ____________________________________