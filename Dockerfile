FROM node:22.17-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build


FROM builder AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
EXPOSE 3000

RUN addgroup --system --gid 1001 nodejs \
    && adduser  --system --uid 1001 nextjs \
    && chown -R nextjs:nodejs /app
USER nextjs


RUN mkdir standalone
COPY --from=builder /app/.next/standalone       ./standalone
COPY --from=builder /app/.next/static           ./.next/static
COPY --from=builder /app/public                  ./public

WORKDIR /app/standalone
CMD ["node", "server.js"]
    