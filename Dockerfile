FROM node:18 as node
WORKDIR /app
COPY .. .
RUN npm install
RUN npm run build --prod

FROM nginx:1.21.6-alpine
COPY --from=node /app/dist/stone-scissors-paper-frontend /usr/share/nginx/html

CMD ["/bin/sh", "-c", \
"echo API_URL=[$API_URL], && \
sed -i s#APIURL#$API_URL#g /usr/share/nginx/html/main.*.js && \
nginx -g 'daemon off;'"]
