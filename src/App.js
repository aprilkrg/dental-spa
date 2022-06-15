import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import serviceDetails from "./data/serviceDetails"

import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Services from "./components/pages/Services"
import Service from "./components/pages/Service"
import Header from "./components/partials/Header"

function App() {
	let services = [
		"Deep Cleaning",
		"Filling",
		"Gum Massage",
		"Root Canal",
		"Oral Mud Bath",
	]
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" 
					element={<Services services={services} servicesArr={serviceDetails}/>} 
				/>
				<Route path="/services/:id" 
					element={<Service services={serviceDetails} />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
export default App
