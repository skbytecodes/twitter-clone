import React from 'react'
import "../styles/ActualPost.css"
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function ActualPost({name, username,photo,text}) {
    const styles = {
        smallIcon: {
            fontSize:"20px"
        },
      };
    return (
        <div className="actualpost">
            <div className="firstRow">
               <div className="first_row_data">
                    <p className="uname">{name}</p>
                    <p className="uid">{username}</p>
               </div>
               <MoreHorizIcon className="AP_more"/>
            </div>
            <div className="post_body">
                <p className="post">{text}</p>
                {photo!=""?
                <div className="post_image_div">
                <img className="post_image" src = {photo} />
               </div>:<div></div>}
              
            </div>
            <div className="tweetIcons">
                <ModeCommentOutlinedIcon style= {styles.smallIcon} className = "comment AP_icon"/>
                <RepeatRoundedIcon style= {styles.smallIcon} className = "retweet AP_icon"/>
                <FavoriteBorderOutlinedIcon style= {styles.smallIcon} className = "love AP_icon"/>
                <ScreenShareOutlinedIcon style= {styles.smallIcon} className = "share AP_icon"/>
            </div>
        </div>
    )
}
export default ActualPost
