export const processSurveyData = (completedData, notCompletedData) => {
    const totalCompleted = completedData.length;
    const totalNotCompleted = notCompletedData.length;
    const totalResponses = totalCompleted + totalNotCompleted;

    if (totalResponses === 0) {
        return [
            { name: 'Hoàn thành', value: 0 },
            { name: 'Không hoàn thành', value: 0 },
        ];
    }

    const completedPercent = ((totalCompleted / totalResponses) * 100).toFixed(2);
    const notCompletedPercent = ((totalNotCompleted / totalResponses) * 100).toFixed(2);

    return [
        { name: 'Hoàn thành', value: parseFloat(completedPercent) },
        { name: 'Không hoàn thành', value: parseFloat(notCompletedPercent) },
    ];
};
