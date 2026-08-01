var btn = document.querySelector(".btn");
var bulb = document.querySelector("#circle");
var color = document.querySelector(".colors");

let flag = 0;

btn.addEventListener("click", function () {
    if (flag === 0) {
        bulb.style.backgroundColor = color.value;
        btn.value = "OFF";
        flag++;
    } else {
        bulb.style.backgroundColor = "whitesmoke";
        btn.value = "ON";
        flag--;
    }
})