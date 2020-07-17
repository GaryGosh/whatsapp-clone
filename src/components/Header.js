import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Header() {
    return (
        <div className="header">
            <div className="header__lineOne">
                <p>WhatsApp</p>
                <div className="header__icons">
                    <span><SearchIcon /></span>
                    <span><MessageIcon /></span>
                    <span><MoreVertIcon /></span>

                </div>
            </div>
            <div className="header__lineTwo">
                <p>Calls</p>
                <p>Chats</p>
                <p>Contacts</p>
            </div>
            
        </div>
    )
}

export default Header
