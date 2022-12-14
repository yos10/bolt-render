FROM node:16-bullseye-slim as base
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
CMD ["node", "bolt.js"]
