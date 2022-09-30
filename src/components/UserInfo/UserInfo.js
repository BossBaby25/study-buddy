import React, { useState } from 'react';

const UserInfo = ({exerciseTime}) => {
    const [breakTime,setbreakTime]=useState(0);
    if (localStorage.getItem("breakTime") === null) {
        localStorage.setItem("breakTime", breakTime);
    }
    const handlebtn = (event) => {
        let allBtn = event.currentTarget.parentElement.children;
        for (const otherBtn of allBtn) {
            if (otherBtn.innerText !== event.currentTarget.innerText) {
                otherBtn.classList.remove('btn-secondary');
                otherBtn.classList.add('btn-light');
            }
        }
        event.currentTarget.classList.add('btn-secondary');
        event.currentTarget.classList.remove('bg-white');
        localStorage.setItem("breakTime", event.currentTarget.innerText.slice(0, -3) + 'min');
        setbreakTime(localStorage.getItem("breakTime"));
    };

    const secondBtns = document.getElementsByClassName('secBtn');
    for (const secondBtn of secondBtns) {
        if (parseInt(secondBtn.innerHTML.slice(0, -1)) === parseInt(localStorage.getItem("breakTime"))) {
            secondBtn.classList.remove('btn-light')
            secondBtn.classList.add('btn-secondary')
        }
    }
    return (
        <div className='sticky-lg-top'>
            <h3>Add A Break</h3>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">10min</button>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">15min</button>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">20min</button>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">25min</button>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">30min</button>
            <h3>Exercise details: </h3>
            <p>Exercise Time: {exerciseTime} hr</p>
            <p>Break time: {localStorage.getItem("breakTime")}</p>
        </div>
    );
};

export default UserInfo;