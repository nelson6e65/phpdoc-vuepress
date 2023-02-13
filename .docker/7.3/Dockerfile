FROM php:7.3-cli

LABEL maintainer="Nelson Martell"

ARG WWWGROUP=1000
ARG NODE_VERSION=16

RUN groupadd --force -g $WWWGROUP docker-user
RUN useradd -ms /bin/bash --no-user-group -g $WWWGROUP -u $WWWGROUP docker-user

RUN apt-get update -y
RUN apt-get install -y git zip unzip
RUN docker-php-ext-install \
    mbstring ctype
RUN php -r "readfile('https://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer

RUN curl -sLS https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs && npm i -g npm

RUN npm install --global http-server

WORKDIR /var/www/html
