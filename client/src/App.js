import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom'
import SigninPage from './pages/authPages/SigninPage/SigninPage'
import SignupPage from './pages/authPages/SignupPage/SignupPage'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/signin' element={<SigninPage />} />

					<Route path='/signup' element={<SignupPage />} />

					<Route path='/dashboard' element={<Dashboard />} />

					<Route path='/' element={<Navigate to='/dashboard' />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
