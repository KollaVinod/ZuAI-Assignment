const express = require('express');
const router = express.Router();
const db = require('../database');

// GET all posts
router.get('/', (req, res) => {
    db.all("SELECT * FROM posts", (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({data: rows});
    });
});

// GET a post by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        if (!row) {
            res.status(404).json({error: "Post not found"});
            return;
        }
        res.json({data: row});
    });
});

// POST create a new post
router.post('/', (req, res) => {
    const { title, content } = req.body;
    db.run("INSERT INTO posts (title, content) VALUES (?, ?)", [title, content], function(err) {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.status(201).json({data: {id: this.lastID}});
    });
});

// PUT update a post by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    db.run("UPDATE posts SET title = ?, content = ? WHERE id = ?", [title, content, id], function(err) {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({error: "Post not found"});
            return;
        }
        res.json({message: "Post updated successfully"});
    });
});

// DELETE a post by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM posts WHERE id = ?", [id], function(err) {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({error: "Post not found"});
            return;
        }
        res.json({message: "Post deleted successfully"});
    });
});

module.exports = router;
