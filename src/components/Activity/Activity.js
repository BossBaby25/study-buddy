import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';

const Activity = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, []);
    return (
        <div className='activity-container row'>
            <div className="subjects-container col-8 ps-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            subjects.map(subject => <Subject
                                key={subject.id}
                                subject={subject}
                            ></Subject>)
                        }
                </div>
            </div>
            <div className="details-container col-4">
                <h1>details</h1>
            </div>
        </div>
    );
};

export default Activity;