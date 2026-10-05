const input = document.getElementById('main-input');
const p = document.getElementById('main-p');

const showText = () => {
    p.textContent = input.value;
}

const debounce = (fnc, delay) => {
    let timerId;
    let previousCall;
    let lastCall;

    return function perform() {

        previousCall = lastCall;
        lastCall = Date.now();

        if (previousCall && lastCall - previousCall <= delay) {
            clearTimeout(timerId);
        }

        clearTimeout(timerId);
        timerId = setTimeout(() => fnc(), delay);
    }
}

let debounceShowText = debounce(showText, 300);

input.addEventListener('input', () => {
    debounceShowText();
})