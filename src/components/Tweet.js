import React, {forwardRef}  from 'react'
import ActualPost from "./ActualPost"
import "../styles/Tweet.css"


const Tweet = forwardRef(({name, username, profilepic,text,photo},ref)=> {

    return (
        <div className="tweet" ref={ref}>
             <img className="userIcon" src={profilepic}/>
             <ActualPost name={name} username={username} photo = {photo} text={text}/>
        </div>
    )
})

export default Tweet
