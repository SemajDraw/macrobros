# Install dependencies only when needed
FROM node:14-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./package.json
RUN npm install --frozen-lockfile --production

## Rebuild the source code only when needed
#FROM node:14-alpine AS builder
#WORKDIR /app
#RUN export NODE_OPTIONS=--max-old-space-size=8192
#COPY . .
#COPY --from=deps /app/node_modules ./node_modules
#RUN npm run build


# Make sure to build next image before deploying to EBS

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# You only need to copy next.config.js if you are NOT using the default configuration
COPY ./next.config.js ./next.config.js
COPY ./public ./public
COPY --from=deps /app/node_modules ./node_modules
COPY ./build ./build
COPY ./package.json ./package.json

# Install PM2 globally
RUN npm install --global pm2

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/build
USER nextjs

EXPOSE 3000

# disable NextJS telemetry.
RUN npx next telemetry disable

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
