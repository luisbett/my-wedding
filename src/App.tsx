import { BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import AnimatedRoutes from "./components/AnimatedRoutes"
import styles from './App.module.css'

function App() {
	return (
		<div className={styles.container}>
			<Toaster />
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</div>
	);
};

export default App