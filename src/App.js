import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

class App extends Component {
  constructor(){
    super();
    this.state={
      tf1: "Mouse was clicked: ",
      tf2: "Mouse moved: ",
      tf3: "Mouse wheel event: ",
      w: 0,
    }
  }

  mouseMove = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    var result = "Mouse moved: x: " + x + ", y: " + y;
		this.setState({
			tf2: result,
		});
	}

  mouseDown = (event) => {
    var result = "Mouse was clicked: " + event.target.id;
    this.setState({
      tf1: result,
    });
  }

  wheel = (event) => {
    var result = this.state.w;
    result = result+1;
    var result1 = "Mouse wheel event: " + result + " clicks";

    this.setState({
      tf3: result1,
      w: result,
    });
  }



  render() {
    return (
      <MuiThemeProvider>
        <Paper style={{width: 300, margin: 20, padding: 20}} onMouseMove={this.mouseMove} onWheel={this.wheel} >
          <div onMouseDown={this.mouseDown}>
            <TextField value={this.state.tf1} id="button1"/>
          </div>
          <div onMouseDown={this.mouseDown}>
            <TextField value={this.state.tf2} id="button2"/>
          </div>
          <div onMouseDown={this.mouseDown}>
            <TextField  value={this.state.tf3} id="button3"/>
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
