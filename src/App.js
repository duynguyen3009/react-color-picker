import React from 'react';
import './App.css';
import ColorPicker  from './components/ColorPicker';
import Reset        from './components/Reset';
import Result       from './components/Result';
import Setting       from './components/Setting';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    };
    this.onResetDefault = this.onResetDefault.bind(this);
  }

  onSetColorActive = (params) => {
    this.setState({
      color : params,
    });
  }
  onChangeFontSize = (value) => {
    console.log(value);
    this.setState({
      fontSize : (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize,
    });
  }

  onResetDefault(value){
    if(value){
      this.setState({
        color: 'red',
        fontSize: 15
      });
    }
  }
  render() {
    return (
      <div className='container mt-50'>
        <div className='row'>
            <ColorPicker color={this.state.color} onClickReceiveColor= { this.onSetColorActive }/>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Setting 
                  fontSize={this.state.fontSize} 
                  onChangeFontSize={ this.onChangeFontSize }
                />
                <Reset onResetDefault={ this.onResetDefault }/>
            </div>
            <Result color={ this.state.color } fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
