import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { scheduleJob } from 'node-schedule';
import getRssFeed from './worker/rssService.js';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });

  scheduleJob('0 8 * * *', async () => {
    try {
      getRssFeed();
      console.log('RSS feed fetched successfully');

    } catch (error) {
      console.error('Failed to fetch RSS feed:', error);
    }
  });
});
