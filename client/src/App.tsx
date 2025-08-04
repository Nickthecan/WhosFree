import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Landing from "./pages/Landing"
import './styles/App.css'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />}/>
					<Route path="/login" element={<Login />}/>
					<Route path="/signup" element={<SignUp />}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
