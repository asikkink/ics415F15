
function toggle_visibility(elemNum){
  if($("#a"+elemNum).css("display") == "none")
  {
    console.log("Switching to show");
    $("#sign" + elemNum).text("-");
    $("#a"+elemNum).hide();

    switch(elemNum){
      case "1":  $("#a"+elemNum).html("<p style='text-indent:30px'>JavaScript is the programming language of HTML and the Web.</p>"); break;
      case "2":  $("#a"+elemNum).html("<p style='text-indent:30px'>jQuery is a JavaScript Library that greatly simplifies JavaScript programming.</p>"); break;
      case "3":  $("#a"+elemNum).html("<p style='text-indent:30px'>AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.</p>"); break;
      case "4":  $("#a"+elemNum).html("<p style='text-indent:30px'>Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites.</p>"); break;
      case "5":  $("#a"+elemNum).html("<p style='text-indent:30px'>Meteor is a complete platform for building web and mobile apps in pure JavaScript.</p>"); break;
      default:  $("#a"+elemNum).html("<p style='text-indent:30px'>ANSWER HERE</p>"); break;
    }


    $("#a"+elemNum).fadeIn("slow");
  }
  else{
    console.log("switching to hide");
    $("#a"+elemNum).fadeOut("slow");
    $("#sign" + elemNum).text("+");
  }

}

$(function(){

  $("#question1").click(function(){
    toggle_visibility("1");
  });

  $("#question2").click(function(){
    toggle_visibility("2");
  });

  $("#question3").click(function(){
    toggle_visibility("3");
  });

  $("#question4").click(function(){
    toggle_visibility("4");
  });

  $("#question5").click(function(){
    toggle_visibility("5");
  });

  $("#formSubmit").click(function() {
    console.log("Button clicked! "+$("#url").val());
    $.get($("#url").val(), function(data, status){
      console.log("Data: " + data + "\nStatus: " + status);
      results = $(data).find('a');
      string = "";
      $.each(results, function(i, val){
        string += "Link "+i+": "+val;
      })
      $("#info").text(string);
    }, "html");
  });

});