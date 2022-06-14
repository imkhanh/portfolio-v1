import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
