FROM node:20.0.0-alpine

ENV SESSION_SECRET "whateverlongstringbutatleast32characterswillbeok"
ENV NEXT_CRYPTO_SECRET "youramazingsecret"

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

RUN npx prisma init --datasource-provider sqlite

CMD ["npm", "run", "dev"]