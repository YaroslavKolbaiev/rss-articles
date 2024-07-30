FROM node:20.0.0-alpine

ENV DATABASE_URL "file:./articles.db"
ENV SESSION_SECRET "U50KD8OY5EhbUQ9sg/i96UvMbKFOjWsR6U8A0uMtrI8="
ENV NEXT_CRYPTO_SECRET "amazingsecret"
ENV HOST "http://localhost:3000"

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY ./ ./

RUN npm run build

CMD ["npm", "start"]