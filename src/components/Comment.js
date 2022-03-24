import React from "react"

function Comment({ user, comment }) {

  return (
    <div className="Comment">
      <h4>{user}</h4>
      <small>{comment}</small>
    </div>
  );
}
  
export default Comment;