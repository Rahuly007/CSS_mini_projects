function openCity(event, cityName) {
  var i, tabContent, tabLink;

  tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLink = document.getElementsByClassName("tablink");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace("active", "");
  }

  document.getElementById(cityName).style.display = "block";
  event.currentTarget.className += " active";
  //   console.log(event);

  
}
