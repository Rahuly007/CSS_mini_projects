function responsive() {
  var x = document.getElementById("myTopNav");

  if (x.className === "topnavbar") {
    x.className += " responsive";
  }else{
    x.className = "topnavbar";
  }
}
