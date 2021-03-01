import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'

const Spinner = ({size, decor}) =>{
    return (
            <motion.div
            className='fixed' 
            initial={{rotate:360}}
            animate={{rotate:-360}}
            transition={{
                repeat: Infinity,
                duration: 2.8,
                ease: "linear"
            }}
            >
                <FontAwesomeIcon icon={faSpinner} size={size} className={`${decor}`} />
            </motion.div>
    )
}

export default Spinner