import React, { useState } from 'react';

function BlogForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return ( 
    <div className='flex justify-center pt-7 bg-orange-100 border-none'>
        <form onSubmit={handleSubmit} className="mb-16 space-y-4 ">
        <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
        />
        <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className=" w-full p-2 border rounded"
        ></textarea>
        <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Add Blog 
        </button>
        </form>
    </div>    
  );
}

export default BlogForm;
