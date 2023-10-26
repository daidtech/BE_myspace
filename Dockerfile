# syntax=docker/dockerfile:1
FROM ruby:3.0.6-bullseye
# resolve MAC issue
# RUN echo 'deb http://security.debian.org/debian-security bookworm-security main contrib non-free' > /etc/apt/sources.list
# RUN sed -i '/jessie-updates/d' /etc/apt/sources.list
# RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 54404762BBB6E853
# RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BDE6D2B9216EC7A8



RUN apt-get update \
    && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

WORKDIR /app
COPY . .

RUN gem install bundler -v 2.3.0
RUN bundle install


RUN npm install yarn --global
RUN yarn install