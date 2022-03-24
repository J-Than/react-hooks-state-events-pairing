import React from "react"
import Votes from "./Votes"
import ShowComments from "./ShowComments";

function VideoData({
  title,
  views,
  createdAt,
  upvotes,
  downvotes,
  showComments,
  handleShowComments,
  handleUpvotes,
  handleDownvotes
}) {

  return (
    <div className="VideoData">
      <h1>{title}</h1>
      <p>{`${views} views | Uploaded ${createdAt}`}</p>
      <Votes
        upvotes={upvotes}
        downvotes={downvotes}
        handleUpvotes={handleUpvotes}
        handleDownvotes={handleDownvotes}
      />
      <ShowComments showComments={showComments} handleShowComments={handleShowComments} />
    </div>
  );
}

export default VideoData;
