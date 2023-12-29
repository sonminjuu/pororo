$(document).ready(function () {

    //css에서 먼저 안보이게 처리

    var click = 0;
  
    $("#menu_tap_box_2").click(function () {
  
      $(".menubar").animate({
        left: "0",
      });
  
    });
  
  
    // x버튼을 클릭하면 100%만큼 가게해주세요
    $("#menubar_header_in_2").click(function () {
      $(".menubar").animate({
        left: "100%",
      });
    });
  
  
    // 모바일 메뉴 !
    $("#menu_tap_box_3").click(function () {
      $(".menubar").animate({
        left: "0"
      });
    });
  
    $("#menubar_header_in_3").click(function () {
      $(".menubar").animate({
        left: "100%",
      });
    });
  
  

// $('#main_menu>li').hover(function(){
//   $('.sub_menu').css({
//     display : 'block',
//   });
// }, function(){
//   $('.sub_menu').css({
//     display : 'none',
//   });
// });










  
  
  }); //end