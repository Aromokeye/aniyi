import React from 'react'
import {Link, Switch, useRouteMatch, Route, useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
import Modarut from './Modarut'
import Freelance from './Freelance'
import './Experience.css'


const Experience = () =>{
    let { path, url } = useRouteMatch();
    let location = useLocation()

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
        className='flex flex-column justify-between relative mh4-ns ' 
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
            <div className='experience w-100 relative'>
                    <h1 className='f-subheadline-l f1-m fw9 title'>
                        Work Experience
                    </h1>
                    <ul className='list employ-menu'>
                        <li>
                            <Link to={`${url}`}>
                                <div 
                                className={location.pathname === '/experience'
                                            ? 'employ-active' : 'employ'}></div>
                            </Link>
                        </li>
                        <li className=''>
                            <Link to={`${url}/freelance`}>
                                <div className={location.pathname === '/experience/freelance' 
                                    ? 'employ-active' : 'employ'}></div>
                            </Link>
                        </li>
                    </ul>
                   <Switch>
                        <Route exact path={path} component={Modarut}/>
                        <Route path={`${path}/freelance`} component={Freelance}/>
                   </Switch>
            </div>
        </motion.div>
    )
}

export default Experience