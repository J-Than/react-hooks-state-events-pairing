import React from "react"

function Votes({
  upvotes,
  downvotes,
  handleUpvotes,
  handleDownvotes
}) {

  return (
    <div className="Votes">
      <button onClick={handleUpvotes}>{`${upvotes} 👍`}</button>
      <button onClick={handleDownvotes}>{`${downvotes} 👎`}</button>
    </div>
  );
}

export default Votes;
