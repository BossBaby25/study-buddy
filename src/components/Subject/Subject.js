import React from 'react';
import './Subject.css';

const Subject = (props) => {
    const { img, name, time } = props.subject;
    
    return (
        <div className='col'>
            <div className='card card-container mb-1 h-80'>
                <img src={img} alt="" className='card-img-top' />
                <div className="card-body">
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Target Duration: {time} hr</p>
                    <button onClick={() =>props.handleClick(props.subject.time)} className='btn btn-secondary ps-5 pe-5'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Subject;
