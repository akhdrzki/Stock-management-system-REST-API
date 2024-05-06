FROM oven/bun

WORKDIR /usr/src/

COPY package*.json ./

RUN bun install 

COPY . .

ENV PORT=2000

EXPOSE 2000

CMD [ "bun", "dev"]
