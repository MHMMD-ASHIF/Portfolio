
var lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop>lastScrollTop){
    navbar.style.top = "-80px"; 
   
  }
  else{
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
  });


navbar = document.getElementById("navbar");
window.onscroll = function(){
  if (window.scrollY>22){
    navbar.classList.add('shadow');
  }else{
    navbar.classList.remove('shadow');
  }
}