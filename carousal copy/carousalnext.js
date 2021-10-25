var [leftButton, rightButton] = document.querySelectorAll(".img-container .button");
var sliderImages = document.querySelectorAll(".img-container .slider-img");
var imgContainer = document.querySelector(".img-container");
var maxNumOfImages = 10;

var crrInd = 1;
var srcStr;

sliderImages[(crrInd+1+3)%3].style.zIndex = "5";
sliderImages[crrInd].style.zIndex = "20";
sliderImages[(crrInd-1+3)%3].style.zIndex = "10";


rightButton.addEventListener("click", slide = function(){
    rightButton.removeEventListener("click", slide);
    sliderImages[crrInd].classList.add("start-transition");
    sliderImages[crrInd].style.left = "100%";

    sliderImages[crrInd].addEventListener("transitionend", tra = function(){
        sliderImages[crrInd].removeEventListener("transitionend", tra)
        sliderImages[crrInd].classList.remove("start-transition");
        
        sliderImages[crrInd].style.zIndex = "5";
        sliderImages[(crrInd-1+3)%3].style.zIndex = "20";
        sliderImages[(crrInd+1+3)%3].style.zIndex = "10";

        srcStr = sliderImages[crrInd].src;
        srcStrInit = srcStr.slice(0, -5);
        srcStrMid = srcStr.slice(-5, -4); 
        srcEnd =srcStr.slice(-4);
        sliderImages[(crrInd+1+3)%3].src =  srcStrInit + (parseInt(srcStrMid) - 2 + maxNumOfImages)%maxNumOfImages + srcEnd;
        
        sliderImages[crrInd].style.left = "0";
        
        crrInd = (crrInd-1+3)%3;
        console.log("Zeb")
        console.log(crrInd);
        rightButton.addEventListener("click", slide);
    });

});
