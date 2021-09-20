import React from 'react'
import "../styles/Feed.css"
import FeedHeader from './FeedHeader';
import Tweets from './Tweets';
import Tweetbox from './Tweetbox';

function Feed() {
    return (
        <div className="feed">
            <FeedHeader />
            <Tweetbox />
            <Tweets />
        </div>
    )
}

export default Feed;