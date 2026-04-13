document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('inputText');
    var button = document.getElementById('showTextButton');
    var output = document.getElementById('outputText');

    button.addEventListener('click', function () {
        var text = input.value.trim();
        output.textContent = text || 'Inserisci un testo valido';
    });
});

