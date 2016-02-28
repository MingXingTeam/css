var RadioOption = React.createClass({
    propTypes:{
        value:React.PropTypes.string.isRequired,/*必備屬性*/
        name:React.PropTypes.string.isRequired,/*必備屬性*/
        children:React.PropTypes.node
    },
    render:function(){
        return (
            <p className="radio">
                <label>
                    hello
                    <input type="radio" name="referrer" value={this.props.value}/>
                    {this.props.children}
                </label>
            </p>
        )
    }
})