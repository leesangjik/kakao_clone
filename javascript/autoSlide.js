var slideIndex = 0;
showSlide();


function showSlide() {
    var i;
    var slide = document.getElementsByClassName("ad__slide");
    var dot = document.getElementsByClassName("dot");

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slide.length) { slideIndex = 1 }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace("active", "")
    }
    slide[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].className += " active";
    setTimeout(showSlide, 2000);
}