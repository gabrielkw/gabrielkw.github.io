function dectobin(number) {
    // Converts a decimal number to binary
    return number.toString(2);
}

function dectooct(number) {
    // Converts a decimal number to octal
    return number.toString(8);
}

function dectohex(number) {
    // Converts a decimal number to hexadecimal
    return number.toString(16);
}

function converter() {
    inputs = getInputs();
    tinput = inputs[1];
    baseinput = inputs[2];

    result = parseInt(tinput.value, 10).toString(baseinput.value);

    getById("response").innerHTML = "<p>The value of <strong>" +
        tinput.value +
        "</strong> in base " +
        parseInt(baseinput.value, 10) +
        " is <strong>" +
        result +
        "</strong></p>";
    tinput.value = "";
}

function colorpicker(picker) {
    getById('hex-str').textContent = picker.toHEXString();
    getById('rgb-str').innerHTML = picker.toRGBString();

    getById('rgb').innerHTML =
        Math.round(picker.rgb[0]) + ', ' +
        Math.round(picker.rgb[1]) + ', ' +
        Math.round(picker.rgb[2]);

    getById('hsv').innerHTML =
        Math.round(picker.hsv[0]) + '&deg;, ' +
        Math.round(picker.hsv[1]) + '%, ' +
        Math.round(picker.hsv[2]) + '%';
}