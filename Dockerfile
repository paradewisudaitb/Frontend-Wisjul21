# build environment
FROM node:fermium-alpine as build

COPY . /app
WORKDIR /app

RUN yarn
RUN yarn build

# production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
