import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Toaster } from "react-hot-toast"

import WelcomePage from "./routes/WelcomePage"
import SchedulePage from "./routes/SchedulePage"
import MenuPage from "./routes/MenuPage"
import HoneyMoonPage from "./routes/HoneyMoonPage"
import InstructionsPage1 from "./routes/InstructionsPage1"
import InstructionsPage2 from "./routes/InstructionsPage2"
import RecordingPage from "./routes/RecordingPage"
import UploadingPage from "./routes/UploadingPage"

import styles from './App.module.css'

function App() {

	return (
		<div className={styles.container}>
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<WelcomePage />} />
					<Route path='/schedule' element={<SchedulePage />} />
					<Route path='/menu' element={<MenuPage />} />
					<Route path='/honey-moon' element={<HoneyMoonPage />} />
					<Route path='/instructions1' element={<InstructionsPage1 />} />
					<Route path='/instructions2' element={<InstructionsPage2 />} />
					<Route path='/record' element={<RecordingPage />} />
					<Route path='/upload' element={<UploadingPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App