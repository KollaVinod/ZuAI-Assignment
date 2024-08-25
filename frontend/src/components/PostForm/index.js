import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './index.css'

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams(); // Get URL parameter
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (id) {
      // Editing an existing post
      setIsEdit(true);
      fetch(`http://localhost:3001/posts/${id}`)
        .then(response => response.json())
        .then(data => {
          setTitle(data.data.title);
          setContent(data.data.content);
        })
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'title') setTitle(value);
    if (name === 'content') setContent(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = isEdit ? `http://localhost:3001/posts/${id}` : 'http://localhost:3001/posts';
    const method = isEdit ? 'PUT' : 'POST';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/'); // Redirect to the home or post list page
      })
      .catch(error => console.error('Error submitting post:', error));
  };

  return (
    <div className='new-post-page'>
      <h2 className='heading'>{isEdit ? 'Edit Post' : 'New Post'}</h2>
      <form onSubmit={handleSubmit} className='form-section'>
        <div className='form-item'>
          <label className='label'>Title:</label>
          <input
            type="text"
            className='input'
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-item'>
          <label className='label'>Content:</label>
          <textarea
            name="content"
            className='input-text'
            value={content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='btn' type="submit">{isEdit ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}

export default PostForm;
