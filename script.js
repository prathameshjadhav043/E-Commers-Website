// functions for cart hide and show
function Show() {
    var x = document.getElementById('aside') ;
    if(x.style.display == 'none'){
        x.style.display = 'block' ;
    }
    else{
        x.style.display = 'none' ;
    }
}
function myFunction() {
    document.getElementById("Mobiles").classList.toggle("show");
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
