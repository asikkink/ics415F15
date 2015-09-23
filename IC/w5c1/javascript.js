$(function() {

  //add image if col1 is clicked
  $("#col1").click(function () {
    $(this).html("<img src='unicorn2.jpg' style='height:300px'>");
  });

  //add image if col2 is clicked
  $("#col2").hover(function () {
    $(this).html("<img src='3unicorn3.jpg' style='height:300px'>");
  });

  //on mouseenter on col5, show bg image
  $("#col5").mouseenter(function(){
    $("body").css("background-image", "url('unicron.jpg')");
    $("body").height("100%");
  });

  //on mouse leave, remove the bg image
  $("#col5").mouseleave(function(){
    $("body").css("background-image", "");
    $("body").height("100%");
  });

  //change col1's image when col3 is clicked
  $("#col3").click(function(){
    $("#col1").hide();
    $("#col1").html("<img src='3unicorn3.jpg' style='height:300px'>");
    $("#col1").fadeIn("slow");
  });

    //change col2's image when col4 is double clicked
  $("#col4").dblclick(function(){
    $("#col2").html("<img src='unicorn2.jpg' style='height:300px'>");
  });



});