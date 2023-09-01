// script.js
document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('selectOption');

    selectElement.addEventListener('change', function() {
        const selectedValue = selectElement.value;
        const optionElements = selectElement.querySelectorAll('option');

        optionElements.forEach(function(option) {
            if (option.value === selectedValue) {
                option.style.color = '#D5D5D5'; // Change font color to D5D5D5
            } else {
                option.style.color = '#000000'; // Change font color to 000000
            }
        });
    });
});
