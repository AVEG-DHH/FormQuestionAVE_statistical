import { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../../../firebase';

const questionOrder = [
    { key: 'Age', label: 'Q1: ' },
    { key: 'questionHomeEx', label: 'Q2: ' },
    { key: 'height', label: 'Q3: ' },
    { key: 'weight', label: 'Q4: ' },
    { key: 'questionGoal', label: 'Q5: ' },
    { key: 'questionExercise', label: 'Q6: ' },
    { key: 'questionHealthIssues', label: 'Q7: ' },
    { key: 'questionYourBuild', label: 'Q8: ' },
    { key: 'questionDreambody', label: 'Q9: ' },
    { key: 'questionTarget', label: 'Q10: ' },
    { key: 'questionOftenEx', label: 'Q11: ' },
    { key: 'questionStruggle', label: 'Q12: ' },
    { key: 'questionEnergyLevel', label: 'Q13: ' },
    { key: 'questionTypeExercise', label: 'Q14: ' },
    { key: 'questionStruggleSleep', label: 'Q15: ' },
    { key: 'questionSleep', label: 'Q16: ' },
    { key: 'questionWorkoutPD', label: 'Q17: ' },
    { key: 'questionWorkoutPref', label: 'Q18: ' },
    { key: 'questionEquipment', label: 'Q19: ' },
    { key: 'questionMainReason', label: 'Q20: ' },
    { key: 'questionDiet', label: 'Q21: ' },
    { key: 'questionTargetWeight', label: 'Q22: ' },
    { key: 'questionAge', label: 'Q23: ' },
    { key: 'EmailCustomer', label: 'Q24: ' },
    { key: 'questionName', label: 'Q25: ' },
];

const useSurveyData = () => {
    const [surveyStats, setSurveyStats] = useState(null);
    const [totalRecords, setTotalRecords] = useState({ completed: 0, notCompleted: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const completedRef = collection(db, 'customer-answer');
            const notCompletedRef = collection(db, 'customer-answer-not-complete');

            const completedSnapshot = await getDocs(completedRef);
            const notCompletedSnapshot = await getDocs(notCompletedRef);

            const completedData = completedSnapshot.docs.map((doc) => doc.data());
            const notCompletedData = notCompletedSnapshot.docs.map((doc) => doc.data());

            let questionStats = {};

            questionOrder.forEach(({ key, label }) => {
                questionStats[key] = { question: label, completed: 0, notCompleted: 0 };
            });

            completedData.forEach((response) => {
                questionOrder.forEach(({ key }) => {
                    if (response[key] !== null && response[key] !== undefined) {
                        questionStats[key].completed += 1;
                    }
                });
            });

            notCompletedData.forEach((response) => {
                questionOrder.forEach(({ key }) => {
                    if (response[key] === null || response[key] === undefined) {
                        questionStats[key].notCompleted += 1;
                    }
                });
            });

            setSurveyStats(Object.values(questionStats));
            setTotalRecords({
                label: '',
                completed: completedData.length,
                notCompleted: notCompletedData.length,
            });
        };

        fetchData();
    }, []);

    return { surveyStats, totalRecords };
};

export default useSurveyData;
