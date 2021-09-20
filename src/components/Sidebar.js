import React from 'react'
import "../styles/Sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAlBookmarkBorderOutlinedIcontTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import Sideoption from './Sideoption';
import SidebarTweet from './SidebarTweet';

function Sidebar() {
    const styles = {
        largeIcon: {
            fontSize:"30px",
            color:"var(--twitter-background)"
        },
      };
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon" style={styles.largeIcon}/>
            <Sideoption active className="sidebar_homeIcon" Icon={HomeRoundedIcon} name={"Home"}/>
            <Sideoption className="sidebar_explorerIcon" Icon={SearchRoundedIcon} name={"Explorer"}/>
            <Sideoption className="sidebar_notificationIcon" Icon={NotificationsNoneRoundedIcon} name={"Notifications"} />
            <Sideoption className="sidebar_emailIcon" Icon={EmailOutlinedIcon} name={"Messages"} />
            <Sideoption className="sidebar_bookmarkIcon" Icon={BookmarkBorderOutlinedIcon} name={"Bookmarks"} />
            <Sideoption className="sidebar_listIcon" Icon={ListAlBookmarkBorderOutlinedIcontTwoToneIcon} name={"Lists"} />
            <Sideoption className="sidebar_profileIcon" Icon={PersonRoundedIcon} name={"Profile"}/>
            <Sideoption className="sidebar_moreIcon" Icon={MoreHorizRoundedIcon} name={"More"}/>
            <SidebarTweet />
        </div>
    )
}

export default Sidebar
