import React, { useEffect, useState } from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from "../../firebase";
import {querySnapshot, collection, getDocs, onSnapshot, orderBy, query} from "firebase/firestore";
import FlipMove from 'react-flip-move';

function Timeline() {
    //useState([])は初期値として入れられている
    const [posts, setPosts] = useState([]);

    //１回だけ呼ばれる処理をおこなっている
    //データを持ってくる処理
    useEffect(() => {
        const postData = collection(db,"posts");
        //タイムスタンプ順で並び替え
        const q = query(postData, orderBy("timestamp", "desc"));
        // getDocs(q).then((querySnapshot) => {
        // setPosts(querySnapshot.docs.map((doc) => doc.data()));
        // });
        
        //リアルタイムでデータを取得
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
        })
    }, []);
    

  return (
    <div className='timeline'>
        <div className='timeline_header'>
            <h2>ホーム</h2>
        </div>
        <TweetBox />

        <FlipMove>
        {posts.map((post) => (
            <Post 
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                varified={post.varified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
            />
            ))}
        </FlipMove>
    </div>
  )
}

export default Timeline