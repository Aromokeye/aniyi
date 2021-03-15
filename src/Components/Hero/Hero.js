import React from 'react'
import {motion} from 'framer-motion'

const Hero = () =>{
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
                transition: {ease: 'easeInOut', delay: 0.2} 
        }
      }

    return (
        <motion.div 
        className='flex flex-column justify-center ma4-ns ma3 hero pt6'
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
            <span className='f3-ns f4 b lh-copy measure'>
                Hello, my name is...
            </span>
            <div className='f-headline-ns f-subheadline-m f2 lh-title fw9 light-gray'>
                Niyi Aromokeye
            </div>

            <p className='f4 measure-wide lh-copy'>
                <strong className='b light-gray fw6'>I am</strong> passionate about building software that help users 
                navigate their <strong className='b light-gray fw6'>information landscape</strong> with ease.
            </p>
            <p className='f6 lh-copy measure-wide dn di-ns'>
                I believe every user of the web has varying interests or circumtances and so is their information ecologies. 
                I take the pleasure in weaving applications that aid in acquiring, 
                manipulating and representing information for the user with the appropriate context in mind.
            </p>
        </motion.div>
    )
}
export default Hero