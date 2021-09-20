import React, { useState } from 'react'
import "../styles/Createtweet.css"
import PublicIcon from '@material-ui/icons/Public';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import db from './firebase';

function CreateTweet() {
    
    const [tweetMessage, setTweetMessage] = useState("");
    const [photo, setPhoto] = useState("");

    const sendTweet = (e)=>{
        e.preventDefault();
        if(tweetMessage != ""){
            db.collection("posts").add({
                name:"Sushil Kumar",
                username : "@skbytecodes .1h",
                text:tweetMessage,
                photo:photo,
                profilepic : "https://pbs.twimg.com/profile_images/1222655389151506432/UkdGH8pK_400x400.jpg"
            })
        }
        setTweetMessage("");
        setPhoto("");
    }

    return (
        <form className="createtweet">
            <div className="input_public">
                <input 
                    onChange={e=>setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    className="input_text" type="text" placeholder="What's happening?" 
                />
                 <input 
                    onChange={e=>setPhoto(e.target.value)}
                    value={photo} 
                    className="input_image" type="text" placeholder="Enter the image url here" 
                />
                <div className="icon_access">
                    <PublicIcon className="public_icon"/>
                    <p className="access">Everyone can reply</p>
                </div>
            </div>
            <div className="input_emojis_tweet">
               <div className="input_emojis">
                    <ImageOutlinedIcon className="image_icon icon"/>
                    <CardGiftcardOutlinedIcon className="gift_icon icon" />
                    <PollOutlinedIcon className="poll_icon icon"/>
                    <SentimentSatisfiedOutlinedIcon className="laugh_icon icon"/>
                    <ScheduleOutlinedIcon className="schedule_icon icon"/>
               </div>
               <div className="feed_tweetdiv">
                    <button onClick={sendTweet} type="submit" className="tweet_btn">Tweet</button>
               </div>
            </div>
        </form>
    )
}

export default CreateTweet
