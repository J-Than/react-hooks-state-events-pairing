import React from "react"

function Votes({
  upvotes,
  downvotes
}) {

  return (
    <div className="Votes">
      <button>{`${upvotes} 👍`}</button>
      <button>{`${downvotes} 👎`}</button>
    </div>
  );
}

export default Votes;
