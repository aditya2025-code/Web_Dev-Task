const btn = document.querySelector("#btn");
const result = document.querySelector("#ans");
let inp1, inp2, opt;

btn.addEventListener("click", () => {
    const input1 = document.getElementById("input1").value;
    const input2 = document.querySelector("#input2").value;
    opt = document.querySelector("#opt").value;

    inp1 = Number(input1);
    inp2 = Number(input2);

    console.log(inp1, inp2, opt);

    switch (opt) {
        case '+':
            result.innerHTML = inp1 + inp2;
            break;
        case '-':
            result.innerHTML = inp1 - inp2;
            break;
        case '*':
            result.innerHTML = inp1 * inp2;
            break;
        case '/':
            result.innerHTML = inp1 / inp2;
            break;
        default:
            // result.style.textAlign = "left;"
            result.innerHTML = "Entered Wrong Oparetor";

            break;
    }
})


