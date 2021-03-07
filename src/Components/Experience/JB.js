import React from 'react'
import './Experience.css'

const JB = () =>{
    return(
    <div className='flex flex-column employ-details'>
                        
        <div className='f5-ns f6 measure-wide-ns lh-copy'>
        The compressibility of gases also known as Z-Factor 
        into their containers such as pipes and reserves are done through
        thorough experimental measurements in a laboratory. If provided the appropriate values, 
        this application makes complex mathematical evaluatiions and provides 
        an estimation of the Z-Factor at 99.8 accuracy to laboratory values. 
        </div>
        <a href='https://github.com/Aromokeye/Z-Factor'
        target="_blank" rel="noreferrer"
        className='z-max relative flex justify-between items-center'
        >
            <div className='ttu tracked b work-link'>Link</div>
           
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
            <div className='f6 measure lh-copy'>Segun Omobolanle
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
    )
}

export default JB