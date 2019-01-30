var devTypes = ["Web", "Frontend", "Backend"];

var devTypeSpan = document.getElementById("dev-type");

var i = 0;
setInterval(() => {
    devTypeSpan.textContent = devTypes[i];
    i = (i + 1) % 3;
    devTypeSpan.style.transform = "translateY(0px)";
}, 1800);
