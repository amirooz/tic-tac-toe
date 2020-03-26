#base image
FROM node:alpine

#set wrking directory
WORKDIR /app

#coping package.json
COPY package.json .

#install and cached app dependencies
RUN npm install

#coping all files from current directory to docker
COPY . .

#start app
CMD ["npm","start"]
