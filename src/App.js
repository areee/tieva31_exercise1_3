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
      tf1: "",
      tf2: "",
      tf3: "",
    }
  }

  mouseMove = (event) => {
		// somewhat random way to come up with a number between 0..255 to be used for a color
		const nc = Math.min(255, (255 * event.clientY / event.clientX))&0xff;
		this.setState({
			/*bgColor: nc,*/
		});
	}



  render() {
    return (
      <MuiThemeProvider>
        <Paper style={{width: 600, margin: 20, padding: 20}} onMouseMove={this.mouseMove}>
          <div>
            <TextField value={this.state.tf1} id="tf1"/>
          </div>
          <div>
            <TextField value={this.state.tf2} id="tf2"/>
          </div>
          <div>
            <TextField value={this.state.tf3} id="tf3"/>
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
