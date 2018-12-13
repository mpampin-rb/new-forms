import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Main from './container/Main'
import theme from './theme'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
