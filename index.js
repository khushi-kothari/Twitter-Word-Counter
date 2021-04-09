function check_length(my_form)
{
  maxLen = 280; // max number of characters allowed
  //const textarea = document.getElementById('txt_area');
  //textarea.onselect = check_length(my_form);

  var val = my_form.txt_area.value;
  var len = val.length+1;

  if (len > maxLen) {
    document.getElementById("char_typed").innerHTML = "280";
    document.getElementById("char_rem").innerHTML = "0";
    val = val.substring(0, maxLen);
    var msg = "You have reached your maximum limit of characters allowed";
    alert(msg);
  }
  else {
  var char_typed = document.getElementById("char_typed");
  var char_rem = document.getElementById("char_rem");
  char_typed.innerHTML = len;
  char_rem.innerHTML = 280-len;
  }
}

function char_calc(event) {
  var len = document.getElementById('txt_area').value.length+1;
  var key = event.keyCode;
  var char_typed = document.getElementById("char_typed");
  var char_rem = document.getElementById("char_rem");
  //var val;
  //var selectedText;

  /*
  document.getElementById('txt_area').addEventListener("select", function() {
  val = window.getSelection();
  selectedText = val.toString();
  deletelen = selectedText.length;
  console.log(deletelen);
  return deletelen;
  });
  console.log(deletelen);*/

  if(key == "8" || key == "46") {
    if(len==1) {len=2;}
    len = len-2;
    //len = len-2-deletelen;
    //console.log(len);

    char_typed.innerHTML = len;
    char_rem.innerHTML = 280-len;
  }
}

/*
function sel_fun(event) {
  var val = window.getSelection();
  var selectedText = val.toString();
  var len = document.getElementById('txt_area').value.length;
  len -= selectedText.length;
  console.log(len);

  var key = event.keyCode;
  var char_typed = document.getElementById("char_typed");
  var char_rem = document.getElementById("char_rem");

  char_typed.innerHTML = len;
  char_rem.innerHTML = 280-len;

  if(key == "8" || key == "46") {
    if(len==1) {len=2;}
    len = len-2;

    char_typed.innerHTML = len;
    char_rem.innerHTML = 280-len;
  }
}*/


function clear_text(my_form) {
  maxLen = 0;
  var char_typed = document.getElementById("char_typed");
  var char_rem = document.getElementById("char_rem");
  if (my_form.txt_area.value.length >= maxLen) {
    my_form.txt_area.value = "";
    char_typed.innerHTML = 0;
    char_rem.innerHTML = 280;
  }
}

function copy_text() {
    var txt = document.getElementById("txt_area");
    /* Select the text field */
    txt.select();
    txt.setSelectionRange(0, 280); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text!");
  }
