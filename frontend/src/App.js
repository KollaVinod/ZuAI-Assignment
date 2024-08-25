import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostsList';
import PostDetail from './components/PostDetails';
import PostForm from './components/PostForm';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<PostList />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                    <Route path="/new" element={<PostForm />} />
                    <Route path="/edit/:id" element={<PostForm />} />
                </Routes>
                <Footer />
            </Router>
        );
    }
}

export default App;
