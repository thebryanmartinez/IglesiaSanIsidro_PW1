document.addEventListener("DOMContentLoaded", function() {

    var slider = document.getElementsByClassName("slider")[0];
    var slideTrail = document.getElementsByClassName("slideTrail")[0];
    var slideFrames = document.getElementsByClassName("slideFrame");
    var imagesToLoad = document.querySelectorAll("[data-srcset], [data-src]");
    var currentSlideIndex = 0;
    var timerRef = null;
    var direction = 1;
    var circles = document.getElementsByClassName('circle');
    var btnLeft = document.getElementsByClassName('leftBtn')[0];
    var btnRight = document.getElementsByClassName('rightBtn')[0];

    var loading = 0;
    for (var i = 0; i < imagesToLoad.length; i++) {
        var currentImage = imagesToLoad[i];
        var isSrc = false;
        if ('srcset' in currentImage.dataset) {
            currentImage.srcset = currentImage.dataset.srcset;
        }
        if ('src' in currentImage.dataset) {
            currentImage.addEventListener('load', function(e) {
                loading -= 1;
                if (loading == 0) {
                    //iniciamos la animación del slider
                    console.log("Animar el slider");
                    initSlider();
                }
            });
            loading += 1;
            currentImage.src = currentImage.dataset.src;
        }
    }

    function initSlider() {
        slideTrail.style.width = (slideFrames.length * 100) + "vw";
        tick();
    }

    function tick() {
        timerRef = setTimeout(
            function() {
                if (direction == 1 && currentSlideIndex == (slideFrames.length - 1)) {
                    direction = -1;
                }
                if (direction == -1 && currentSlideIndex == 0) {
                    direction = 1;
                }
                var nextSlide = currentSlideIndex + direction;
                // Mover el slide
                moveSliderTo(nextSlide);
                tick();
            },
            5000
        );
    }

    function tick2() {
        timerRef = setTimeout(
            function() {
                if (direction == 1 && currentSlideIndex == (slideFrames.length - 1)) {
                    direction = -1;
                }
                if (direction == -1 && currentSlideIndex == 0) {
                    direction = 1;
                }
                var nextSlide = currentSlideIndex + direction;
                // Mover el slide
                moveSliderTo(nextSlide);
                tick();
            },
            200
        );
    }

    function moveSliderTo(slideTo) {
        slideTrail.style.left = (slideTo * -100) + "vw";
        currentSlideIndex = slideTo;
        for (var i = 0; i < circles.length; i++) {
            circles[i].className = (i == currentSlideIndex) ? "circle selected" : "circle";
        }
    }

    btnRight.addEventListener('click', function(e) {
        direction = 1;
        clearTimeout(timerRef);
        tick2();

    })

    btnLeft.addEventListener('click', function(e) {
        direction = -1;
        clearTimeout(timerRef);
        tick2();
    });


    for (var j = 0; j < circles.length; j++) {
        circles[j].addEventListener('click', function(e) {
            currentSlideIndex = parseInt(e.target.getAttribute("data-index"));
            clearTimeout(timerRef);
            moveSliderTo(currentSlideIndex);
            tick();
        });
    }


});