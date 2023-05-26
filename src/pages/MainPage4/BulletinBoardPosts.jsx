import React from "react";

const BulletinBoardPosts = ({ gesiPosts, gesiLoding }) => {
  return (
    <div>
      {gesiLoding && <div>gesiLoding...</div>}
      <ul>
        {gesiPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinBoardPosts;
