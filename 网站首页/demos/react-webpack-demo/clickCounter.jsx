/**
 * Created by maomao on 15/12/22.
 */
var React = require('react');/*当前目录下有node_modules就行*/
var ClickCounter = React.createClass({
    getInitialState:function(){
      return {
          numClicks:0
      }
    },
    onClick:function(){
      this.setState({
          numClicks:this.state.numClicks + 1
      })
    },
    render:function(){
        return (
            <div onClick={this.onClick}>
                {this.state.numClicks} click
            </div>
        )
    }
})

module.exports = ClickCounter
