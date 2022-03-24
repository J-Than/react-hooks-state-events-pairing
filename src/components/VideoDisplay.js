import React from "react"
import video from "../data/video.js";


function VideoDisplay() {

  return (
      <div className="VideoDisplay">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{`${video.views} views | Uploaded ${video.createdAt}`}</p>
      <div>
        <button>{`${video.upvotes} 👍`}</button>
        <button>{`${video.downvotes} 👎`}</button>
      </div>
      <div>
        <button>Hide Comments</button>
      </div>
    </div>
  );
}

export default VideoDisplay;
