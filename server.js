const express = require('express');
const next = require('next');

const port = 3002;

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();
    server.get('*', (req, res) => {
        const url = req.url;
        // console.log('~~~~~~~~~', url);
        if(['/page1', '/page2'].includes(url)) {
            app.render(req, res, '/csr');
        }
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if(err) throw err;
        console.log(`Ready on localhost:${port}`);
    })
})