
import React, { useState } from 'react';

const UserInfo = ({ exerciseTime, notify }) => {
    const [breakTime, setbreakTime] = useState(0);
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
            <div className='d-flex justify-content-around mb-5'>
                <div>
                    <img className='rounded-circle' src="profile.jpg" alt="" />
                </div>
                <div className='mt-3'>
                    <h5>Meraj Serker</h5>
                    <p><i class="fa-solid fa-location-dot"></i>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='mt-5'>
                    <div className='d-flex justify-content-around bg-info px-5 py-2 rounded-2 bg-opacity-25  mb-3'>
                        <div>
                            <h3><span className='fs-3 font-bold text-dark'>75</span><span className='text-secondary fs-5'>kg</span></h3>
                            <p className='text-center text-secondary'>Weight</p>
                        </div>
                        <div>
                            <h3><span className='fs-3 font-bold text-dark'>5'6"</span></h3>
                            <p className='text-center text-secondary'>height</p>
                        </div>
                        <div>
                            <h3><span className='fs-3 font-bold text-dark'>21</span><span className='text-secondary fs-5'>yrs</span></h3>
                            <p className='text-center text-secondary'>Age</p>
                        </div>
                    </div>
                </div>
            <h3>Add A Break</h3>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">10min</button>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">15min</button>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">20min</button>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">25min</button>
            <button onClick={handlebtn} type="button" className="btn btn-light rounded-5 secBtn me-1">30min</button>
            <h3>Exercise details: </h3>
            <h5>Exercise Time: {exerciseTime} hr</h5>
            <h5>Break time: {localStorage.getItem("breakTime")}</h5>
            <button onClick={notify} className='btn btn-dark'>Target Complete</button>
        </div>
    );
};

export default UserInfo;