import { Article } from '@prisma/client';
import Parser from 'rss-parser';
import { prismaClient, schema } from './client';

async function getRssFeed() {
  const parser = new Parser();
  const RSS_URL = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';

  const { items } = await parser.parseURL(RSS_URL);

  const validItems = items.reduce((acc, item) => {
    const {
      creator, title, link, pubDate, content,
    } = item;

    const rssFeedItem = {
      creator,
      title,
      link,
      pubDate,
      content,
    };

    const { error, value } = schema.validate(rssFeedItem);

    if (error) {
      console.error(error.message);
    } else {
      acc.push(value);
    }

    return acc;
  }, []) as Article[];

  if (validItems.length > 0) {
    await prismaClient.article.createMany({
      data: validItems,
    });
  }
}

export default getRssFeed;
