document.addEventListener("scroll", function() {
    // Get height of the viewport, the scroll position and the percentage scrolled
    var viewportHeight = window.innerHeight;
    var scrollPosition = window.scrollY;
    var scrollPercentage = (scrollPosition / viewportHeight) * 100;
    // Calculate the value of polygon point using 65 (the initial percentage of position) minus the percentage scrolled multiplied by 30
    var BottomTriPoint = (65 - (30 * scrollPercentage / 100))
    // Apply the new clip path to the triangle element
    var newClipPath = "polygon(0 0, 35% 0, " + (BottomTriPoint) + "% 100%, 0% 100%, 0% 100%)";

    if (BottomTriPoint >= 35 && scrollPercentage < 100) {
        document.querySelector(".triangle").style.clipPath = newClipPath;
    } else {
        document.querySelector(".triangle").style.clipPath = "polygon(0 0, 35% 0, 35% 100%, 0% 100%, 0% 100%)";
    }
    var CombineTriPoint = ((50 * (scrollPercentage-50) / 100)-BottomTriPoint+13)
    if (scrollPercentage > 140) {
        document.querySelector(".triangle").style.clipPath = "polygon(0 0, " + (CombineTriPoint) + "% 0, " + (CombineTriPoint) + "% 100%, 0% 100%, 0% 100%)";
    }
});