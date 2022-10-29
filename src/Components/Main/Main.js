import React, { useEffect, useState  } from 'react';
import Activity from '../Activity/Activity';
import Navigation from '../Navigation/Navigation';
import './Main.css'

const Main = () => {
    const [adActivity, setadActivity] = useState(0);
  
    const addActivity = (time) => {
        // console.log(selectActivity.time);
        const activityTime = parseInt(time);
        setadActivity(activityTime + adActivity);
    }
    return (
        <div className='container  main  mt-5'>
            <Activity
            addActivity={addActivity}
            ></Activity>
            <Navigation adActivity={adActivity}></Navigation>
        </div>
    );
};

export default Main;