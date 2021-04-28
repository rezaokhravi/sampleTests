function show() {
  var p = document.getElementById('password');
  p = p.setAttribute('type', 'text');
}

function hide() {
  var p = document.getElementById('password');
  p = p.setAttribute('type', 'password');
}

var showPass = false;
document.getElementById('eye').addEventListener("click", function(){
    
    if (showPass = !showPass ) {
        show();
      } else {
        hide();
      }
        
})


