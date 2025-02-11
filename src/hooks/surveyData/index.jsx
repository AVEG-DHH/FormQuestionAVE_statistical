import { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../../../firebase';

const questionOrder = [
    { key: 'Age', label: 'Q1:', name: 'Age' },
    { key: 'questionHomeEx', label: 'Q2:', name: 'questionHomeEx' },
    { key: 'height', label: 'Q3: ', name: 'Height' },
    { key: 'weight', label: 'Q4: ', name: 'Weight' },
    { key: 'questionGoal', label: 'Q5: ', name: 'questionGoal' },
    { key: 'questionExercise', label: 'Q6: ', name: 'questionExercise' },
    { key: 'questionHealthIssues', label: 'Q7: ', name: 'questionHealthIssues' },
    { key: 'questionYourBuild', label: 'Q8: ', name: 'questionYourBuild' },
    { key: 'questionDreambody', label: 'Q9: ', name: 'questionDreambody' },
    { key: 'questionTarget', label: 'Q10: ', name: 'questionTarget' },
    { key: 'questionOftenEx', label: 'Q11: ', name: 'questionOftenEx' }, 
    { key: 'questionStruggle', label: 'Q12: ', name: 'questionStruggle' },
    { key: 'questionEnergyLevel', label: 'Q13: ', name: 'questionEnergyLevel' },
    { key: 'questionTypeExercise', label: 'Q14: ', name: 'questionTypeExercise' },
    { key: 'questionStruggleSleep', label: 'Q15: ', name: 'questionStruggleSleep' },
    { key: 'questionSleep', label: 'Q16: ', name: 'questionSleep' },
    { key: 'questionWorkoutPD', label: 'Q17: ', name: 'questionWorkoutPD' },
    { key: 'questionWorkoutPref', label: 'Q18: ', name: 'questionWorkoutPref' },
    { key: 'questionEquipment', label: 'Q19: ', name: 'questionEquipment' },
    { key: 'questionMainReason', label: 'Q20: ', name: 'questionMainReason' },
    { key: 'questionDiet', label: 'Q21: ', name: 'questionDiet' },
    { key: 'questionTargetWeight', label: 'Q22: ', name: 'questionTargetWeight' },
    { key: 'questionAge', label: 'Q23: ', name: 'questionAge' },
    { key: 'EmailCustomer', label: 'Q24: ', name: 'EmailCustomer' },
    { key: 'questionName', label: 'Q25: ', name: 'questionName' },
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

            questionOrder.forEach(({ key, name, label }) => {
                questionStats[key] = { question: label, name: name, completed: 0, notCompleted: 0 };
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
                name: '',
                completed: completedData.length,
                notCompleted: notCompletedData.length,
            });
        };

        fetchData();
    }, []);

    return { surveyStats, totalRecords };
};

export default useSurveyData;
