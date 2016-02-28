var RadioOtherOption = React.createClass({
    displayName: "RadioOtherOption",

    getInitialState: function () {
        /*默认函数*/
        return {
            checked: true
        };
    },
    /*onChange: function () {/!*自己写的函数*!/
        var input = event.target;
        console.log(event, input);
        this.setState({
            checked: input.checked
        })
    },*/
    componentDidUpdate: function (prevProps, prevState) {
        /*默认函数*/
        //var input = this.refs.input.getDOMNode()
        var input = this.refs.input;

        if (prevState.checked !== input.checked) {
            this.setState({
                checked: input.checked
            });
        }
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                { className: "radio" },
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "radio", value: "other", name: "referrer", ref: "input", onChange: this.onChange }),
                    "other"
                )
            ),
            this.state.checked && React.createElement(
                "label",
                null,
                "Please input:",
                React.createElement("input", { type: "text" })
            )
        );
    }
});