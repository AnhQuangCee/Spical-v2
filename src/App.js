import React from 'react'
import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Home'
import LicensePage from './Pages/License'
import UploadPage from './Pages/Upload'
import SignUpPage from './Pages/SignUp'
import SignInPage from './Pages/SignIn'
import Header from './Components/Header'

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/license' component={LicensePage} />
				<Route exact path='/upload' component={UploadPage} />
				<Route exact path='/signup' component={SignUpPage} />
				<Route exact path='/signin' component={SignInPage} />
			</Switch>
		</div>
	)
}

export default App
