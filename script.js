function headStyle(newHead) {
            let headOne = document.querySelector("h1");
            headOne.innerHTML = newHead;
        }
        function weather() {
            let city = prompt("What city do you live in?");
            let temp = prompt("What temperature is it?");

            if (temp >= 0) {
                headStyle("😄</br>Currently " + temp + "°C in " + city);
            }
            else {
                headStyle("☹️</br>Currently " + temp + "°C in " + city);
            }
        }
        let clickButton = document.querySelector("button");
        clickButton.addEventListener("click", weather);