import React from 'react';

function BlogList({ blogs, onDelete }) {
  if (blogs.length === 0) {
    return <p className="text-center text-gray-500">No blog posts yet.</p>;
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-slate-200 border p-4 rounded shadow"
        >
          <h2 className="text-xl font-semibold text-blue-700"> <span className='font-thin text-black' >Blog Title: </span>{blog.title}</h2>
          <p className="text-gray-700 mt-2"><span className='font-thin text-black text-xl'>Blog Content: </span>{blog.content}</p>
          <button
            onClick={() => onDelete(index)}
            className="mt-3 text-red-600 hover:underline"
          >
            Delete
          </button>
        </div> 
      ))}
    </div>
  );
}

export default BlogList;
