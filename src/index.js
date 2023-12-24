const minifier = require('html-minifier');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const fs = require('fs');

app.use(cors({ accessControlAllowOrigin: '*' }));
app.use(express.json({ type: 'application/json' }));
app.use('/', express.static('public'));
// app.use('/api/markdown', express.static('README.md'));

app.get('/api/markdown', (req, res) => {
    const markdown = fs.readFileSync('README.md', 'utf8', (err, data) => {
        console.log(err);
    })
    res.json({ markdown });
});

/**
 * Require body JSON.stringify({ html: "\"<html>\n   </html>\"" })
 */
app.post('/api/minify', (req, res) => {
    const html = req.body.html;
    if (typeof html === 'string' && html.length > 0) {
        // Minify the HTML content
        const minifiedHtml = minifier.minify(html, {
            collapseWhitespace: true,
            removeComments: true,
            // Add more options as needed
        });
        res.status(200).json({ html: minifiedHtml });
    } else {
        res.status(400).send('Post HTML content to minify.');
    }
});

// module.exports = app;
// or
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
