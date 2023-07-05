FROM node:18 as node_env

WORKDIR /var/www/html

COPY . .

RUN npm install

RUN npm run build

FROM nginx

COPY --from=node_env /var/www/html/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
