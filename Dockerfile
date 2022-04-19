# use Alpine which is a lightweight docker image for node, 17 is the latest Node version
FROM node:17-alpine
COPY . /interlucid-site
RUN cd /interlucid-site && npm i
CMD cd /interlucid-site && npm start