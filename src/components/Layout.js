import React from 'react'
import NavigationBar from './Navbar'


const Layout = (props) => {
    return (
        <div className="Body">
            <NavigationBar />
            {props.children}
        </div>
    )
    
}

export default Layout