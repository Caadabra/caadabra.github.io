document.addEventListener("scroll", function() {
    // Get height of the viewport, the scroll position and the percentage scrolled
    var viewportHeight = window.innerHeight;
    var scrollPosition = window.scrollY;
    var scrollPercentage = (scrollPosition / viewportHeight) * 100;
    // Calculate the value of polygon point using 65 (the initial percentage of position) minus the percentage scrolled multiplied by 20
    var BottomTriPoint = (65 - (30 * scrollPercentage / 100))
    // Calculate the value of polygon point using 65 (the initial percentage of position) minus the percentage scrolled multiplied by 20
    var newClipPath = "polygon(0 0, 45% 0, " + (BottomTriPoint) + "% 100%, 0% 100%, 0% 100%)";
    // Apply the new clip path to the triangle element
    if (BottomTriPoint >= 45 && scrollPercentage < 90) {
        document.querySelector(".triangle").style.clipPath = newClipPath;
    } else {
        document.querySelector(".triangle").style.clipPath = "polygon(0 0, 45% 0, 45% 100%, 0% 100%, 0% 100%)";
        console.log(scrollPercentage)
    }
    if (scrollPercentage > 120) {
        document.querySelector(".triangle").style.clipPath = "polygon(0 0, " + ((50 * scrollPercentage / 100)-15) + "% 0, " + ((50 * scrollPercentage / 100)-15) + "% 100%, 0% 100%, 0% 100%)";
    }
});
