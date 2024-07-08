import React from "react";

const Index = () => {
  const latestPosts = [
    { title: "First Post", description: "This is the first post on my blog." },
    { title: "Second Post", description: "This is the second post on my blog." },
    // Add more posts as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg">A place where I share my thoughts, experiences, and knowledge.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
        <div className="space-y-4">
          {latestPosts.map((post, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p className="mt-2">{post.description}</p>
              <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read More</a>
            </div>
          ))}
        </div>
      </section>
      <aside className="p-4 border rounded-lg">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-24 h-24 rounded-full mb-4" />
        <p>Hello! I'm the author of this blog. I write about various topics that interest me, including technology, travel, and personal development.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">Twitter</a>
          <a href="#" className="text-blue-500 hover:underline ml-4">LinkedIn</a>
        </div>
      </aside>
    </div>
  );
};

export default Index;