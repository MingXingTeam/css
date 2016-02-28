var RadioOption = React.createClass({
    displayName: "RadioOption",

    propTypes: {
        value: React.PropTypes.string.isRequired, /*必備屬性*/
        name: React.PropTypes.string.isRequired, /*必備屬性*/
        children: React.PropTypes.node
    },
    render: function () {
        return React.createElement(
            "p",
            { className: "radio" },
            React.createElement(
                "label",
                null,
                "hello",
                React.createElement("input", { type: "radio", name: "referrer", value: this.props.value }),
                this.props.children
            )
        );
    }
});