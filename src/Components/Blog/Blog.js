import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='container'>
                <h3 className='text-center py-3'>Questions and Answer</h3>
                <div className='bg-light m-4'>
                    <h5 className='p-4'>How does React work?</h5>
                    <p className='p-4'>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                        A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>
                </div>
                <div className='bg-light m-4'>
                    <h5 className='p-4'>State Vs. Props</h5>
                    <p className='p-4'>
                        <span className='title'>Props</span>
                        The Data is passed from one component to another.It is Immutable.Props can be used with state and functional components.Props are read-only.
                    </p>
                    <p className='p-4'>
                        <span className='title'>State</span>
                        The Data is passed within the component only.It is Mutable.State can be used only with the state components/class component (Before 16.0).State is both read and write
                    </p>
                </div>
                <div className='bg-light m-4'>
                    <h5 className='p-4'>Simple Explanation of React.useEffect()</h5>
                    <p className='p-4'>useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. callback argument is a function to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values.</p><hr />
                    <p className='p-4'>
                        <span className='title'>Side-effect cleanup:</span>A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.
                    </p><hr />
                    <p className='p-4'>
                        <span className='title'>Fetching data:</span>useEffect() starts a fetch request by calling fetchEmployees() async function after the initial mounting. When the request completes, setEmployees(fetchedEmployees) updates the employees state with the just fetched employees list.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;