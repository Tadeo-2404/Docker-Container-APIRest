#import image
FROM node:19

#working directory
WORKDIR /app

#coping the package.json
COPY package*.json ./

#running the script for node_modules
RUN npm install

#coping all files from the wd
COPY . .
 
CMD ["npm", "start"]

