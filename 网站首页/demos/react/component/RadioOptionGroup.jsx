var RadioOptionGroup = React.createClass({
    propTypes:function(){
      name:React.PropTypes.string.isRequired
    },
    onChange:function(event){
        if(this.props.other){
            this.refs.other.forceUpdate()/*会调用RadioOtherOption组件的componentDidUpdate*/
        }
    },
    render:function(){
        var name = this.props.name;
        return (
            <div onChange={this.onChange}>
                {
                    this.props.options.map(function(option){
                        return (
                            <RadioOption
                                name={name}
                                value={option.value}
                                key={option.value}>{option.label}</RadioOption>
                        )
                    })
                }

                {this.props.other && <RadioOtherOption ref="other"/>}
            </div>
        )
    }
})