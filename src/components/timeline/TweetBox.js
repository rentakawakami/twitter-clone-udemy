import { Avatar, Button, Input } from '@mui/material'
import React, { useState } from 'react';
import "./TweetBox.css";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {

    const[tweetmessage, setTweetMessage] = useState("");
    const[tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        //firebaseのデータベースにデータを追加する
        //画面がリロードされない処理
        e.preventDefault();

        //この値がツイートした時に保存される
        addDoc(collection(db, "posts"), {
            key: "プログラミングチュートリアル",
            displayName: "個人開発",
            username: "kawakami",
            varified: true,
            text: tweetmessage,
            avatar: "https://source.unsplash.com/random",
            image: tweetImage,
            timestamp: serverTimestamp(),
        });

        setTweetMessage("");
        setTweetImage("");
    };

  return (
    <div className='tweetBox'>
        <from>
            <div className='tweetBox_input'>
            <Avatar />
            <input 
            value={tweetmessage}
                placeholder='いまどうしている？' 
                type='text' 
                onChange={(e) => setTweetMessage(e.target.value)}
            ></input>
            </div>
            <input 
                value={tweetImage}
                className='tweetBox_imageInput' 
                placeholder='画像のURLを入力してください' 
                type='text' 
                onChange={(e) => setTweetImage(e.target.value)}
            ></input>
            <Button 
                className='tweetBox_tweetButton' 
                type='submit'
                onClick={sendTweet}
                >ツイート</Button>
        </from>
    </div>
  )
}

export default TweetBox