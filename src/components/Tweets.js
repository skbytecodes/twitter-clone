import React, { useEffect, useState } from 'react'
import db from './firebase';
import Tweet from "../components/Tweet"
import "../styles/Tweets.css"
import FlipMove from 'react-flip-move';


function Tweets() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
    db.collection('posts').onSnapshot((snapShot)=>(
        setPosts(snapShot.docs.map(doc =>doc.data()))
    ))
    },[]);
    return (
        <div className="tweets">
            <FlipMove>
                {posts.map(post=>(
                    <Tweet 
                        key={post.text}
                        name = {post.name} 
                        username= {post.username}
                        text={post.text}
                        photo={post.photo}
                        profilepic = {post.profilepic} 
                    />
                ))}     
            </FlipMove>      
        </div>
    )
}

export default Tweets
