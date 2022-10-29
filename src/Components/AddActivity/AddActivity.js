import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddActivity = ({ adActivity, interval }) => {
    const notify = () => toast("Congratulations!!You Complete Your task !");
    return (
        <div>
            <div>
                <h6 className='mt-5 mb-2'>Exercise Details</h6>
            </div>
            <div>
                <h6 className='bg-secondary p-3'>Activity time : {adActivity}s<span className='ms-5'></span> </h6>
                <h6 className='bg-secondary p-3'>Break Time: {interval}s</h6>
            </div>
            <div className='text-center mt-5 pt-5'>
                <button className='btn btn-success w-75' onClick={notify}>
                    Activity Complete
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

{/* <div id='toast' className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="d-flex">
        <div className="toast-body">
            Hello, world! This is a toast message.
        </div>
        <button type="button" className="btn  btn-danger me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
</div> */}

export default AddActivity;