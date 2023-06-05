// $(window).on("scroll ", function(event){
//     $('header').slideToggle( "fast" );
// });


let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider");

    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length -1}

    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";

    slides[slideIndex].style.display = "block";
    let sliderH = slides[slideIndex].clientHeight;

    document.getElementById("prev").style["top"] = (sliderH/2) + "px";
    document.getElementById("next").style["top"] = (sliderH/2) + "px";

}
