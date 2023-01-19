// import necessary components
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import pages
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"
import Service from "./components/pages/Service"
// import partials
import Header from "./components/partials/Header"
// import simulated api data
import serviceDetails from "./data/serviceDetails"

const App = () => {
	let services = [
		"Deep Cleaning",
		"Filling",
		"Gum Massage",
		"Root Canal",
		"Oral Mud Bath",
	]
	return (
		<>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route 
            path="/services" 
            element={<Services services={serviceDetails}/>} 
          />
          <Route 
            path="/services/:id"
            element={<Service services={serviceDetails}/>}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
		</>
	)
}
export default App