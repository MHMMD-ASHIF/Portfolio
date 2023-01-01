$(document).ready(function(){
    var y = document.getElementsByClassName('fullstack_contant_django');
    var b = document.getElementsByClassName("fullstack_contant_school");
    var a = document.getElementsByClassName("fullstack_contant_ug");
    var x = document.getElementsByClassName("fullstack_contant_pg");
    


    $(".education_section .button_list > .django").click(function(e){
      y[0].style.display = 'block';
      b[0].style.display = "none";
      a[0].style.display = "none";
      x[0].style.display = "none";

    });
    $(".education_section .button_list > .pg").click(function(e){
        
        y[0].style.display = 'none';
        b[0].style.display = "none";
        a[0].style.display = "none";
        x[0].style.display = "block";
  
    });

    $(".education_section .button_list > .ug").click(function(e){
      y[0].style.display = 'none';
      x[0].style.display = "none";
      b[0].style.display = "none";
      a[0].style.display = "block";
      
    });

    $(".education_section .button_list > .school").click(function(e){
      y[0].style.display = 'none';
      x[0].style.display = "none";
      a[0].style.display = "none";
      b[0].style.display = "block";
      
    });

    


  });