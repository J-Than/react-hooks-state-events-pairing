import React from "react"
import video from "../data/video.js";

function Comments() {

  return (
    <div className="Comments">
      <hr />
      <h3>{`${video.comments.length} Comments`}</h3>
      <div id="comment-list">
        <div>
          <h4>{video.comments[0].user}</h4>
          <small>{video.comments[0].comment}</small>
        </div>
        <div>
          <h4>{video.comments[1].user}</h4>
          <small>{video.comments[1].comment}</small>
        </div>
      </div>
    </div>
  );
}
  
export default Comments;