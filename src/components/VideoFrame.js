import React from "react"

function VideoFrame({ embedUrl, title }) {

  return (
    <div className="VideoFrame">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
    </div>
  );
}

export default VideoFrame;
