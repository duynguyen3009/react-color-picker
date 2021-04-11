import React from 'react';
class ColorPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', 'yellow']
        };
    }
    showColor(color){
        return {
            backgroundColor : color,
        };
    }
    setActiveColor(color){
        this.props.onClickReceiveColor(color);
    }
  render() {
    let elmtColors = this.state.colors.map((color, index) => {
        return  <span 
                    key={index} 
                    className={this.props.color === color ? 'active' : ''}
                    style={this.showColor(color)}
                    onClick={ () => this.setActiveColor(color) }
                >
                </span>;
    });
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    {elmtColors}
                    <hr/>
                </div>
            </div>
        </div>
    );
  }
}

export default ColorPicker;
