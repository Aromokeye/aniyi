import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

const Navigation = () =>{
    let { url } = useRouteMatch();
    return (
        <div className='flex flex-row-ns flex-column justify-between f6 b ttc measure  relative'>
            <div className='mr2-ns mb0-ns mb1 relative'>
                <Link to={`${url}/about`} className='link'><i>1. </i>  About Me</Link>
            </div>
            <div className='mr2-ns mb0-ns mb1 relative'>
                <Link to={`${url}/works`} className='link'><i>2.</i> Works</Link>
            </div>
            <div className='mr2-ns mb0-ns mb1 relative'>
                <Link to={`${url}/read`} className='link'><i>3.</i> Read List</Link>
            </div>
            <div className='mr2-ns mb0-ns mb1 relative'>
                <Link to={`${url}/contact`} className='link'><i>4.</i> Contact Me</Link>
            </div>
        </div>
    )
}

export default Navigation