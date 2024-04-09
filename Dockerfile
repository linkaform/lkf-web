# Stage 1: The development stage:


FROM node:20.2.0-bullseye AS develop

MAINTAINER LinkaForm

RUN mkdir -p /srv/lkfx
RUN cd /srv/lkfx

COPY ./jsconfig.json /srv/lkfx/jsconfig.json
COPY ./package.json /srv/lkfx/
COPY ./postcss.config.js /srv/lkfx/postcss.config.js
COPY ./safelist.txt /srv/lkfx/safelist.txt
COPY ./tailwind.config.js /srv/lkfx/tailwind.config.js

WORKDIR /srv/lkfx

RUN npm install

#CMD ["npm", "start"]



