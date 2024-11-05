const inputArea = document.querySelector('.input');

function resetting() {
    inputArea.value = '';
}

function deleteLast() {
    inputArea.value = inputArea.value.slice(0, -1);
}

function calculating(value) {
    inputArea.value += value;
}

function callResult() {
    try {
        const result = inputArea.value;
        inputArea.value = new Function('return ' + result)();
    } catch (error) {
        inputArea.value = 'Error';
    }
}
