const fastify = require('fastify');
const Next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev });

app.prepare().then(() => {
  const server = fastify();

  server.get('/', (req, res) => {
    return app.render(req.req, res.res, '/', req.query);
  });

  server.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
