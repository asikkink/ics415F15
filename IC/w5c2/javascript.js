$(function(){

  //add image if col1 is clicked
  $("#col1").click(function () {
    $.ajax({url: "unicorn2.jpg", success: function(result){
      $(this).html("<img src='result' style='height:300px'>");
    }});
  });

  //add image if col2 is clicked
  $("#col2").hover(function () {
    $.ajax({url: "3unicorn3.jpg", success: function(result){
      $(this).html("<img src='result' style='height:300px'>");
    }});
  });

  //on mouseenter on col5, show bg image
  $("#col5").mouseenter(function(){
    $.ajax({url: "unicron.jpg", success: function(result){
      $("body").css("background-image", "result");
      $("body").height("100%");
    }});
  });

  //on mouse leave, remove the bg image
  $("#col5").mouseleave(function(){
    $("body").css("background-image", "");
    $("body").height("100%");
  });

  //change col1's image when col3 is clicked
  $("#col3").click(function(){
    $("#col1").fadeOut();
    $.ajax({url: "3unicorn3.jpg", success: function(result){
      $(this).html("<img src='result' style='height:300px'>");
    }});
    $("#col1").fadeIn("slow");
  });

    //change col2's image when col4 is double clicked
  $("#col4").dblclick(function(){
    $("#col2").fadeOut();
    $.ajax({url: "unicorn2.jpg", success: function(result){
      $(this).html("<img src='result' style='height:300px'>");
    }});
    $("#col2").fadeIn("slow");
  });

  $("#col6").click(function () {
    //load html at the bottom of the page
    $.ajax({url: "helloWorld.txt", success: function(result){
      $(this).html(result);
      console.log("TESTING");
    },error: function(){
      $(this).html("<p>Could not load from url, try again.</p>");
      console.log("FAILED");
    }});
  });



});