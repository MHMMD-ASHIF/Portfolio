    var y = document.getElementsByClassName('hamburger');
    var k = document.getElementsByClassName('cancel_burg2');
    var m = document.getElementsByClassName('navbar-nav');
    var l = document.getElementsByClassName('hello');

    var a = document.getElementsByClassName('p1');
    var b = document.getElementsByClassName('p2');
    var c = document.getElementsByClassName('p3');
    var d = document.getElementsByClassName('p4');




    $(document).ready(function(){
        $("nav .checkbtn > .hamburger").click(function(e){
          $("body").addClass("cancel_burg");
          k[0].style.display="block";
          y[0].style.display="none";
          l[0].style.right="0";
          m[0].style.right="0";
          
         
        
          
       });

        $("nav .checkbtn > .cancel_burg2").click(function(e){
            $("body").removeClass("cancel_burg");
            k[0].style.display="none";
            y[0].style.display="block";
            l[0].style.right="-100%";
            m[0].style.right="-100%";
            

          });
          $("nav .navbar-nav  li> a").click(function(e){
            $("body").removeClass("cancel_burg");
            k[0].style.display="none";
            y[0].style.display="block";
            l[0].style.right="-100%";
            m[0].style.right="-100%";
            
           
        });
        
        });




