import { BrowserRouter, Route, Routes } from "react-router-dom"

import WelcomePage from "./routes/WelcomePage"
import InstructionsPage from "./routes/InstructionsPage"
import RecordingPage from "./routes/RecordingPage"
import UploadingPage from "./routes/UploadingPage"

import styles from './App.module.css'

function App() {

	return (
		<div className={styles.container}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<WelcomePage />} />
					<Route path='/instructions' element={<InstructionsPage />} />
					<Route path='/record' element={<RecordingPage />} />
					<Route path='/upload' element={<UploadingPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App