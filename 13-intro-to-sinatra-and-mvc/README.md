## Sinatra and MVC

### Questions

- CRUD is an acronym that stands for \***\*\_\_\_\_\*\***, **\_\_**, **\_**, & **\_\_**

- **\_** is an interface that allows us to create web applications in Ruby. It was initially used to make static webpages.

- The client sends a packet of information called a **\_** to the server which in turn sends back another packet of information called a **\_\_**.

- **\_\_**s are methods that communicate to the server which CRUD action we want to execute

- When we enter a URL enter our web browser it sends a **\_\_** request to the server

- The **\_\_** and **\_\_** keys in the request headers are what tells our application which method to invoke

- When a method is invoked after an HTTP request it must respond with **\_\_\_** that details the markup for the webpage that the user sees.

- What does MVC stand for?

- What is MVC?

- What type of file allows us to write HTML with ruby embedded?

- Which part of MVC is responsible to handling our routes?

- Which part of MVC do we create our responses?

- Which part of MVC sends the response to the user?

### RESTful Routing
> * <http://www.restular.com/>




### MVC
  - structure
  - paradigm
  - pattern
  - architecture

- **Model** 
  - class
  - business logic
  - methods
  - persistence -> database stuff
  - data

- **View**
  - front-end
  - the interface
  - the thing the user interacts with 
  - HTML, CSS, JS, Image, Movies
  - presentation layer
  - accepts user input

- **Controller**
  - connection to the server
  - plumbing
  - links view the and model
  - 


### Sinatra



- light weight web application platform written in Ruby
  - a Rack app (it implements the Rack interface)
  - used to create dynamic web applications
- Corneal - a gem that will create the scaffolding of a Sinatra application for us
    - make a lot of decisions for us, e.g., what db to use, etc.
