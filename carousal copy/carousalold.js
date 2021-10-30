var [leftButton, rightButton] = document.querySelectorAll(".img-container .button");
var sliderImages = document.querySelectorAll(".img-container .slider-img");
var imgContainer = document.querySelector(".img-container");
var maxNumOfImages = 10;

var crrInd = 1;

sliderImages[(crrInd+1+3)%3].style.zIndex = "5";
sliderImages[crrInd].style.zIndex = "20";
sliderImages[(crrInd-1+3)%3].style.zIndex = "10";

rightButton.addEventListener("click", function slide(){
    rightButton.removeEventListener("click", slide);
    sliderImages[crrInd].classList.add("start-transition");
    sliderImages[crrInd].style.left = "100%";

    sliderImages[crrInd].addEventListener("transitionend",trans = function(){
        sliderImages[crrInd].removeEventListener("transitionend",trans);
        sliderImages[crrInd].classList.remove("start-transition");
        
        sliderImages[crrInd].style.zIndex = "5";
        sliderImages[(crrInd-1+3)%3].style.zIndex = "20";
        sliderImages[(crrInd+1+3)%3].style.zIndex = "10";

        sliderImages[crrInd].style.left = "0";

        ////////////////
        srcStr = sliderImages[(crrInd-1+3)%3].src; //currently showing
        
        srcStrInit = srcStr.slice(0, -5);
        srcStrMid = srcStr.slice(-5, -4); 
        srcEnd =srcStr.slice(-4);
        
        sliderImages[(crrInd+1+3)%3].src = srcStrInit + 
                                            parseInt(srcStrMid - 1 + maxNumOfImages)%maxNumOfImages +
                                            srcEnd;

        ///////////////
        crrInd = (crrInd-1+3)%3;
        rightButton.addEventListener("click", slide);
    });

});

