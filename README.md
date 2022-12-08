# SpotifyComparison

## Description

An application for fetching data from a Spotify API, and using this data for a web application where the user can compare songs and artists to one another and save songs to their playlist. There will also be a game of sorts where the user is given two tracks or artists and have to guess which of them is more popular than the other. Our target user is people who love music and listen to it regularly who also wants to be able to look at statistics of their music and favourite artists and compare.

## What we have done so far

So far in the project, the data has been fetched from the API, and the search function used to look up artists or tracks has been implemented. With looking up a track or an artist, the picture associated with them is accompanied with their names in the search results. 

## What we plan to do

We plan to implement a page where the user can see their playlist, as well as a bar on top where the user can change between said playlist page and the home page. We also plan on adding the functionality of being able to put up two songs or artists on the screen and be able to compare them and actually add them to their playlist. Lastly, we plan on trying to implement this game idea in another tab. 

## File structure

We use the Model-Presenter-View strusture as per the course's labs.

### public

- <strong>style.css</strong> - The css file containing all of our classes used in our HTML code.

### src

- <strong>SpotifyModel.js</strong> - Model for the entire program. Communicates with views via presenters, and has observers.
- <strong>currencySource.js</strong> - Used to fetch data from the API and treat these HTTP responses accordingly.
- <strong>firebaseModel.js</strong> - Used with firebase to deploy our project with persistence.
- <strong>resolvePromise.js</strong> - Resolves promises by saving a promise state with promise, data and errors.

<strong>presenters</strong>

- <strong>VueRoot.js</strong> - The root for our Vue project.
- <strong>app.js</strong> - The file is used to display the different screens depending on their hash.
- <strong>searchPresenter.js</strong> - Presenter for the searchbar as well as the search results, connecting them to our model. This is in component state.
- <strong>show.js</strong> - Used to be able to actually switch between different pages, component state.

<strong>views</strong>

- <strong>promiseNoData.js</strong> - Used to show the user if the data has been fetched and also shows a loading icon if the data is being fetched.
- <strong>searchFormView.js</strong> - View file for the search bar itself where the user inputs what they want to search for. There is also a dropdown menu where the user gets to choose between artist and track (what type to search for) and a button for submitting the search.
- <strong>searchResultsView.js</strong> - View file for displaying the search results after the user has pressed the "Search" button in searchFormView.js


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
