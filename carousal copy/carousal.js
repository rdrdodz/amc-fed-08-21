var [leftButton, rightButton] = document.querySelectorAll(".img-container .button");
var sliderImages = document.querySelectorAll(".img-container .slider-img");
var imgContainer = document.querySelector(".img-container");
var maxNumOfImages = 10;

var crrInd = 1;

sliderImages[(crrInd-1+3)%3].style.zIndex = "10";
sliderImages[crrInd].style.zIndex = "20";
sliderImages[(crrInd+1+3)%3].style.zIndex = "5";

rightButton.addEventListener("click", function slide(){
    rightButton.removeEventListener("click", slide);
    sliderImages[crrInd].classList.add("start-transition");
    sliderImages[crrInd].style.left = "100%";

    sliderImages[crrInd].addEventListener("transitionend",function(){
        sliderImages[crrInd].classList.remove("start-transition");
        sliderImages[crrInd].style.zIndex = "5";
        setTimeout(function(){
            sliderImages[(crrInd+1+3)%3].style.zIndex = "20";
            setTimeout(() => {
                sliderImages[(crrInd-1+3)%3].style.zIndex = "10";
                setTimeout(()=>{
                    sliderImages[crrInd].style.left = "0";
                    setTimeout(()=>{
                        crrInd = (crrInd+1+3)%3;
                        rightButton.addEventListener("click", slide);
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    });

});

