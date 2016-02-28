var Demo = React.createClass({
    render:function(){
        var  radioOptions = [
            {value:'newspaper',label:'Newspaper'},
            {value:'radio',label:'Radio'},
            {value:'search',label:'Search'},
        ]
        return (
            <div>Hello world<RadioOption name="referrer" value="newspaper">Newspaper</RadioOption>

                <RadioOptionGroup name="referrer" options={radioOptions} other={true}></RadioOptionGroup>

            </div>
        )
    }
})