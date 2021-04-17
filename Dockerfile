FROM node:12.17-alpine3.11

WORKDIR /home/pptruser/app

# Copy directory and install node modules
COPY package*.json ./
RUN npm install --only=prod
COPY build .

# Install puppeteer dependencies
RUN apk --update add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    ttf-liberation

# Add user so we don't need --no-sandbox
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads /app \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

# Run everything after as non-privileged user
USER pptruser

EXPOSE 3000

CMD ["npm", "start"]
