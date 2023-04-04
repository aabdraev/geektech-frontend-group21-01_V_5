import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import MyButton from '../myButton/MyButton'
import { handleLogOutAction } from '../../redux/actions'

const NavBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(handleLogOutAction())
        navigate("/")
    }

    const { loggedUser } = useSelector(state => state.loginReducer)

    return (
        <div className='header'>
            <div className='header__links'>
                <NavLink
                    to='/main'
                    className="link"
                >
                    Main
                </NavLink>
                <NavLink
                    to='/about'
                    className="link"
                >
                    About
                </NavLink>
            </div>
            <div className='header__btns'>
                <p>Welcome, {loggedUser}</p>
                <MyButton
                    onClick={handleLogOut}
                >
                    log out
                </MyButton>
            </div>
        </div>
    )
}

export default NavBar