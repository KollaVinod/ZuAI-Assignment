const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
