import React, { useEffect, useState  } from 'react';
import logo from './image/logo.png'
import './Activity.css'
import SingleActivity from '../SIngleActivity/SingleActivity';
import AddActivity from '../AddActivity/AddActivity';


const Activity = ({addActivity}) => {
    const [activities , setActivities] =  useState([])
    useEffect( () => {
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    // console.log(activities);

    return (
        <div className='activity'>
            <div className='my-5 d-flex'>
                <img src={logo} alt=""  className='logo'/>
                <h3 className='mt-4 ml-2 italic text-success'>Fitness Club </h3>
            </div>
            <h6 className='text-primary mb-5'>Select Your Activity</h6>
            <div className='single-activity gap-4'>
                {
                    activities.map(activity => 
                        <SingleActivity
                        key={activity.id} 
                        activity={activity} 
                        addActivity={addActivity}
                        
                        ></SingleActivity>
                        )
                }
            </div>
        </div>
        
    );
};

export default Activity;