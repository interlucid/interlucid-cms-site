# Interlucid CMS Site

a site for the Interlucid music project that uses a headless CMS

## Setup

if you're using Windows, make sure you clone this repo directly onto the WSL filesystem. otherwise the hot reloading will not work (see https://github.com/microsoft/WSL/issues/4739)

1. Install Docker
2. Clone repo
3. set up .env file (get values from LastPass)
4. run `docker compose build`
5. run `docker compose up`