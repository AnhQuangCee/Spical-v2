import React from 'react'
import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Home'
import LicensePage from './Pages/License'
import UploadPage from './Pages/Upload'
import SignUpPage from './Pages/SignUp'
import SignInPage from './Pages/SignIn'
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import Tabbars from './Components/TabBars'

function App() {
	return (
		<div>
			<div className='parent'>
				<Header />
			</div>

			<div className='wrapper'>
				<Welcome />
				<Tabbars />
				<div className='content'>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/license' component={LicensePage} />
						<Route exact path='/upload' component={UploadPage} />
						<Route exact path='/signup' component={SignUpPage} />
						<Route exact path='/signin' component={SignInPage} />
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default App
