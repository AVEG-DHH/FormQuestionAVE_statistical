import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useSurveyData from '../../hooks/surveyData';
import CustomTooltip from '../tooltip';
import './style.scss';

const SurveyChart = () => {
    const {
        surveyStats,
    } = useSurveyData();

    if (!surveyStats) return <p>Đang tải dữ liệu...</p>;

    return (
        <div>
            <ResponsiveContainer width="100%" height={600}>
                <BarChart data={surveyStats} margin={{ bottom: 120 }} className="survey-chart">
                    <XAxis
                        dataKey="question"
                        type="category"
                        width={200}
                        tickFormatter={(label) => label.replace(': ', ':\n')}
                    />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="completed" fill="#82ca9d" name="Hoàn thành" />
                    <Bar dataKey="notCompleted" fill="#ff6b6b" name="Không hoàn thành" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SurveyChart;
