const display = document.getElementById("display");
const append=(value) => display.value += value;
const cleardisplay=() => display.value =('')
const deletelast=() => display.value = display.value.slice(0, -1)
const equal=() => display.value = eval(display.value)
function percent() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value / 100;
    }
}
