FROM node:17-alpine
WORKDIR /interlucid-site
COPY . /interlucid-site
RUN npm i
CMD npm run dev