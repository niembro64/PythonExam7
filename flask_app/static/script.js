(function () {
    var parallax = document.querySelectorAll("body"),
        speed = 0.5;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + windowYOffset * speed + "px";

            el.style.backgroundPosition = elBackgrounPos;
        });
    };
})();

var m = document.getElementById("mobileqr");
var q = document.getElementById("qrqr");

var clicked = true;
function growQr(ele) {
    if (clicked) {

        // m.style["width"] = "100px";
        m.style["height"] = "150px";
        q.style["height"] = "80px";
        
        
        // m.style["width"] = "100px";
        // m.style["height"] = "100px";
        // m.style["border"] = "2px solid black";
        // m.style["border-radius"] = "4px";
        clicked = false;
    } else {
        
        // m.style["width"] = "10px";
        m.style["height"] = "0px";
        q.style["height"] = "0px";


        // m.style["width"] = "0px";
        // m.style["height"] = "0px";
        // m.style["border"] = "0px";
        // m.style["border-radius"] = "0px";
        clicked = true;
    }
}
