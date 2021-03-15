import React, { useEffect, useRef } from 'react'
import Lifenote from '../../Assets/img2.png'
import Zfactor from '../../Assets/img3.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'
import './Works.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Works = () =>{

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
        className='flex flex-column justify-between relative mh4-ns'
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
            <motion.div className='work flex flex-row-l flex-column relative'>
                <img src={Lifenote} className='img' alt='lifenote'/>
                <div className='flex flex-column ml3 work-details'>
                    <h1 className='f-headline-l f1-m fw9 title'>
                        Lifenote
                    </h1>
                    <div className='f5-ns f6 measure-wide-ns lh-copy'>
                    Unlike several diary applications in existence which hardly fit into users' 
                    peculiarities, Lifenote, built on serverless architecture, helps users create customizable journals 
                    with options to share with other selected users who are followers.
                    </div>
                    <a href='https://www.lifenote.space/'
                    target="_blank" rel="noreferrer"
                    className='z-max relative flex justify-between items-center'
                    >
                        <div className='ttu tracked b'>Link</div>
                        <div className='work-link'><FontAwesomeIcon icon={faExternalLinkAlt} size='2x'/></div>
                    </a>
                    <div className='flex flex-row justify-between flex-wrap items-center summary mv1'>
                        <div className='ttu tracked f6 b'>
                           tech stack
                        </div>
                        <div className='f6 measure lh-copy'>React, Redux, Redux-Saga, DraftjS, 
                            NodeJs, MeiliSearch, Tachyons CSS, Firebase 
                            (Functions, Firestore)
                        </div>
                    </div>
                    <div className='flex flex-row justify-between flex-wrap summary2 w-100'>
                        <div className='ttu tracked f6 b'>
                           client
                        </div>
                        <div className='f6 measure lh-copy'>Self Project
                        </div>
                    </div>
                    <div className='flex flex-row justify-between flex-wrap  summary2 w-100'>
                        <div className='ttu tracked f6 b'>
                           Project Date
                        </div>
                        <div className='f6 measure lh-copy'>Dec 2020 till date
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* second project */}
            <div className='work flex flex-row-l flex-column relative'>
                
                <div className='flex flex-column work-details left-2'>
                    <h1 className='f-headline-l f1-m fw9 title i'>
                        Z-Factor
                    </h1>
                    <div className='f5-ns f6 measure-wide-ns lh-copy'>
                    The compressibility of gases also known as Z-Factor 
                    into their containers such as pipes and reserves are done through
                    thorough experimental measurements in a laboratory. If provided the appropriate values, 
                    this application makes complex mathematical evaluations and provides 
                    an estimation of the Z-Factor at 99.8 accuracy compared to laboratory values. 
                    </div>
                    <a href='https://github.com/Aromokeye/Z-Factor'
                    target="_blank" rel="noreferrer"
                    className='z-max relative flex justify-between items-center'
                    >
                        <div className='ttu tracked b work-link'>Link</div>
                        <div className='work-link'><FontAwesomeIcon icon={faGithub} size='2x'/></div>
                    </a>
                    <div className='flex flex-row justify-between flex-wrap items-center summary mv1'>
                        <div className='ttu tracked f6 b'>
                           tech stack
                        </div>
                        <div className='f6 measure lh-copy'>Electron, Materialize CSS</div>
                    </div>
                    <div className='flex flex-row justify-between flex-wrap summary2 w-100'>
                        <div className='ttu tracked f6 b'>
                           client
                        </div>
                        <div className='f6 measure lh-copy'>
                            Segun Omobolanle (Petroleum Engineering Researcher, 
                            University of Ibadan, Nigeria)
                        </div>
                    </div>
                    <div className='flex flex-row justify-between flex-wrap  summary2 w-100'>
                        <div className='ttu tracked f6 b'>
                           Project Date
                        </div>
                        <div className='f6 measure lh-copy'>January, 2021
                        </div>
                    </div>
                </div>
                <img src={Zfactor} className='img ml3' alt='lifenote'/>
            </div>
        </motion.div>
    )
}

export default Works