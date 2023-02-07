import React from 'react'
import NavbarApp from '../navbar/NavbarApp'
function Layout({ cart, mode, theme, children }) {
    return (
        <div className={mode === 'light' ? 'light' : 'dark'}>
            <NavbarApp cart={cart} mode={mode} theme={theme} />
            {children}
        </div>
    )
}

export default Layout