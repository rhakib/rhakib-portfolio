import React from 'react';

const Skills = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold'>Core Skills</h2>
            <div className='flex flex-wrap justify-center gap-20 mt-16'>
                <div className='flex flex-col gap-2 items-center'>
                    <div className="radial-progress text-orange-700" style={{ "--value": "90", "--size": "12rem", "--thickness": "1rem" }} role="progressbar">90%</div>
                    <h2 className='text-lg font-semibold'>HTML</h2>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <div className="radial-progress text-blue-500" style={{ "--value": "85", "--size": "12rem", "--thickness": "1rem" }} role="progressbar">85%</div>
                    <h2 className='text-lg font-semibold'>CSS</h2>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <div className="radial-progress text-yellow-600" style={{ "--value": "80", "--size": "12rem", "--thickness": "1rem" }} role="progressbar">80%</div>
                    <h2 className='text-lg font-semibold'>Javascript</h2>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <div className="radial-progress text-sky-500" style={{ "--value": "83", "--size": "12rem", "--thickness": "1rem" }} role="progressbar">83%</div>
                    <h2 className='text-lg font-semibold'>React</h2>
                </div>
            </div>

        </div>
    );
};

export default Skills;