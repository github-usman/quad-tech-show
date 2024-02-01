import BookingModal from './components/BookingModal'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SummaryScreen from './pages/SummaryScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/summary/:show-detail" element={<SummaryScreen />} />
					<Route path="/book/:show-detail" element={<BookingModal />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
