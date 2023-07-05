FROM node:18

WORKDIR /app

COPY . .

RUN npm install

ENV PORT=8001

EXPOSE 8001

CMD [ "npm", "start" ]