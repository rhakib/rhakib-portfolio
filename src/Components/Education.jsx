import React from 'react';

const Education = () => {
    return (
        <div className=''>
            <h2 className="font-bold text-center my-16 text-5xl">Education</h2>
            <div className='bg-gray-300'>
                <div className='max-w-screen-lg mx-auto py-20'>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            MBA (Master's of Business Administration)
                        </div>
                        <div className="collapse-content">
                            <p><span className='font-bold'>Course:</span> MBA</p>
                            <p><span className='font-bold'>Subject:</span> Management</p>
                            <p><span className='font-bold'>Year:</span> 2023-in progress</p>
                            <p><span className='font-bold'>University: </span>National University</p>

                        </div>
                    </div>
                    <div className="collapse mt-4 collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            BBA (Bachelor of Business Administration)
                        </div>
                        <div className="collapse-content">
                            <p><span className='font-bold'>Course:</span> BBA</p>
                            <p><span className='font-bold'>Subject:</span> Management</p>
                            <p><span className='font-bold'>Year:</span> 2017-2021</p>
                            <p><span className='font-bold'>University: </span>National University</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;