import React, { useEffect, useState } from 'react';
import AddActivity from '../AddActivity/AddActivity';
import './Navigation.css'
import picture from './picture.jpg'

const Navigation = ({adActivity}) => {
    const [interval, settInterval] = useState(0);
    
    const handleBreak = (time) => {
        settInterval(time);
        localStorage.setItem('cart', JSON.stringify(time))       
    }

    useEffect( () => {
        const breakTime = localStorage.getItem('cart');
        settInterval(breakTime);
    }, [])
    
    return (
        <div className='navigation ms-5'>
             <div className=' mt-5 d-flex'>
                <img src={picture} alt="" className='w-10 rounded-circle' />
                <div className='ms-3'>
                    <h6>Name: Arnold</h6>
                    <p>USA</p>
                </div>
             </div>
             <div className=' d-flex ps-5 pt-2 mt-1 rounded'>
                <div>
                    <h3>75kg</h3>
                    <p>Weight</p>
                </div>
                <div className='ps-5'>
                    <h3>6.2</h3>
                    <p>Height</p>
                </div>
                <div className='ps-5'>
                    <h3>27Yrs</h3>
                    <p>Age</p>
                </div>
             </div>
             <h5 className='py-3'>Add a Break</h5>
             <div className='bg-info' >
                <button onClick={() => handleBreak(10)} className='btn btn-secondary m-3'><span>10</span>s</button>
                <button onClick={() => handleBreak(15)} className='btn btn-secondary m-3'><span>15</span>s</button>
                <button onClick={() => handleBreak(20)} className='btn btn-secondary m-3'><span>20</span>s</button>
                <button onClick={() => handleBreak(25)} className='btn btn-secondary m-3'><span>25</span>s</button>
                <button onClick={() => handleBreak(30)} className='btn btn-secondary m-3'><span>30</span>s</button>
             </div>
             <AddActivity adActivity={adActivity} interval={interval}></AddActivity>
        </div>
    );
};

export default Navigation;