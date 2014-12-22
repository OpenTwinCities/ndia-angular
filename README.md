ndia-angular
============

Modular front-end client for [ndia-django](https://github.com/OpenTwinCities/ndia-django). 

The Angular portion of the NDIA project aims to build a responsive, well designed frontend for
users to find information about public technology centers, classes, and events in North Minneapolis.

---
## Clone ndia-angular #
```bash
$ git clone https://github.com/OpenTwinCities/ndia-angular.git
```
If you would like to contribute to ndia-angular, we strongly recommend that you
[fork the repository and create pull-requests](https://guides.github.com/activities/forking/).

## Prerequisites #

  - ruby (for [Sassy CSS](http://sass-lang.com/))
  - node.js & npm
  - grunt
  - bower

### Getting Ruby and Sass #

Check if you have ruby available on your system:
```bash
$ which ruby
```
If not, find a suitable method for your OS and personal taste to use to install ruby.
Many such methods are explained at [www.ruby-lang.org](https://www.ruby-lang.org/en/documentation/installation/).

Once you have ruby installed you should be able to run
```bash
$ bundle install
```
from within the ndia-angular directory. This will install the [rubygems](https://rubygems.org/) for sass, compass and any other ruby dependencies.

### Getting Node & NPM #

  There are a few ways to get node & npm installed on your system:
  * You can grab the latest installer directly from the [Node.js website](http://nodejs.org).
  * OR, you can [install node via your OS's package manager]( and create pull-requests).
  * OR (my favorite), you can use the [Node Version Manager](https://github.com/creationix/nvm).

### Using npm to install JavaScript modules #

  Once you have npm installed, you may want to install the following modules globally* (by passing the -g argument to npm):
  ```bash
  $ npm -g install bower
  $ npm -g install grunt-cli
  ```
  _* in general we like to keep our node modules in the local directory for the project which requires them. There are a few exceptions to this, such as grunt and bower, which will generally be used across many different projects._

  Once you have bower and grunt, you can install the remaining modules for this project. From withing the ndia-angular directory run:
  ```bash
  $ npm install
  $ bower install
  ```

### Running ndia-angular with grunt #

  Get a list of possible grunt commands by running:
  ```bash
  $ grunt --help
  ```

  To run the server and make this application available in your browser at [http://localhost:9000](http://localhost:9000):
  ```bash
  $ grunt serve
  ```

  To just run the tests in the terminal:
  ```bash
  $ grunt test
  ```

  To build the production assets, run the default grunt task, simply:
  ```bash
  $ grunt
  ```
