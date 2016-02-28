var Demo = React.createClass({
    displayName: 'Demo',

    render: function () {
        var radioOptions = [{ value: 'newspaper', label: 'Newspaper' }, { value: 'radio', label: 'Radio' }, { value: 'search', label: 'Search' }];
        return React.createElement(
            'div',
            null,
            'Hello world',
            React.createElement(
                RadioOption,
                { name: 'referrer', value: 'newspaper' },
                'Newspaper'
            ),
            React.createElement(RadioOptionGroup, { name: 'referrer', options: radioOptions, other: true })
        );
    }
});