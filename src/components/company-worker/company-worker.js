import React from 'react';

import './company-worker.scss'

const CompanyWorker = ({photo, name, role, text}) => {
    return (
        <div className="wrapper">
            <div className='img'>
                <img src={photo} alt="person"/>
            </div>
            <div className='info'>
            <span className='info__name'>{name}</span>
            <br/>
            <span className='info__role'>{role}</span>
            <br/>
            <span className='info__text'>{text}</span>
            </div>
        </div>
    )
}

export default CompanyWorker;