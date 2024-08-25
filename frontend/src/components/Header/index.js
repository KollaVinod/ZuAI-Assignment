import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

class Header extends React.Component {
    render() {
        return (
            <nav className='nav-header'>
                <div className='nav-content'>
                    <Link to='/' className='link-item'>
                        <h1 className='logo'>Blog App</h1>
                    </Link>

                    <div className='nav-routes'>
                        <Link to='/new' className='link-item'>
                            <p className='route'>Create New Post</p>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;