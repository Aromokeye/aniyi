import React from 'react'

const Hero = () =>{
    return (
        <div className='flex flex-column justify-center ma4-ns ma3 hero pt6'>
            <span className='f3-ns f4 b lh-copy measure'>
                Hello, my name is...
            </span>
            <div className='f-headline-ns f-subheadline-m f2 lh-title fw9 light-gray'>
                Niyi Aromokeye
            </div>

            <p className='f4 measure-wide lh-copy'>
                <strong className='b light-gray fw6'>I am</strong> passionate about building softwares that help users 
                navigate their <strong className='b light-gray fw6'>information landscape</strong> with ease.
            </p>
            <p className='f6 lh-copy measure-wide dn di-ns'>
                I believe every user of the web has varying interests or circumtances and so is their information ecologies. 
                I take the pleasure in weaving applications that aid in acquiring, 
                manipulating and representing information for the user in the appropriate context.
            </p>
        </div>
    )
}
export default Hero