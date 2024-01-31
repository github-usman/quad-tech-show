import Footer from './components/Footer';
import Home from './pages/Home';
import SummaryScreen from './pages/SummaryScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/summary/:show-detail' element={<SummaryScreen />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
