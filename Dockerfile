#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node18.12.0-chrome107
#Create the folder where our project will be stored
RUN mkdir /petshop-cypress
#Make workdirectory
WORKDIR /petshop-cypress
#Copy the essential files that must be used to run the scripts
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
COPY ./cypress.env.json .
#Install the cypress dependencies in the work directory
RUN npm install --save-dev cypress@12.7.0
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last entrypoint
CMD [""] 