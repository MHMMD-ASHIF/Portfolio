$(document).ready(function(){
    var list_one = document.getElementsByClassName('hidden_on');
    var list_two = document.getElementsByClassName('hidden_two');
    var list_three = document.getElementsByClassName('hidden_three');
    var btn_nm = document.getElementsByClassName('show_more');
    var btn_two_nm = document.getElementsByClassName('show_less');

    $(".project_folder_section > .show_more > button").click(function(e){
      list_one[0].style.display = 'block';
      list_two[0].style.display = 'block';
      list_three[0].style.display = 'block';
      btn_nm[0].style.display = 'none';
      btn_two_nm[0].style.display = 'block';
      


    });

    $(".project_folder_section > .show_less > button").click(function(e){
      list_one[0].style.display = 'none';
      list_two[0].style.display = 'none';
      list_three[0].style.display = 'none';
      btn_nm[0].style.display = 'block';
      btn_two_nm[0].style.display = 'none';
      
    })


    // $(".project_folder_section > .show_less > button").click(function(e){
    //   window.scrollTo({
    //     top:3150,
    //     behavior: "auto"
    //   })

      
    // })

  });