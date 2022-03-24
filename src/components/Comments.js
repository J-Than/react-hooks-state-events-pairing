import React from "react"

function Comments({ comments, }) {

  return (
    <div className="Comments">
      <hr />
      <h3>{`${comments.length} Comments`}</h3>
      <div className="CommentList">
        <div>
          <h4>{comments[0].user}</h4>
          <small>{comments[0].comment}</small>
        </div>
        <div>
          <h4>{comments[1].user}</h4>
          <small>{comments[1].comment}</small>
        </div>
      </div>
    </div>
  );
}
  
export default Comments;