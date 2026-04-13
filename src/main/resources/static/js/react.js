(function () {
    var e = React.createElement;

    function ReactButtonPage() {
        var useState = React.useState;
        var _a = useState(''), inputValue = _a[0], setInputValue = _a[1];
        var _b = useState('testo qui'), buttonText = _b[0], setButtonText = _b[1];
        var _c = useState(''), error = _c[0], setError = _c[1];

        function onSubmit(event) {
            event.preventDefault();
            var cleanValue = inputValue.trim();

            if (!cleanValue) {
                setError('Il testo e obbligatorio.');
                return;
            }

            setError('');
            setButtonText(cleanValue);
        }

        return e('section', { className: 'react-card' }, [
            e('h1', { key: 'title' }, 'React static demo'),
            e('p', { key: 'desc' }, 'Inserisci un testo obbligatorio: verra mostrato nella parte finale del pulsante.'),
            e('form', { key: 'form', className: 'form-row', onSubmit: onSubmit }, [
                e('input', {
                    key: 'input',
                    type: 'text',
                    value: inputValue,
                    required: true,
                    placeholder: 'Scrivi il testo da inserire nel bottone',
                    onChange: function (event) { setInputValue(event.target.value); }
                }),
                e('button', { key: 'button', className: 'elegant-button', type: 'submit' }, [
                    e('span', { key: 'label', className: 'button-static' }, 'Mostra: '),
                    e('span', { key: 'value' }, buttonText)
                ])
            ]),
            error ? e('p', { key: 'error', style: { color: '#c62828', marginTop: '10px' } }, error) : null
        ]);
    }

    var rootElement = document.getElementById('react-root');
    ReactDOM.createRoot(rootElement).render(e(ReactButtonPage));
})();

