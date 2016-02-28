var RadioOptionGroup = React.createClass({
    displayName: "RadioOptionGroup",

    propTypes: function () {
        name: React.PropTypes.string.isRequired;
    },
    onChange: function (event) {
        if (this.props.other) {
            this.refs.other.forceUpdate(); /*会调用RadioOtherOption组件的componentDidUpdate*/
        }
    },
    render: function () {
        var name = this.props.name;
        return React.createElement(
            "div",
            { onChange: this.onChange },
            this.props.options.map(function (option) {
                return React.createElement(
                    RadioOption,
                    {
                        name: name,
                        value: option.value,
                        key: option.value },
                    option.label
                );
            }),
            this.props.other && React.createElement(RadioOtherOption, { ref: "other" })
        );
    }
});