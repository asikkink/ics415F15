function getClasses(elem){
  var classes = elem.className;

  /*split substr by spaces and save to an array*/
  var temp = classes.split(" ");
  /*return array*/

  return temp;
}

function addClass(elem, className){
  var classes = getClasses(elem);
  var classExists = false;
  /*check the array to see if className is in the list*/
  for(var i = 0; i < classes.length; i++) {
    if (classes[i] == className) classExists = true;
  }
  /*if it is, don't add it, otherwise add the classes from elem.className along with the new className*/
  if(classExists == false) elem.className = elem.className+" "+className;
}

function validateForm(){
/* checks that all text fields have entries and that the password and confirm password entries are the same.*/
  var variables = location.search.substr(1).split("&");
  var formData = new Object();
  var temp = [];
  var valid = true;

  for(var i = 0; i < variables.length; i++){
    temp = variables[i].split("=");
    formData[temp[0]] = decodeURIComponent(temp[1]);
    if(temp[1] == '') valid = false;
    console.log(temp[0]+" "+formData[temp[0]]);
  }

  if(formData['password'] != formData['confirm']){
    document.getElementById("message").innerHTML = "<p style='color:red; font-weight:bold;'>Your passwords do match, please re-enter those fields.</p>";
    addClass(document.getElementById("password"), "error");
    addClass(document.getElementById("confirm"), "error");
  }


  if(valid == false){
    document.getElementById("message").innerHTML ="<p style='color:red; font-weight:bold;'>Please fill in all fields below.</p>";
    for (var key in formData) {
      if (formData.hasOwnProperty(key)) {
        if(formData[key] == ''){
          addClass(document.getElementById(key), "error");
        }
      }
    }
  }

}