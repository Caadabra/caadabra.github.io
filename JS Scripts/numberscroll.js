// Progress bar functionality
let circles = document.querySelectorAll('.circle');
let counter = 0;

window.addEventListener('scroll', function () {
    if (counter === 0 && isScrolledIntoView(circles[0])) {
        startCountingFast(circles[0], 14132, circles[0].getAttribute('data-text'));
        counter++;
    } else if (counter === 1 && isScrolledIntoView(circles[1])) {
        startCounting(circles[1], 1391, circles[1].getAttribute('data-text'));
        counter++;
    } else if (counter === 2 && isScrolledIntoView(circles[2])) {
        startCountingWithDecimal(circles[2], 4.9, circles[2].getAttribute('data-text'));
        counter++;
    }
});

function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function startCounting(circle, target, text) {
    let currentValue = 0;
    let startTime = Date.now();
    let duration = target + 500;
    let numberElement = circle.querySelector('.number');
    let textElement = circle.querySelector('.circle-text');

    let interval = setInterval(function () {
        let timePassed = Date.now() - startTime;
        let progress = timePassed / duration;

        if (progress > 1) {
            progress = 1;
        }

        currentValue = Math.floor(progress * target);
        numberElement.textContent = numberWithCommas(currentValue);
        textElement.textContent = text;

        if (currentValue >= target) {
            numberElement.textContent = numberWithCommas(target);
            textElement.textContent = text;
            clearInterval(interval);
        }
    }, 1);
}

function startCountingFast(circle, target, text) {
    let currentValue = 0;
    let startTime = Date.now();
    let duration = target / 4;
    let numberElement = circle.querySelector('.number');
    let textElement = circle.querySelector('.circle-text');

    let interval = setInterval(function () {
        let timePassed = Date.now() - startTime;
        let progress = timePassed / duration;

        if (progress > 1) {
            progress = 1;
        }

        currentValue = Math.floor(progress * target);
        numberElement.textContent = numberWithCommas(currentValue);
        textElement.textContent = text;

        if (currentValue >= target) {
            numberElement.textContent = numberWithCommas(target);
            textElement.textContent = text;
            clearInterval(interval);
        }
    }, 1);
}

function startCountingWithDecimal(circle, target, text) {
    let currentValue = 0;
    let startTime = Date.now();
    let duration = target * 500;
    let numberElement = circle.querySelector('.number');
    let textElement = circle.querySelector('.circle-text');

    let interval = setInterval(function () {
        let timePassed = Date.now() - startTime;
        let progress = timePassed / duration;

        if (progress > 1) {
            progress = 1;
        }

        currentValue = (progress * target).toFixed(1); // Round to one decimal point
        numberElement.textContent = numberWithCommas(currentValue);
        textElement.textContent = text;

        if (currentValue >= target) {
            numberElement.textContent = numberWithCommas(target.toFixed(1));
            textElement.textContent = text;
            clearInterval(interval);
        }
    }, 10);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
