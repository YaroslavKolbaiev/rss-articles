import Parser from 'rss-parser';
import Joi from 'joi';
import prismaClient from '../prisma/client.js';

export const schema = Joi.object({
  creator: Joi.string().required(),
  title: Joi.string().required(),
  link: Joi.string().uri().required(),
  pubDate: Joi.date().max('now').required(),
  content: Joi.string().required(),
});

const parser = new Parser();

const RSS_URL = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';

async function getRssFeed() {
  const { items } = await parser.parseURL(RSS_URL);

  const validItems = items.reduce((acc, item) => {
    const { creator, title, link, pubDate, content } = item;

    const rssFeedItem = {
      creator,
      title,
      link,
      pubDate,
      content,
    };

    const { error, value } = schema.validate(rssFeedItem);

    if (error) {
      console.error('Failed to validate RSS feed item:', error);
    } else {
      acc.push(value);
    }

    return acc;
  }, []);

  if (validItems.length > 0) {
    await prismaClient.article.createMany({
      data: validItems,
    });
  }

  await fetch(`${process.env.HOST}/api/revalidate-articles`);
}

export default getRssFeed;
