/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.scss'

const Navbar = ({videoActive}) => {
    if (videoActive) {
        return null
    }
    return (
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/about">Про компанію</Link>
            <Link className="navbar-brand" to="/works">Наші роботи</Link>
            <Link className="navbar-brand" to="/contacts">Контакти</Link>
            <Link className="navbar-brand" to="/news">Новини</Link>
        </nav>
    )
}

const mapStateToProps = ({videoActive}) => ({
    videoActive
})


export default connect(mapStateToProps)(Navbar);