let slideIndex = 0;

 slides();

function slides() {

  let i;
  let slides1 = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  // hides the second and third images
  }

  slideIndex++; 

  if (slideIndex > slides1.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(slides, 5500); // Change image every 2 seconds
}

var links = document.getElementById('links');

function hbtn() {
    if(links.style.display == 'flex') {
        links.style.display = 'none'
    } else links.style.display = 'flex'; 
    // displays the menu inside the hamburger
    
  }