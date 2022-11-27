FROM node:alpine3.16

WORKDIR /wanta

COPY . /wanta

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "dev" ]