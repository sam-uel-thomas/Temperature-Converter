document.addEventListener('DOMContentLoaded', function() {
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const inputValue = document.getElementById('value');
    const outputValue = document.getElementById('output-value');
    const outputUnit = document.getElementById('output-unit');

    function convert() {
        const from = fromSelect.value;
        const to = toSelect.value;
        const value = parseFloat(inputValue.value);

        if (value === '' || isNaN(value)) {
            outputValue.textContent = '';
            outputUnit.textContent = '';
            return;
        }

        let result;
        if (from === to) {
            result = value;
        }
        else if (from === 'CM' && to === 'M') {
            result = value / 100;
        }
        else if (from === 'CM' && to === 'IN') {
            result = value / 2.54;
        }
        else if (from === 'CM' && to === 'FT') {
            result = value / 30.48;
        }
        else if (from === 'M' && to === 'CM') {
            result = value * 100;
        }
        else if (from === 'M' && to === 'IN') {
            result = value / 0.0254;
        }
        else if (from === 'M' && to === 'FT') {
            result = value / 0.3048;
        }
        else if (from === 'IN' && to === 'CM') {
            result = value * 2.54;
        }
        else if (from === 'IN' && to === 'M') {
            result = value * 0.0254;
        }
        else if (from === 'IN' && to === 'FT') {
            result = value / 12;
        }
        else if (from === 'FT' && to === 'CM') {
            result = value * 30.48;
        }
        else if (from === 'FT' && to === 'M') {
            result = value * 0.3048;
        }
        else if (from === 'FT' && to === 'IN') {
            result = value * 12;
        }

        outputValue.textContent = result.toFixed(2);
        outputUnit.textContent = to;
    }

    fromSelect.addEventListener('change', convert);
    toSelect.addEventListener('change', convert);
    inputValue.addEventListener('input', convert);
});