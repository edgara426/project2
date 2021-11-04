# Project Overview
## Project Links
- [github repo link](https://github.com/edgara426/project2)
- [deployment link](edgara426.github.io/project2/)
## Project Description
Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
## API
Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 
https://favqs.com/api/qotd
```
{
"qotd_date": "2021-10-29T00:00:00.000+00:00",
"quote": {
"id": 58767,
"dialogue": false,
"private": false,
"tags": [],
"url": "https://favqs.com/quotes/leonardo-da-vinci/58767-the-truth-of--",
"favorites_count": 1,
"upvotes_count": 1,
"downvotes_count": 0,
"author": "Leonardo da Vinci",
"author_permalink": "leonardo-da-vinci",
"body": "The truth of things is the chief nutriment of superior intellects."
}
}
```
https://animechan.vercel.app/api/random
```
{
"anime": "One Piece",
"character": "Donquixote Doflamingo",
"quote": "The weaker person is the more he gets hung up on other people's pain and then he self-destructs"
}
```
https://api.chucknorris.io/jokes/random
```
{
"categories": [],
"created_at": "2020-01-05 13:42:26.194739",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "Go960ayjQ7aXzTcFh4Cz7g",
"updated_at": "2020-01-05 13:42:26.194739",
"url": "https://api.chucknorris.io/jokes/Go960ayjQ7aXzTcFh4Cz7g",
"value": "Chuck Norris wears denim underwear."
}
```
## Wireframes
Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.
- [Mobile](https://imgur.com/a/rSFLsoa)
### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  
#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
#### PostMVP EXAMPLE
- Add localStorage or firebase for storage
## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 
| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Home | This will render a Random Quote on load | 
| Anime | This will render a Random Anime Quote on load |
| Norris | This will render a Random Norris Quote on load |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 4hr | 4hr |
| Working with API | H | 3hrs| 8hr | 8hr |
| Load quote on page load| H | 4hr| 2hr | 2hr |
| Anime Api | H | 2hr | 2hr | 2hr |
| Norris Api | H | 2hr | 2hr | 2hr |
| Total | H | 14hrs| 20hrs | 20hrs |
## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 
 * Bulma CSS
## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
	Bulma Button and icon from Api

  <button class="button is-large">
            <span class="icon is-large">
              <i class="fas fa-heading fa-2x">
                <img src={quote.icon_url} alt="Norris" />
              </i>
            </span>
          </button>
```