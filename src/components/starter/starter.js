import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import * as actions from '../../actions'
import Video from '../../files/starter/startVideo.mp4'
import './starter.scss'

const Starter = ({videoActive, set_false}) => {
    if (!videoActive) {
        return <Redirect to='/about'/>
    }
    
    return (
        <video 
        autoPlay muted
        className='video' onEnded={set_false}>
            <source src={Video} type="video/mp4"/>
        </video>
    )
}
const mapStateToProps = ({videoActive}) => ({
    videoActive
})
export default connect(mapStateToProps, actions)(Starter);