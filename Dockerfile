FROM node:18-alpine
RUN mkdir -p /home/boilerplate-next-sass
COPY . ./boilerplate-next-sass

WORKDIR /boilerplate-next-sass

RUN npm install
# EXPOSE 3000
CMD ["npm", "run", "dev"]