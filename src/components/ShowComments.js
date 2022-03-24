import React from "react"

function ShowComments({ showComments, handleShowComments }) {

  return (
    <div className="ShowComments">
      <button onClick={handleShowComments}>{showComments ? 'Hide' : 'Show'} Comments</button>
    </div>
  );
}

export default ShowComments;
