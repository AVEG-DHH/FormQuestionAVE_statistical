import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SurveyChart from "./components/surveyChart";
import Dashboard from "./pages/dashboard";
import Layout from './components/layout';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="/survey" element={<SurveyChart />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
