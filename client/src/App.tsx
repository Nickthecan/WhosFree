import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Plan from "./pages/Plan"
import './styles/App.css'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />}/>
					<Route path="/login" element={<Login />}/>
					<Route path="/signup" element={<SignUp />}/>
					<Route path="/home" element={<Home />}/>
					<Route path="/plan" element={<Plan />}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
