const input = document.querySelector("#row")

input.addEventListener("keyup", (e) => {

    let string = ""


    n = e.target.value

    if (n === 0) {

        document.querySelector("#result").innerHTML = ""
    } else if (n > 0) {

        for (let i = 1; i <= n; i++) {
            // printing spaces
            for (let j = n; j > i; j--) {
                string += " ";
            }
            // printing star
            for (let k = 0; k < i * 2 - 1; k++) {
                if (k === 0 || k === 2 * i - 2) {
                    string += "*";
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        // downside diamond
        for (let i = 1; i <= n - 1; i++) {
            // printing spaces
            for (let j = 0; j < i; j++) {
                string += " ";
            }
            // printing star
            for (let k = (n - i) * 2 - 1; k >= 1; k--) {
                if (k === 1 || k === (n - i) * 2 - 1) {
                    string += "*";
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        document.querySelector("#result").innerHTML = string
    } else {
        alert("Pozitif bir sayı giriniz")
    }
})