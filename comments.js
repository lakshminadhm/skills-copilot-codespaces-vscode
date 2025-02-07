// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var comments = require('./comments.json');

// Create a route to get all comments
app.get('/api/comments', function(req, res) {
    res.json(comments);
});

// Create a route to add a comment
app.post('/api/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Create a route to delete a comment
app.delete('/api/comments/:id', function(req, res) {
    var id = req.params.id;
    var index = comments.findIndex(function(comment) {
        return comment.id == id;
    });
    comments.splice(index, 1);
    res.json({id: id});
});

// Start server
var server = app.listen(3000, function() {
    console.log('Server listening on port 3000');
});