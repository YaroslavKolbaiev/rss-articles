import { PrismaClient } from '@prisma/client';
import Joi from 'joi';

const prismaClient = new PrismaClient();

const schema = Joi.object({
  creator: Joi.string().required(),
  title: Joi.string().required(),
  link: Joi.string().uri().required(),
  pubDate: Joi.date().max('now').required(),
  content: Joi.string().required(),
  approved: Joi.boolean().default(false),
});

export { prismaClient, schema };
