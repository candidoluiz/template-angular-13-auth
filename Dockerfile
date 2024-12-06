FROM node:16.13.0-alpine AS angular
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --base-href --output-path=dist/app-front

FROM nginx:1.25-alpine

COPY --from=angular app/dist/app-front /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/templates/default.conf.template

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env/env.template.js > /usr/share/nginx/html/assets/env/env.js && \
                         envsubst < /etc/nginx/templates/default.conf.template | sed -e 's/§/$/g'      > /etc/nginx/conf.d/default.conf          && \
                         exec nginx -g 'daemon off;'"]