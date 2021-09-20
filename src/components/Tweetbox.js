import { borderRadius, width } from '@material-ui/system';
import React from 'react'
import Profilepic from "../images/sushil.jpg" 
import "../styles/Tweetbox.css"
import CreateTweet from './CreateTweet';

function Tweetbox() {
    
    const styles = {
        largeIcon: {
            height:"50px",
            width: "50px",
            borderRadius:"50%",
        },
      };

    return (
        <div className="tweetbox">
            <img className="userIcon" src={Profilepic}/>
            <CreateTweet />
        </div>
    )
}

export default Tweetbox