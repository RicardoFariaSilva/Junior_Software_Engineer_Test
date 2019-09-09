# Junior_Software_Engineer_Test
Doghero test case in selection process to Junior Software Engineer position

## Day by day
Here I'm going to register all my activities. The main idea it's learn about Angular on Rails and do some work in each of the 7 available days.

### Day 1
After reading the test case, Angular on Rails seemed to me be the best choice. It's a mix of things that I already have worked (basic Angular app) and new challenges, such as Ruby on Rails. All languages and techs that I really wanted to learn, so win win situation :)
Also, I drew my workflow that I pretend to follow:
* Set up Angular and Ruby environment.
* Define client, dog and dog walker requirements. Which information is going to be stored.
* Draw all screens. Starting with the input screens and then the presentation ones.
* Learn basic Ruby on Rails and set up API.
* Quick angular review. Set up Angular project.
* Connect API and front-end.
* Deploy on Heroku.

Thus, all environment was set in day 1. Beginning with git and this repository at GitHub and after in my PC with NodeJS and Angular and Ruby on Rails.

### Day 2
Used to think and model all data that's going to be stored. A [class diagram](./Docs/Class_diagram.jpeg) was made in order to guide me on constructing the future API.
I did some researches in mockup tools and found about [Adobe XD](https://www.adobe.com/br/products/xd.html). It was used to create some mockups about all screens that are going to be developed.

### Day 3/4
After the data has been modeled, I started to code the backend. As my previous knowledge about Rails was near 0, I followed some YouTube guides. I would like to express my thanks to One Bit Code and [this](https://onebitcode.com/api-completa-rails/) incredible tutorial. The API was based and some others too, but only when some specific problem appeared. Mainly this was my flow: code based on tutorial -> problem -> search solution -> apply solution -> comeback to tutorial. Some gems were installed to prevent attacks, like 'rack-attack' and 'devise', since CORS was able with gem 'rack-cors' and deploying in Heroku was my intention.

I added the models that I modeled in Class Diagram, but some problems showed off resulting in an API different from I imagined. First, I  didn't know how to do the 1...N association between Client and Dogs. So in version 1 of the API there is no association. Also, I forgot to change phone_number to string in the Class Diagram. Generating models I remembered to change in Clients, but not in Walkers.

Create and configure controllers for the models were simple. I consulted rails documentation in some cases and all issues were solved. Last, but not less important, I populated the database with 10 entries of each type. I used [Postman](https://www.getpostman.com/), a tool that helps in API testing, and you can see my collection [here](https://www.getpostman.com/collections/eeee17e9774f523ec8fe).

I deployed the API in Heroku and it's accessible in this [link](https://floating-lowlands-65453.herokuapp.com/api/v1/). You may manipulate Client, Dog and Walker models by clients.json, dogs.json and walkers.json endpoints. But unless you have a user, you will not be allowed to do nothing. If you want, please contact me ricardo.faria.silva@outlook.com.

## How to run
Instructions of how to run and use the application.
```
TODO
```