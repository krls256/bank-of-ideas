import React from 'react'

import CompanyWorker from '../company-worker'
import './about-company.scss'
import img from '../../files/about/1.jpg'
const AboutCompany = () => {
    return (
        <div>
            <div className='descr'>
                <h3 className='descr__title'>Наша компянія це..</h3>
                <span className='descr__text'>Пару речень про компанію</span>
            </div>
            <CompanyWorker photo={img} name={'Ім\'я'} role='Посада' text='Про людину'/>
        </div>
    )
}

export default AboutCompany