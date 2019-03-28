const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})
const context = {
  title: 'hello',
  meta: `
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
  `
};

const createApp = require('/path/to/built-server-bundle.js');

server.get('*', (req, res) => {
  const context = { url: req.url };

  renderer.renderToString(app, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found');
      } else {
        res.status(500).end('Internal Server Error');
      }
    } else {
      res.end(html);
    }
  })
});

server.listen(8080, function () {
  console.log('HTTP Server is running on: http://localhost:%s', 8080);
});
