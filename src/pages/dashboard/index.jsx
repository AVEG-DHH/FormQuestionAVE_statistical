import './style.scss';
import SurveyChart from '../../components/surveyChart';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="dashboard-content">
                    <SurveyChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
