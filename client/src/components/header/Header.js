import React from 'react'
import LoginButton from '../authorization/LoginButton';
import LogoutButton from '../authorization/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="header">
            <div>
                <a href="/" className="h3 home-button"><span >Trivia With Friends</span></a>
            </div>
            <div>
                {isAuthenticated && <a href="/games"
                    className="h5 ps-4 my-games"><span>My Games</span></a>}
            </div>
            <div >
                <div className="authentication-button">
                    <LoginButton />
                    <LogoutButton />
                </div>
            </div>
        </div>
    )
}

export default Header
