import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from "./pages/HomePage";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


export default App