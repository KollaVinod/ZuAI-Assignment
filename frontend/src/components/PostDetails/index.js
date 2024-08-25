import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './index.css'

function PostDetails() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch post details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>No post found.</p>;

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          navigate('/'); // Redirect to home or post list page after deletion
        } else {
          throw new Error('Failed to delete post.');
        }
      })
      .catch(err => setError(err.message));
  };


  return (
    <div className='post-details-page'>
      <h1>{post.data.title}</h1>
      <p>{post.data.content}</p>
      <div className='btn-section'>
        <button className='btn' onClick={handleEdit}>Edit</button>
        <button className='btn' style={{backgroundColor: 'red', marginLeft: '10px'}} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default PostDetails;
