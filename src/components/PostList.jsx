import React, { useEffect, useState } from "react";
import PostCard from "./ui/PostCard";
import "../assets/styles/PostContainer.css";

function PostList({ searchTerm }) {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (posts.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="posts-container container">
      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        filteredPosts.map((post, index) => <PostCard key={index} post={post} />)
      )}
    </div>
  );
}

export default PostList;
