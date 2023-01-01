$(document).ready(function(){
    $("ul.navbar-nav > li>a").click(function(e){
      $("ul.navbar-nav > li>a").removeClass("activee");
      $(this).addClass("activee");
    });
    });