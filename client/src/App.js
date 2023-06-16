import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom'
import SigninPage from './authPages/SigninPage/SigninPage'
import SignupPage from './authPages/SignupPage/SignupPage'
import Dashboard from './Dashboard/Dashboard'
import './App.css'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/signin'>
						<SigninPage />
					</Route>
					<Route exact path='/signup'>
						<SignupPage />
					</Route>
					<Route exact path='/dashboard'>
						<Dashboard />
					</Route>
					<Route path='/'>
						<Navigate to='/dashboard' />
					</Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
