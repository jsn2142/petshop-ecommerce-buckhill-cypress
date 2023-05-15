<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Cypress Automation Script of PetShop eCommerce Application</h3>
  <p align="center">
    A cypress project with various implementations of automation!
    <br />
    <a href="https://github.com/jsn2142/petshop-ecommerce-buckhill-cypress/tree/master/cypress/e2e"><strong>Checkout the test scripts with test case documentation »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jsn2142/petshop-ecommerce-buckhill-cypress/blob/master/cypress/bugs/qa-1123.md"><strong>Bug Report »</strong></a>
    <br />
    <br />
  </p>
</div>
This repository contains automated test scripts for testing a web application called Petshop using the Cypress testing framework. This contains 2 test scripts, one is the User Journey, another is the Admin Journey. Test case documentation for both the tests are available in the e2e folder. Also, a bug report can be found in here.

### Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/jsn2142/petshop-ecommerce-buckhill-cypress.git
   ```
2. Install Cypress in the repo directory in the local machine
   ```sh
   npm install cypress@12.7.0 --save-dev
   ``` 
3. Install Cypress reporter, using Terminal install cypress-mochawesome-reporter, with command
   ```sh
   npm i --save-dev cypress-mochawesome-reporter
   ```
4. Open the Cypress Test Runner.
   ```sh
   npx cypress open
   ```
5. Click on a spec file to run the associated tests. 
6. To run in Headless mode, and to generate Mochaawesome reports of all the specs and video recording of all of them
   ```sh
   npx cypress run --e2e
   ```
7. To run in Docker, download Docker application from <a href="https://www.docker.com/" target="_blank">Docker website</a>, then install it.

8. To build the docker image(keep the docker app running in the background), run this command: 
   ```sh
   docker build -t petshop-cypress:1.0.0 .
   ```
9. To run the tests using the docker image(keep the docker app running in the background), run this command: 
   
   for Powershell:
   ```sh
   docker run --rm -it -v ${PWD}:/e2e petshop-cypress:1.0.0
   ```
   for CMD:
   ```sh
   docker run --rm -it -v ${pwd}:/e2e petshop-cypress:1.0.0
   ```
   for Git Bash:
   ```sh
   docker run --rm -it -v %cd%:/e2e petshop-cypress:1.0.0
   ```
### Congratulations 🎉 Now you have successfully set up the repository on your computer! 🚀 