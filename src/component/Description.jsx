import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Description() {
    return (
        <div className='descriptionContainer'>
            <h1>A Simple Portfolio</h1>
            <h2>Hello My Name Is Felix Tjong, I am currently learning and improving my front-end development abilities. here u can see and find
                <TypeAnimation
                    sequence={[
                        ' my portofolio',
                        1000,
                        ' my finished projects',
                        1000,
                        '',
                        1000,
                        ' and my contact information',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontStyle: 'bold', color: '#A0C878' }}
                    className='profesion'
                    repeat={Infinity}
                />
            </h2>
        </div>
    )
}

export default Description
