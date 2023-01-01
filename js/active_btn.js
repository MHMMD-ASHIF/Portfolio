$(document).ready(function(){
    $(".education_section .button_list > button ").click(function(e){

      $(".education_section .button_list > button ").removeClass("active_btn");

    $(this).addClass("active_btn");
   
   });    
  });