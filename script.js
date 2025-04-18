function myFunction(button) {
    var x = button.value;
    document.getElementById("demo").innerHTML = x;
}
function myFunction(button) {
    var inputValue = button.value;
    var resultField = document.getElementById("result");

    switch (inputValue) {
        case 'AC':
            resultField.value = '';
            break;
        case 'C':
            resultField.value = resultField.value.slice(0, -1); 
            break;
        case '=':
            try {
                resultField.value = eval(resultField.value);
            } catch (error) {
                resultField.value = 'Error';
            }
            break;
        case 'x':
            resultField.value += '*'; 
            break;
        default:
            resultField.value += inputValue;
            break;
    }
}
