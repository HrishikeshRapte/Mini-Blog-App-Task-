import { useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import './App.css'; 

function App() {
  const [blogs, setBlogs] = useState([]);

  const handleAddBlog = (blog) => {
    setBlogs([...blogs, blog]); //here i am pushing new blog into state
  }; 

  const handleDeleteBlog = (index) => {
    const newBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(newBlogs);
  };

  return (
    <div className="text-center pt-10">
      <h1 className='text-5xl font-thin'>Mini Blog App</h1>
      <BlogForm onAdd={handleAddBlog} />
      <BlogList blogs={blogs} onDelete={handleDeleteBlog} />
    </div>
  );
}

export default App;
