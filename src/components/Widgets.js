import React from 'react'
import "../styles/Widgets.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import {
        TwitterTimelineEmbed,
        TwitterShareButton,
        TwitterTweetEmbed   
    } from "react-twitter-embed"

function Widgets() {
    return (
        <div className="widgets">
           <div className="input_container">
                <SearchRoundedIcon /><input className="input_field" type="text" placeholder="Search Twitter"/>
           </div>
           <div className="widgets_container">
                    <p className="widget_heading">What's happening?</p>
                    <TwitterTweetEmbed tweetId={"1364878419759149056"} />
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName = "avengers"
                        options = {{height:540, width:350}}
                    />
                </div>
        </div>
    )
}

export default Widgets;
