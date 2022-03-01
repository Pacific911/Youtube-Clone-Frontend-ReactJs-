import React from 'react';
import Style from '../Style/header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MicSharpIcon from '@mui/icons-material/MicSharp';
function Header() {
  return (
    <div className="header">
        <div className="header_left">
        <MenuIcon />
        <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
        </div>

        <div className="header_input">
            <input type="text" placeholder="Search" />
            <SearchIcon className="header_inputButton"/>
        </div>

        <div className="header_micro">
            <MicSharpIcon />
        </div>

        

        <div className="header_icons">
            <VideoCallIcon className="header_icon"/>
            <AppsIcon className="header_icon" />
            <NotificationsIcon className="header_icon"/>
            <Avatar 
               alt="pacific" src="https://media-exp1.licdn.com/dms/image/D4E35AQGv4NOZBUBvDQ/profile-framedphoto-shrink_200_200/0/1643188108652?e=1645858800&v=beta&t=Pct2UdJZK6HPe1McthC2cYDmtU2dgbG3jD8t7SysX20"
             />
        </div>
        
    </div>
  )
}

export default Header;