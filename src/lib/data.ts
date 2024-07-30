import { unstable_cache } from 'next/cache';
import { ITEMS_PER_PAGE } from '@/utils/itemsPerPage';
import prismaClient from '../../prisma/client';

const fetchTotalArticles = unstable_cache(
  async (search: string = '') => {
    const totalArticles = await prismaClient.article.count({
      where: {
        title: {
          contains: search,
        },
      },
    });
    return totalArticles;
  },
  ['totalArticles'],
  {
    tags: ['update-articles'],
  },
);

const fetchArticles = unstable_cache(
  async (page: string = '1', search: string = '') => {
    const skipItems = (+page - 1) * ITEMS_PER_PAGE();

    const take = ITEMS_PER_PAGE();

    const articles = await prismaClient.article.findMany({
      take,
      skip: skipItems,
      where: {
        title: {
          contains: search,
        },
      },
      orderBy: {
        pubDate: 'desc',
      },
    });

    return articles;
  },
  ['articles'],
  {
    tags: ['update-articles'],
  },
);

const fetchArticle = unstable_cache(
  async (id: string) => {
    const article = await prismaClient.article.findUnique({
      where: {
        id,
      },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    return article;
  },
  ['article'],
);

const fetchUser = async (email: string) => {
  const user = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  return user;
};

export {
  fetchArticles, fetchArticle, fetchTotalArticles, fetchUser,
};
