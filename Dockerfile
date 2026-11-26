FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG NUXT_APP_BASE_URL=/
ARG NUXT_PUBLIC_SITE_URL=https://matiaslance.github.io
ENV NUXT_APP_BASE_URL=$NUXT_APP_BASE_URL
ENV NUXT_PUBLIC_SITE_URL=$NUXT_PUBLIC_SITE_URL

RUN npm run generate

FROM nginx:1.27.4-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 80
