function language(language) {
    var i;
    var x = document.getElementsByClassName("language");
    console.log(x)
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(language).style.display = "block";  
  }