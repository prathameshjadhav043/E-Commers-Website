// functions for cart hide and show
function Show() {
    var x = document.getElementById('aside-fun') ;
    if(x.style.display == 'none'){
        x.style.display = 'block' ;
    }
    else{
        x.style.display = 'none' ;
    }
}
function myFunction() {
    document.getElementById("Top Offer").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) 
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//----------------------------------

// Carausel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// add function 

function add() {
    var itm = document.getElementById("card");
    var cln = itm.cloneNode(true);
    document.getElementById("aside").appendChild(cln);
    var cln = cln.style.button.display = "none" ;
}
// remove
function remove() {
    var list = document.getElementById("aside");
    if (list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
}