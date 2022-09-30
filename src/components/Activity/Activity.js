import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';

const Activity = () => {
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
                <h3>Add A Break</h3>
                <button type="button" className="btn btn-secondary rounded-5 me-1">10min</button>
                <button type="button" className="btn btn-secondary rounded-5 me-1">15min</button>
                <button type="button" className="btn btn-secondary rounded-5 me-1">20min</button>
                <button type="button" className="btn btn-secondary rounded-5 me-1">25min</button>
                <button type="button" className="btn btn-secondary rounded-5 me-1">30min</button>
                <h3>Exercise details: </h3>
                <p>Exercise Time: {exerciseTime} hr</p>
                <p>Break time: </p>
            </div>
        </div>
    );
};

export default Activity;