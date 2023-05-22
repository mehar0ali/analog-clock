var hourHand = document.getElementById('hourHand')
var minHand = document.getElementById('minHand')
var secHand = document.getElementById('secHand')

setInterval(() => {
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    hrotation = 30*hour + min/2;
    mrotation = 6*min;
    srotation = 6*sec;
    
    hourHand.style.transform = "rotate(" + hrotation + "deg)";
    minHand.style.transform = "rotate(" + mrotation + "deg)";
    secHand.style.transform = "rotate(" + srotation + "deg)";
}, 1000);