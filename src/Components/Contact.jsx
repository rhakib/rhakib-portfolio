import React from 'react';
import { Avatar, Card } from "keep-react";

const Contact = () => {
    return (
        <div className=''>
            <h2 className='text-5xl font-bold text-center my-12'>Contact me</h2>
            <div className='bg-gray-300'>
                <div className='flex gap-12 max-w-screen-xl py-12 mx-auto'>
                    <div className=" w-2/4 bg-slate-500">
                        <div className="py-8 lg:py-12 px-12 mx-auto max-w-screen-md">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Fill up the form</h2>
                            <form action="#" className="space-y-8">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required />
                                </div>
                                <div>
                                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                            </form>
                        </div>
                    </div>
                    <div className='bg-slate-500 w-2/4'>

                        <Card className="mt-40 bg-slate-500 border-none p-6">
                            <Card.Container className="flex items-center justify-center">
                                <Avatar
                                    shape="circle"
                                    img="https://i.ibb.co/bQYgCbK/IMG-20220514-211757-02.jpg"
                                    statusPosition="bottom-right"
                                    size="2xl"
                                />
                            </Card.Container>
                            <Card.Container className="text-center">
                                <Card.Title className="text-2xl font-semibold text-metal-800 ">
                                    Rakibul Hasan
                                </Card.Title>
                                <Card.Title className="!text-body-8 font-normal md:text-body-5">Web Developer</Card.Title>
                            </Card.Container>
                            <Card.Container className="circled mx-auto flex max-w-[220px] items-center justify-center p-1 md:p-2">
                                <div>
                                    
                                </div>

              
                            </Card.Container>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;