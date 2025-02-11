import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div
                style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '10px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #ddd',
                }}
            >
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{data.name}</p>
                <p>Hoàn thành: {data.completed}</p>
                <p>Không hoàn thành: {data.notCompleted}</p>
            </div>
        );
    }

    return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.object),
};

export default CustomTooltip;
