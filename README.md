# Crew 
## Your events. Your passions. Your crew.

Crew is a Dev Academy Aotearoa final group project created by Laura, Sharon, Hannah and Rodolfo (team Crew). 

As a social media app, Crew is all about the connections we forge with different groups of friends. Whether it's your hiking buddies, your soccer team, or your close friend group, Crew provides a space for you and your crew to hang out and organise events together.

---------

### A user can: 
- Log in or register using Auth0's authentication platform
- View all the crews they are a part of
- Edit their profile, including the ability to upload an avatar picture from their local files
- View all events associated with each of their respective crews
- View event details, including a dynamic Google maps visual of the location
- RSVP to an event, and see all other crew members going to that event

---------

### Tech stack 
- Node.js
- React
- ReactQuery
- TypeScript
- Tailwind CSS
- Knex
- SQLite3
- Express
- Superagent
- Vite 
- Vitest
- Multer

--------

#### MVP Goals (all achieved)
- Show all crews in user dashboard
- Show all events for a crew
- Show all details for an event
- View all members of a crew 
- Set up user login/register and authentication
- Allow user to edit their profile details

#### Stretch Goals 
- Allow users to RSVP to an event, and see other crew members who are going (achieved)
- Embed a dynamic Google Maps location into event details, using the Google Maps external API (achieved)
- Add a new crew
- Invite members to a crew
- Add new event
- Group chat for a crew's members 

---------

### Key Learnings 

**Technical**
- Fullstack user authentication using Auth0
- File uploading using Multer
- Querying relational databases with many-to-many and one-to-many relationships
- Consuming and integrating external APIs into an exisiting codebase
- Reinforcing previous learnings around React, ReactQuery, Superagent, Express, and Knex
- Styling with Tailwind CSS 

**Human Skills**
- Project management
- Communication
- Constructive feedback (using the ASK method)
- Agile methodologies - each team member took turns leading daily stand-ups and huddles
- Conflict resolution
- Pair programming and collaboration 


------------

### About the team 
#### [Laura Ellen Harris](https://github.com/laura-ellen-harris), Product Owner 
Crew was Laura's idea. As Product Owner, she designed the app's wireframes using Figma, and styled all of Crew's frontend components using Tailwind CSS. She also took the lead on decisions around user experience and new features.  

**Key tickets** 
- Install and configure Tailwind CSS 
- Create a responsive mobile design and wireframes in Figma
- Create and style reusable user interface components
- Create and style a responsive navigation bar
- Style all React components and pages

#### [Hannah Burgoyne](https://github.com/HannahBurgoyne), Git Lead 
As Git Lead, Hannah was responsible for managing all of the branches in the Crew repo. She set up a project board and ticketing system for the project, reviewed and merged all of the team's pull requests into the main branch, resolved merge conflicts and created hotfixes for bugs.  

**Key tickets**
- Set up Auth0 and integrate it into existing codebase
- Install and configure Multer, an npm package for uploading files to the assets directory
- Show all RSVPs on event details page
- Update RSVP attendance for a logged in user
  
#### [Rodolfo Uso Delduca](https://github.com/UsoDelduca), Frontend Lead 
Rodolfo set up frontend components for Crew, and worked closely with Sharon to render data in the browser. He fetched data by making multiple API calls to the server, exposed data using ReactQuery and React, and worked on fullstack features. 

**Key tickets**
- Set up Express server and initial routing
- Create frontend components and routes
- Render all events and members of a crew in the crew dashboard 
- Render all details for an event

#### [Sharon Li](https://github.com/Sharon-Li-77), Backend Lead 
Sharon was responsible for setting up the databases and seed data, querying the database through Knex, and routing these queries to be consumed as API calls. She also worked on fullstack features alongside Rodolfo. 

**Key tickets** 
- Set up database migrations and seeds for each table 
- Render all crews a user belongs to on their dashboard
- Embed the Google Maps API into the event details component




