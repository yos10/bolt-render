FROM node:16-bullseye-slim as base
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    tini \
    && rm -rf /var/lib/apt/lists/*
RUN mkdir /bot-study && chown -R node:node /bot-study
WORKDIR /bot-study
USER node

FROM base as dev
ENV NODE_ENV=development

FROM base as prod
ENV NODE_ENV=production
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY --chown=node:node . .
ENTRYPOINT ["/usr/local/bin/tini", "--"]
CMD ["node", "bolt.js"]
