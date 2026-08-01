const btn = document.querySelector("#btn");
const sts = document.querySelector(".Status");
let check = 0;
btn.addEventListener("click", function () {
    if (check === 0) {
        btn.innerHTML = "Unfollow";
        sts.innerHTML = "Friend";
        sts.style.color = "#1cca50";
        btn.style.backgroundColor = "#a6b2b3";
        check++;
    } else {
        btn.innerHTML = "Follow";
        sts.innerHTML = "Stranger";
        sts.style.color = "#fe3a3a";
        btn.style.backgroundColor = "cadetblue";
        check--;
    }
})