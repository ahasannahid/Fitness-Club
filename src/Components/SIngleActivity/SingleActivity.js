import React from 'react';
import './SingleActivity.css'

const SingleActivity = (props) => {
    // console.log(props);
    const {activity, addActivity} = props;
    const {picture, time, name, age} = activity;
    return (
            <div className="card rounded">
                    <div className='text-center'>
                        <img src={picture} alt="" className='w-100 h-75'/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>Age: {age}</p>
                        <h6>Time Required: <span>{time}</span>s</h6>
                        <div className='text-center'>
                            <button onClick={() => addActivity(time)} className="btn btn-primary w-100">Add Activity</button>
                        </div>
                    </div>
            </div>
    );
};

export default SingleActivity;