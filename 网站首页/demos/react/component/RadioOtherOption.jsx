var RadioOtherOption = React.createClass({
    getInitialState: function () {/*默认函数*/
        return {
            checked: true
        }
    },
    /*onChange: function () {/!*自己写的函数*!/
        var input = event.target;
        console.log(event, input);
        this.setState({
            checked: input.checked
        })
    },*/
    componentDidUpdate: function (prevProps, prevState) {/*默认函数*/
        //var input = this.refs.input.getDOMNode()
        var input = this.refs.input

        if (prevState.checked !== input.checked) {
            this.setState({
                checked: input.checked
            })
        }
    },
    render: function () {
        return (
            <div>
                <p className="radio">
                    <label>
                        <input type="radio" value="other" name="referrer" ref="input" onChange={this.onChange}/>
                        other
                    </label>
                </p>
                {this.state.checked && (
                    <label>
                        Please input:
                        <input type="text"/>
                    </label>
                )}
            </div>
        )
    }
})