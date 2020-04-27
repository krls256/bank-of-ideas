import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from '../navbar'
import AboutCompany from '../about-company'
import Starter from '../starter'
import Works from '../works'
import Contacts from '../contacts'
import News from '../news'
import * as actions from '../../actions'

import './bootstrap.min.scss'



const App = ({add}) => {
    

    return (
        
        <Router>
            <Navbar />
            <Route path={'/'} component={Starter} exact />
            <Route path={'/about'} component={AboutCompany} />
            <Route path={'/works'} component={Works} />
            <Route path={'/contacts'} component={Contacts}/>
            <Route path={'/news'} component={News}/>
            
        </Router>
    )
}

export default connect(null, actions)(App)