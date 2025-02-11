import './style.scss';
import useSurveyData from '../../hooks/surveyData';
import SurveyChart from '../../components/surveyChart';

const Dashboard = () => {
    const {
        totalRecords
    } = useSurveyData();
    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-container-total">
                    <div className="dashboard-container-total-item item-green">
                        <div className="dashboard-container-total-item-bg-image">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TrendingUpIcon"><path d="m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>
                        </div>
                        <div className="dashboard-container-total-item-header">
                            <div className="dashboard-container-total-item-header-title">
                                <span className='dashboard-container-total-item-header-title-text'>Tổng số khảo sát</span>
                                <span className='dashboard-container-total-item-header-title-value'>{totalRecords.completed + totalRecords.notCompleted}</span>
                            </div>
                            <div className="dashboard-container-total-item-header-icon">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="dashboard-container-total-item-content">
                            {/* <span>Last Month</span> */}
                        </div>
                    </div>
                    <div className="dashboard-container-total-item item-purple">
                        <div className="dashboard-container-total-item-bg-image">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TrendingUpIcon"><path d="m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>
                        </div>
                        <div className="dashboard-container-total-item-header">
                            <div className="dashboard-container-total-item-header-title">
                                <span className='dashboard-container-total-item-header-title-text'>Tổng số hoàn thành khảo sát</span>
                                <span className='dashboard-container-total-item-header-title-value'>{totalRecords.completed}</span>
                            </div>
                            <div className="dashboard-container-total-item-header-icon">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="dashboard-container-total-item-content">
                            {/* <span>Last Month</span> */}
                        </div>
                    </div>
                    <div className="dashboard-container-total-item item-blue">
                        <div className="dashboard-container-total-item-bg-image">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TrendingUpIcon"><path d="m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>
                        </div>
                        <div className="dashboard-container-total-item-header">
                            <div className="dashboard-container-total-item-header-title">
                                <span className='dashboard-container-total-item-header-title-text'>Tổng số không hoàn thành khảo sát</span>
                                <span className='dashboard-container-total-item-header-title-value'>{totalRecords.notCompleted}</span>
                            </div>
                            <div className="dashboard-container-total-item-header-icon">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="dashboard-container-total-item-content">
                            {/* <span>Last Month</span> */}
                        </div>
                    </div>
                    {/* <div className="dashboard-container-total-item item-yellow">
                        <div className="dashboard-container-total-item-bg-image">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TrendingUpIcon"><path d="m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>
                        </div>
                        <div className="dashboard-container-total-item-header">
                            <div className="dashboard-container-total-item-header-title">
                                <span className='dashboard-container-total-item-header-title-text'>Total Users</span>
                                <span className='dashboard-container-total-item-header-title-value'>886</span>
                            </div>
                            <div className="dashboard-container-total-item-header-icon">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="dashboard-container-total-item-content">
                            <span>Last Month</span>
                        </div>
                    </div> */}
                </div>
                <div className="dashboard-container-chart">
                    <SurveyChart />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
