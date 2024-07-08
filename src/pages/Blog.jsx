import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    toast("Post deleted successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="mt-2">{post.description}</p>
                <Link to={`/blog/${index}`} className="text-blue-500 hover:underline mt-2 inline-block">Read More</Link>
              </div>
              <Button variant="destructive" onClick={() => handleDelete(index)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Link to="/add-post" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add New Post</Link>
      </div>
    </div>
  );
};

export default Blog;