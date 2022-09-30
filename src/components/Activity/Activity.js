import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';
import UserInfo from '../UserInfo/UserInfo';

const Activity = (props) => {
    const [subjects, setSubjects] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, []);
    const handleClick = (subject) => {
        // console.log(subject);
        // exerciseTime.push(subject);
        // const newTime =[...exerciseTime,subject];
        const newTime = exerciseTime + subject;
        setExerciseTime(newTime);
    }
    return (
        <div className='activity-container row'>
            <div className="subjects-container col-lg-8 ps-5 col-sm-12">
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
                    {
                        subjects.map(subject => <Subject
                            key={subject.id}
                            subject={subject}
                            handleClick={handleClick}
                        ></Subject>)
                    }
                </div>
            </div>
            <div className="details-container col-4 ps-5">
                <UserInfo 
                exerciseTime={exerciseTime} 
                notify={props.notify}
                ></UserInfo>
            </div>
        </div>
    );
};

export default Activity;