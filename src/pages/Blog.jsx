import React from "react";

const Blog = () => {
  const posts = [
    { title: "First Post", date: "2023-10-01", description: "This is the first post on my blog." },
    { title: "Second Post", date: "2023-10-02", description: "This is the second post on my blog." },
    // Add more posts as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2">{post.description}</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read More</a>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Previous</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">Next</button>
      </div>
    </div>
  );
};

export default Blog;