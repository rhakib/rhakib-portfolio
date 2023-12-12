import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import img1 from '../assets/project1-A.png'
import img2 from '../assets/project1-B.png'
import img3 from '../assets/project2-A.png'
import img4 from '../assets/project2-B.png'
import img5 from '../assets/project3-A.png'
import img6 from '../assets/project3-B.png'
// import img7 from '../assets/project3-C.png'
import './Project.css'

import ProjectCard from './ProjectCard';

const Projects = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const project = [
        {
            title: 'VelocitiWork',
            img1: img1,
            img2: img2

        },
        {
            title: 'CoStay',
            img1: img3,
            img2: img4

        },
        {
            title: 'BrandShop',
            img1: img5,
            img2: img6,

        }
    ]
    const project2 = [
        {
            title: 'CoStay',
            img1: img3,
            img2: img4

        },
            {
                title: 'BrandShop',
                img1: img5,
                img2: img6,
                
            },
            {
                title: 'VelocitiWork',
                img1: img1,
                img2: img2
        
            }
        ]
    return (
        <Tabs className='max-w-[1350px] mx-auto w-full' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <h2 className='text-5xl text-center font-bold my-8'>Projects</h2>
            <TabList className='flex gap-8 justify-center'>
                <Tab className='tab px-2 md:px-4 py-1 rounded-md  md:text-lg'>All</Tab>
                <Tab className='tab px-2 md:px-4 py-1 rounded-md  md:text-lg'>Web Development</Tab>
                <Tab className='tab px-2 md:px-4 py-1 rounded-md  md:text-lg'>Custom Design</Tab>
            </TabList>
            <TabPanel className='my-6'>
                <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-3'>
                    {
                        project.map((tab, idx) => <ProjectCard key={idx} {...tab}></ProjectCard>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-3'>
                    {
                        project2.map((tab, idx) => <ProjectCard key={idx} {...tab}></ProjectCard>)
                    }
                </div>

            </TabPanel>
            <TabPanel>
                <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
                    {
                        project2.map((tab, idx) => <ProjectCard key={idx} {...tab}></ProjectCard>)
                    }
                </div>

            </TabPanel>
        </Tabs>
    );
};

export default Projects;