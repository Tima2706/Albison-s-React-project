import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './__navbar.scss'
function NavbarApp({ theme, cart }) {
    const [change, setChange] = useState("☀️")
    let changeTheme = () => {
        setTimeout(() => {
            theme((e) => (e === 'light' ? "dark" : 'light'))
            setChange((e) => (e === "☀️" ? "🌑" : "☀️"))
        }, 300);

    }
    return (
        <div className="navbar">
            <div className='container'>
                <div className='w-100 navbar-items d-flex justify-content-between align-items-center'>
                    <ul className='navbar-ul d-flex gap-5 text-center align-items-center'>
                        <li><img width="35" height="35" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2LQRWxPhBINlc9rbC70HsPMWR02nuNUz7g&usqp=CAU' alt='logo' /> </li>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/PostsApp"}>Posts</NavLink></li>
                        <li><NavLink to={"/AboutApp"}>About</NavLink></li>
                    </ul>
                    <div className='navbar-button d-flex gap-5 text-center align-items-center'>
                        <p className='navbar-paragraph'><i className="fa-solid fa-signs-post"></i> <span className='navbar-counter'>{cart.length}</span></p>
                        <button className='navbar-mode' onClick={() => changeTheme()}>{change}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarApp