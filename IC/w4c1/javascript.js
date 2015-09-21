function clickShowImage(){
  document.getElementById("col1").innerHTML ="<img src='unicorn2.jpg' style='height:300px'>";
}

function hoverShowImage(){
  document.getElementById("col2").innerHTML="<img src='3unicorn3.jpg' style='height:300px'>";
}

function addBackgroundImg(){
  var body = document.getElementById("body").style = "background-image:url('unicron.jpg'); height:100%";
}

function removeBackgroundImg(){
  var body = document.getElementById("body").style = "height:100%";
}

function changeCol1(){
  document.getElementById("col1").innerHTML = "<img src='3unicorn3.jpg' style='height:300px'>";
}

function changeCol2(){
  document.getElementById("col2").innerHTML = "<img src='unicorn2.jpg' style='height:300px'>";
}

