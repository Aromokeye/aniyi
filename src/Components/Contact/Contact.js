import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {motion} from 'framer-motion'
import './Contact.css'

const Contact=()=>{

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
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
            <h1 className='f-headline-ns f1 lh-solid fw9 contact'>React Out</h1>
            <div className='flex flex-column  measure f4-m f4-l f6 lh-copy'>
                <p>
                    I'm currently in search for new oppotunities. Kindly send an email 
                    or use of one the social links below to reach me and I promise to response promptly.
                </p>
                <div className='flex flex-row justify-start'>
                     <a href='mailto:oyekeye@hotmail.com' 
                        target="_blank" rel="noreferrer" 
                        className='mail' aria-label='email'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                    <div className='ml4'>
                    <div className='flex flex-row justify-around'>
                        <a href='https://github.com/Aromokeye' 
                        target="_blank" rel="noreferrer" 
                        className='social mr2' aria-label='Github'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href='https://www.linkedin.com/in/niyi-aromokeye-34a3b345/' 
                        target="_blank" rel="noreferrer" 
                        className='social mr2' aria-label='Linked In'>
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                        <a href='https://twitter.com/NiyiAromokeye' 
                        target="_blank" rel="noreferrer" 
                        className='social mr2' aria-label='twitter'>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </div>  
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact