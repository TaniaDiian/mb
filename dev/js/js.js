$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:true
  });
  // $('.search-box > .search-icon').on(click).function(){
    
  // }
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
        //    var sidebar_nav ={
        //   "ЦИФРОВОЕ" : ['link 1', 'link 2',  'link 3', 'link 4'],
        //   "ОФСЕТНОЕ ШЕЛКОГРАФИЯ" :['link 1', 'link 2',  'link 3', 'link 4'],
        //   "ПЕРЕМЕННЫЕ ДАННЫЕ" : ['link 1', 'link 2',  'link 3', 'link 4'],
        //   "ШТРИХ-КОДИРОВАНИЕ" : ['link 1', 'link 2',  'link 3', 'link 4'],
        //   "ОТДЕЛОЧНОЕ": ['link 1', 'link 2',  'link 3', 'link 4'], 
        // }
        // console.log(sidebar_nav);

// acordion auto height   -----------сайдбар-----спосіб 1
  $('.sidebar__nav>ul>li').click(function(event) {
    $('.sidebar__nav>ul>li div').innerHeight(0);
    var height_of_ul = $(this).find('ul').innerHeight();
    $(this).find('div').innerHeight(height_of_ul);
  });
});

  
    var uluru = {lat: 48.929921, lng: 24.708515};
    var map = document.getElementById('map');
    if(map){
      map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: uluru});
      var marker = new google.maps.Marker({position: uluru, map: map});
    }
    






