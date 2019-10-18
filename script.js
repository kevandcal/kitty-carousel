(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dots");
    var current = 0;
    var timer;
    var transitioningRightNow;

    setTimeout(moveKitties, 2000);

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            timer = setTimeout(moveKitties, 2000);
            transitioningRightNow = false;
        }
    });

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", getDotClickHandler(i));
    }

    function getDotClickHandler(n) {
        return function(e) {
            if (e.target.classList.contains("on")) {
                return;
            }
            if (transitioningRightNow) {
                return;
            }
            clearTimeout(timer);
            moveKitties(n);
        };
    }

    function moveKitties(next) {
        transitioningRightNow = true;
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("exit");
        dots[current].classList.remove("on");
        dots[current].classList.add("exit");
        if (typeof next == "undefined") {
            current++;
            if (current >= kitties.length) {
                current = 0;
            }
        } else {
            current = next;
        }
        kitties[current].classList.add("onscreen");
        dots[current].classList.add("on");
    }
})();
