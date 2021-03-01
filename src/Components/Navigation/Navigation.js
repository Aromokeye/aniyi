import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
const Navigation = () =>{
const [mobile, setMobile] = useState(null)
const [burger, setBurger] = useState(null)
const [cancel, setCancel] = useState(null)

const clickBar = () => {
    setBurger(!burger)
    setMobile(!mobile)
    setCancel(!cancel)
}
const clickCancel = () =>{
    setBurger(!burger)
    setMobile(!mobile)
    setCancel(!cancel)
}

    return (
        <div className='relative'>
            <div 
            className={`${!burger ? `db burger` : 'dn'} dn-ns`} 
            onClick={clickBar}>
                <FontAwesomeIcon icon={faBars} size='2x'/>
            </div>
            <div 
            className={`${mobile ? `flex flex-column navigationbg pa3 pa0-ns` : `dn`} 
            flex-ns flex-row-ns justify-between-ns f6 b ttc measure relative`}>
                <div 
                className={`${!cancel ? `dn` : `dn-ns absolute right-1 z-1 cancel pointer`}`} 
                onClick={clickCancel}>
                    <FontAwesomeIcon icon={faTimes} size='3x'/>
                </div>
                <div 
                className='mr2-ns mb0-ns pv0-ns pv2 relative' 
                onClick={clickCancel}>
                    <Link to={`/about`} className='link'><i>1. </i> About Me</Link>
                </div>
                <div 
                className='mr2-ns mb0-ns pv0-ns pv2 relative'
                onClick={clickCancel}
                >
                    <Link to={`/works`} className='link'><i>2.</i> Works</Link>
                </div>
                <div 
                className='mr2-ns mb0-ns pv0-ns pv2 relative'
                onClick={clickCancel}
                >
                    <Link to={`/read`} className='link'><i>3.</i> Read List</Link>
                </div>
                <div 
                className='mr2-ns mb0-ns pv0-ns pv2 relative'
                onClick={clickCancel}
                >
                    <Link to={`/contact`} className='link'><i>4.</i> Contact Me</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation