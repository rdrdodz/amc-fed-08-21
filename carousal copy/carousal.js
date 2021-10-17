var [leftButton, rightButton] = document.querySelectorAll(".img-container .button");
var sliderImages = document.querySelectorAll(".img-container .slider-img");
var imgContainer = document.querySelector(".img-container");
var maxNumOfImages = 10;

var crrInd = 2;



rightButton.addEventListener("click", function slide(){
    rightButton.removeEventListener("click", slide);
    sliderImages[crrInd].style.zIndex = 20;
    sliderImages[(crrInd-1+3)%3].style.zIndex = 10;
    sliderImages[(crrInd+1)%3].style.zIndex = 5;

    sliderImages[crrInd].style.left = "100%";
    sliderImages[crrInd].addEventListener("transitionend",function(){
        crrInd = (crrInd-1+3)%3;
        sliderImages[crrInd].style.zIndex = 20;
        sliderImages[(crrInd-1+3)%3].style.zIndex = 10;
        sliderImages[(crrInd+1)%3].style.zIndex = 5;

        sliderImages[(crrInd+1)%3].style.left = "0";

    });



    
});

