#base image
FROM node

#set wrking directory
RUN mkdir /usr/src/app

#coping all files from current directory to docker
COPY . /usr/src/app

#add `usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/.bin:$PATH

#install and cached app dependencies
RUN yarn

#start app
CMD ["npm","start"]
