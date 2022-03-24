import React, { useState } from "react"
import VideoFrame from "./VideoFrame.js";
import Comments from "./Comments.js";
import VideoData from "./VideoData.js";
import video from "../data/video.js";

function App() {

  const [showComments, setShowComments] = useState(true);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  function showHideComments() {
    setShowComments(showComments => showComments = !showComments)
  }

  function incrementUpvotes() {
    setUpvotes(upvotes => upvotes += 1)
  }

  function incrementDownvotes() {
    setDownvotes(downvotes => downvotes += 1)
  }

  return (
    <div className="App">
      <VideoFrame embedUrl={video.embedUrl} title={video.title}/>
      <VideoData 
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={upvotes}
        downvotes={downvotes}
        showComments={showComments}
        handleShowComments={showHideComments}
        handleUpvotes={incrementUpvotes}
        handleDownvotes={incrementDownvotes}
      />
      {showComments ? <Comments comments={video.comments} /> : null }
    </div>
  );
}

export default App;
