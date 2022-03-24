import React from "react"
import Comment from "./Comment"

function Comments({ comments }) {

  const commentList = comments.map(c => {
    return <Comment key={c.id} user={c.user} comment={c.comment} />
  })

  return (
    <div className="Comments">
      <hr />
      <h3>{`${comments.length} Comments`}</h3>
      <div className="CommentList">
        {commentList}
      </div>
    </div>
  );
}

export default Comments;