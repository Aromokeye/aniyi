import React from 'react'
import Lifenote from '../../Assets/img2.png'
import Zfactor from '../../Assets/img3.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import './Works.css'


const Works = () =>{
    return (
        <div className='flex flex-column justify-between relative mh4-ns'>
            <div className='work flex flex-row relative'>
                <img src={Lifenote} className='img' alt='lifenote'/>
                <div className='flex flex-column ml3'>
                    <h1 className='f-headline-l f-subheadline-m fw9 title i'>
                        Lifenote
                    </h1>
                    <p className='f5 measure-wide lh-copy'>
                    Unlike several diary applications in existence which hardly fit into users' 
                    peculiar use cases, Lifenote helps users create customizable journals 
                    with options to share with other selected users who are followers.
                    </p>
                    <a href='https://www.lifenote.space/'
                    target="_blank" rel="noreferrer"
                    className='z-max relative flex justify-between items-center'
                    >
                        <div className='ttu tracked'>Link</div>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='2x'/>
                    </a>
                    <div className='flex flex-row justify-between flex-wrap items-center summary mv1'>
                        <div className='ttu tracked f6'>
                           tech stack
                        </div>
                        <div className='f6 measure lh-copy'>React, Redux, Redux-Saga, DraftjS, 
                            NodeJs, MeiliSearch, Tachyons CSS, Firebase 
                            (Functions, Firestore)
                        </div>
                    </div>
                    <div className='flex flex-row justify-between flex-wrap summary2 w-100'>
                        <div className='ttu tracked f6'>
                           client
                        </div>
                        <div className='f6 measure lh-copy'>Self Project
                        </div>
                    </div>
                    <div className='flex flex-row justify-between flex-wrap  summary2 w-100'>
                        <div className='ttu tracked f6 '>
                           Project Date
                        </div>
                        <div className='f6 measure lh-copy'>Dec 2020 till date
                        </div>
                    </div>
                </div>
            </div>

            {/* second project */}
            <div className='work flex flex-row relative'>
                
                <div className='flex flex-column'>
                    <h1 className='f-headline-l f-subheadline-m fw9 title i'>
                        Z-Factor
                    </h1>
                    <p className='f5 measure-wide lh-copy'>
                    The compressibility of gases also known as Z-Factor 
                    into their containers such as pipes and reserves are done through
                    thorough experimental measurements in a designated laboratory. This application collect required values 
                    and provides an estimation of Z-Factor at 99.8 accuracy to laboratory values. 
                    </p>
                    <a href='https://github.com/Aromokeye/Z-Factor'
                    target="_blank" rel="noreferrer"
                    className='z-max relative flex justify-between items-center'
                    >
                        <div className='ttu tracked'>Link</div>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='2x'/>
                    </a>
                    <div className='flex flex-row justify-between flex-wrap items-center summary mv1'>
                        <div className='ttu tracked f6'>
                           tech stack
                        </div>
                        <div className='f6 measure lh-copy'>Electron, Materialize CSS</div>
                    </div>
                    <div className='flex flex-row justify-between flex-wrap summary2 w-100'>
                        <div className='ttu tracked f6'>
                           client
                        </div>
                        <div className='f6 measure lh-copy'>Segun Omobolanle
                        </div>
                    </div>
                    <div className='flex flex-row justify-between flex-wrap  summary2 w-100'>
                        <div className='ttu tracked f6 '>
                           Project Date
                        </div>
                        <div className='f6 measure lh-copy'>January, 2021
                        </div>
                    </div>
                </div>
                <img src={Zfactor} className='img ml3' alt='lifenote'/>
            </div>
        </div>
    )
}

export default Works