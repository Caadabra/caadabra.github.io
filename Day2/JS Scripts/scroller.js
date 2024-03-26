document.addEventListener("scroll", function() {
    // Get height of the viewport, the scroll position and the percentage scrolled
    var viewportHeight = window.innerHeight;
    var scrollPosition = window.scrollY;
    var scrollPercentage = (scrollPosition / viewportHeight) * 100;
    
    // Calculate the value of polygon point using 65 (the initial percentage of position) minus the percentage scrolled multiplied by 20
    var newClipPath = "polygon(0 0, 45% 0, " + (65 - (30 * scrollPercentage / 100)) + "% 100%, 0% 100%, 0% 100%)";
    // Apply the new clip path to the triangle element
    if ((65 - (30 * scrollPercentage / 100)) >= 45) {
        document.querySelector(".triangle").style.clipPath = newClipPath;
    } else {
        document.querySelector(".triangle").style.clipPath = "polygon(0 0, 45% 0, 45% 100%, 0% 100%, 0% 100%)";
    }
});
