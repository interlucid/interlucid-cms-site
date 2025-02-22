# Interlucid CMS Site

a site for the Interlucid music project that uses a headless CMS

## Setup

### Bare metal

1. Clone repo
2. `npm i`
3. `npm run dev`

### Docker

if you're using Windows, make sure you clone this repo directly onto the WSL filesystem. otherwise the hot reloading will not work (see https://github.com/microsoft/WSL/issues/4739)

1. Install Docker
2. Clone repo
3. set up .env file (get values from LastPass)
4. run `docker compose build`
5. run `docker compose up`

## Generating types

unfortunately the Contentful library I'm using to generate types is out of date. it requires some extra steps in order to pass the type check as of June 2022. See details [here](https://github.com/intercom/contentful-typescript-codegen/issues/108#issuecomment-1107534265).