'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import prismaClient from '../../prisma/client';
import { schema } from '../../worker/rssService';
import { getSession } from './auth';

async function createArticle(formData: FormData) {
  const { username } = await getSession();
  const {
    title, link, pubDate, content,
  } = Object.fromEntries(formData);

  const data = {
    title,
    creator: username,
    link,
    pubDate,
    content,
  };

  const { error, value } = schema.validate(data);

  if (error) {
    throw new Error(error.message);
  }

  await prismaClient.article.create({
    data: value,
  });

  revalidateTag('update-articles');
  redirect('/admin');
}

async function updateArticle(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const link = formData.get('link') as string;
  const id = formData.get('id') as string;

  const data = {
    title,
    content,
    link,
  };

  await prismaClient.article.update({
    where: {
      id,
    },
    data,
  });

  revalidateTag('update-articles');
  revalidatePath(`/${id}`);
  revalidatePath(`/admin/${id}`);
  redirect('/admin/');
}

async function deleteArticle(formData: FormData) {
  const id = formData.get('id') as string;

  await prismaClient.article.delete({
    where: {
      id,
    },
  });

  revalidateTag('update-articles');
  revalidatePath(`/${id}`);
  revalidatePath(`/admin/${id}`);
  redirect('/admin');
}

export { createArticle, updateArticle, deleteArticle };
