import React from 'react';

import './index.css'

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data.data }))
            .catch(error => console.error('Error:', error));
    }

    render() {
        const { posts } = this.state;
        return (
            <div className='blog-list-page'>
                <h2 className='heading'>Blog Posts</h2>
                <ul className='post-list'>
                    {posts.map(post => (
                        <li className='item' key={post.id}>
                            <a href={`/post/${post.id}`}>{post.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostList;
