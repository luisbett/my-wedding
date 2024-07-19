import { Route, Routes, useLocation } from "react-router-dom"

import { AnimatePresence } from "framer-motion"

import WelcomePage from "../routes/WelcomePage"
import SchedulePage from "../routes/SchedulePage"
import MenuPage from "../routes/MenuPage"
import HoneyMoonPage from "../routes/HoneyMoonPage"
import InstructionsPage1 from "../routes/InstructionsPage1"
import InstructionsPage2 from "../routes/InstructionsPage2"
import RecordingPage from "../routes/RecordingPage"
import UploadingPage from "../routes/UploadingPage"

export default function AnimatedRoutes() {

    const location = useLocation()

	return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<WelcomePage />} />
                <Route path='/schedule' element={<SchedulePage />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/honey-moon' element={<HoneyMoonPage />} />
                <Route path='/instructions1' element={<InstructionsPage1 />} />
                <Route path='/instructions2' element={<InstructionsPage2 />} />
                <Route path='/record' element={<RecordingPage />} />
                <Route path='/upload' element={<UploadingPage />} />
            </Routes>
        </AnimatePresence>
	);
};