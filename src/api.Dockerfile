ARG RUBY_VERSION="2.6.1"
ARG ALPINE_VERSION="3.8"

FROM ruby:${RUBY_VERSION}-alpine${ALPINE_VERSION}

WORKDIR /usr/src/app

ENV RAILS_ROOT /usr/src/app
ENV RAILS_ENV='production'
ENV RACK_ENV='production'

RUN apk add --no-cache postgresql sqlite sqlite-libs

COPY api/Gemfile api/Gemfile.lock ./

RUN apk add --no-cache --virtual .build-deps build-base postgresql-dev sqlite-dev && \
    gem update --system && bundle update && bundle install --jobs 20 --retry 5 && \
    apk del --purge .build-deps

RUN apk add --no-cache libc6-compat

COPY api .

EXPOSE 3000

CMD ["sh", "-c", "bundle exec rake db:migrate RAILS_ENV=production ; bundle exec puma -C config/puma.rb"]
