# Expressway.js

_Express way of using MVC for Express.js_

## Description

This is a simple, lightweight, and in express way of building MVC framework on top of Express.JS

## File Structure

**Models** - This folder will contain your application's data models, which typically interact with the database. Each file corresponds to a different data entity (e.g., userModel.js, productModel.js).

**Views** - The views folder holds your application's presentation logic, usually in the form of HTML templates. These templates are rendered by the server and sent to the client.

**Controllers** - Controllers act as intermediaries between the model and view, handling user input and updating the view or model as necessary.

**Assets** - This folder is where you store static files such as images, CSS stylesheets, JavaScript scripts, and other assets like logos.

**app.js** - This is the main entry point of your application. It initializes the Express server, configures middleware, and starts the server.

**config.js** - This file stores configuration settings such as database credentials, API keys, and server port.

**routes.js** - This file defines the routing logic for your application. It maps URLs to controllers and actions.

### Sample Project Structure

```
/your-project-name
|-- /assets
|   |-- /images
|   |-- /styles
|   |   |-- main.scss
|   |   |-- _variables.scss
|   |   |-- _mixins.scss
|   |-- /scripts
|
|-- /controllers
|   |-- userController.js
|
|-- /models
|   |-- userModel.js
|
|-- /views
|   |-- index.ejs
|   |-- login.ejs
|   |-- register.ejs
|
|-- app.js
|-- config.js
|-- routes.js
|-- package.json
|-- README.md
```

## TODO

### Plans

#### General Tasks

- [ ] Add a sample home page (view page with good design) when starting to run the framework app
- [ ] Create a sample application (simple small project?)
- [ ] Add a database (sample working, maybe MongoDB)
- [ ] Add getting started on README file
- [ ] Add environment variables
- [ ] Create convention on controller and model file names (use RoR convention as guide)
- [ ] Create a CLI command for generating or automating the creation of the model, controller, etc
- [x] Run project using 'npm run dev' instead of 'node app.js'
- [ ] Add TailwindCSS and Bootstrap for styling
- [ ] Run on TypeScript

#### Loading of View File

- [x] have app.js load the routes.js
- [x] have routes.js load the appropriate controllers
- [ ] have the respective controller load the appropriate models
- [x] have the respective controller load the appropriate view file

#### Adding a Database

- [ ] Setting up the database (maybe MongoDB)
- [ ] Adding environment variable and example .env file on the project
