# Selenium Relative Locators in JavaScript

This is an demonstration of UI testing by using Selenium 4 Relative Locators and JavaScript.



## Installation

For this project I will use *yarn* for installing packages and running scripts. You will need to install either **yarn** or **node** on your machine.
```
yarn install
```



## Getting Started

This is an unofficial guide that shows how to use Relative Locators with JavaScript.

First create empty directory which will you use as your project directory.
Step into your project and generate __package.json__ to get consistent  installs across machines where you can store information about version, author, and etc.
```
yarn init
```



## Add dependencies to project

This project will use **chrome** browser and **mocha** framework for testing. Packages can be added using command.
```
yarn add <name of package>
```
Currently for this project it would look like this.
```
yarn add chromedriver selenium-webdriver
```
```
yarn add mocha -D
```



## Running UI Test

Running UI test can be done with **yarn** command.
```diff
yarn test
```
