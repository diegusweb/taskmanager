// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import ProjectsList from './ProjectsList'
import NewProject from './NewProject'

class App extends Component {
  render () {
	return (
	  <BrowserRouter>
		<div>
		  <Header />
		  <Switch>
			<Route exact path='/' component={ProjectsList} />
			<Route path='/create' component={NewProject} />
		  </Switch>
		</div>
	  </BrowserRouter>
	)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))