import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home, TipCalculator, Error, CaloriesCalculator } from "./pages"
import { Navbar } from "./components"

const App = () => {
    return (
        <div className="font-wix bg-[#15171d]">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tip-calculator" element={<TipCalculator />} />
                    <Route path="/calories-calculator" element={<CaloriesCalculator />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App