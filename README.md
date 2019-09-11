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

### Day 5
Since my API was online, I focused on start the front-end. I chose Angular because in the past I started a small project using it and remember those concepts seemed nice. I followed a really good tutorial and I recommend to you if you don't know the basics like me ([link](https://www.devmedia.com.br/view/viewaula.php?idcomp=37621)). But most of things I had to check official Angular documentation. Some others tutorial helped me a lot understand how models, components and services work in Angular. 

One of my major difficulties are in html and css. So I had to change what a planned with mockups and follow what the tutorial was suggesting. This is a point where I need to improve.

All listing and showing screens were done, lefting only the pages where dogs, clients and walkers can be created.

### Day 6
The POST method were implemented in all services and all create screens were done. 

I coded less than since I started on this day, but It was the hardest. I faced some problems communicating with the API because I didn't know how to pass the data properly. In the beginning I was trying to send it like raw JSON, but I only was getting 402 response. So I changed it to form-data and got it the way. I spent some time in this and it was a huge experience in Angular, since I had to search a lot of tutorials and documentations. To help solve this problem it was need to remove require('model') in all controllers in the backend. I pretend to deploy the frontend app in Heroku like I did with backend.

### Day 7
Frontend deployed on Heroku. I had some problems doing it, but when I realized that my dist folder was being ignored, all gonne much easier. 

## How to run
Instructions of how to run and use the application.
```
[BACKEND]
All my backend it's in RESTful API format at https://peaceful-gorge-94677.herokuapp.com/
To auth, use these in header:
"X-User-Email", "online@teste.com"
"X-User-Token", "YeuHBHsJyDsGVFoUD9Ep"

There are 3 available links: api/v1/clients, api/v1/dogs and api/v1/walkers
For more details open backend controllers.

[FRONTEND]
You may access the web app at https://peaceful-gorge-94677.herokuapp.com/
```