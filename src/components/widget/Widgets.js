import { 
    TwitterTimelineEmbed, 
    TwitterShareButton, 
    TwitterTweetEmbed
} from 'react-twitter-embed';
import { Search } from '@mui/icons-material'
import React from 'react'
import "./Widgets.css";

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets_input'>
            <Search className='widgets_serchIcon' />
            <input placeholder='キーワード検索' type='text'/>
        </div>
        <div className='widgets_widgetContainer'>
            <h2>今どうしてる？</h2>
            <TwitterTweetEmbed tweetId={"1475764828208009220"} />
            <TwitterTimelineEmbed
                sourceType='profile'
                screenName='Shin_Engineer'
                options={{ height: 400}}
            />
            <TwitterShareButton  
                url={"https://twitter.com/Shin_Enginner"}
                options={{text: "#React.js勉強", via:"Shin_Engineer" }}
            />
        </div>
    </div>
  )
}

export default Widgets