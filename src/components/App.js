import React, { useState } from "react"
import VideoFrame from "./VideoFrame.js";
import Comments from "./Comments.js";
import VideoData from "./VideoData.js";
import video from "../data/video.js";

function App() {

  const [showComments, setShowComments] = useState(true);

  function showHideComments() {
    setShowComments(showComments => showComments = !showComments)
  }

  return (
    <div className="App">
      <VideoFrame embedUrl={video.embedUrl} title={video.title}/>
      <VideoData 
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
        showComments={showComments}
        handleShowComments={showHideComments}
      />
      {showComments ? <Comments comments={video.comments} /> : null }
    </div>
  );
}

export default App;
