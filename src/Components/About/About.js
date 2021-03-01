import React from 'react'
import './About.css'

const About = () =>{
    return (
        <div className='ph2 mh4-ns mt4-ns flex flex-row-l flex-column justify-around-l pt6'>
            <h1 className='f-headline-ns f1 lh-solid fw9 about'>
                About me
            </h1>
            <div className='flex flex-column measure-wide-l measure f4-ns f6 lh-copy'>
                <p>
                    I have had the much of experience of working with web technologies 
                    in Educational technology prior to late 2018. I have since evolved into core 
                    web development both in frontend and backend using the Javascript language.
                    <i className='light-gray'> I love it</i>
                </p>
                <p className='mt0'>
                    I earned my Bachelors and Masters degrees from University of Education, 
                    Winneba, Ghana (Management) and University of Manchester 
                    (Digital Technologies, Communications and Education), England respectively. 
                </p>
            </div>
        </div>
    )
} 
export default About