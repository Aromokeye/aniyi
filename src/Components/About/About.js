import React from 'react'
import {motion} from 'framer-motion'
import './About.css'

const About = () =>{
    const variants = {
        visible: {opacity: 1, 
                    x: 0,
                    transition: {type: 'spring', delay: 0.2, stiffness: 250} 
                },
        hidden: { opacity: 0, 
                    x: -100, 
                },
        exit: {
                x: '100vw',
                transition: {ease: 'easeInOut'} 
        }
      }
    return (
        <motion.div 
        className='ph2 mh4-ns mt4-ns flex flex-row-l flex-column justify-around-l pt6'
        initial='hidden'
        animate='visible'
        variants={variants}
        exit='exit'
        >
            <h1 className='f-headline-ns f1 lh-solid fw9 about'>
                About me
            </h1>
            <div className='flex flex-column measure-wide-l measure f4-m f4-l f6 lh-copy'>
                <p>
                    I am vastly experienced in Educational technology prior to November, 2018. 
                    I have since evolved into core web development, 
                    both frontend and backend, using the Javascript language.
                    <i className='light-gray'> I love it</i>
                </p>
                <p className='mt0'>
                    I earned my Bachelors and Masters degrees from University of Education, 
                    Winneba, Ghana (Management) and The University of Manchester 
                    (Digital Technologies, Communications and Education), England respectively. 
                </p>
            </div>
        </motion.div>
    )
} 
export default About