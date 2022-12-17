# SpotifyComparison

## Description

An application for fetching data from a Spotify API, and using this data for a web application where the user can compare songs and artists to one another and save songs to their playlist. Our target user is people who love music and listen to it regularly who also wants to be able to look at statistics of their music and favourite artists and compare them with each other.

## What we have done so far

So far in the project, the data has been fetched from the API, and the search function used to look up artists or tracks has been implemented. With looking up a track or an artist, the name associated with them is displayed along with the thumbnail image and its corresponding type, names are also truncated when they are too long. It is also possible to add and remove songs from a playlist and access the playlist or main menu through the menu buttons.

## What we plan to do

We plan to implement being able to put up two songs or artists on the screen to see more detailed information about them, and be able to compare them side by side, we will also implement the ability to remove them from these displays and the possibility to add them from the playlist after comparing them.

## File structure

We use the Model-Presenter-View strusture as per the course's labs.

### public

- <strong>style.css</strong> - The css file containing all of our classes used in our HTML code.

### src

- <strong>firebaseModel.js</strong> - Used with firebase to deploy our project with persistence.
- <strong>main.jsx</strong> - renders VueRoot in the app div.
- <strong>resolvePromise.js</strong> - Resolves promises by saving a promise state with promise, data and errors.
- <strong>SpotifyModel.js</strong> - Model for the entire program. Communicates with views via presenters, and has observers.
- <strong>spotifySource.js</strong> - Used to fetch data from the API and treat these HTTP responses accordingly.

<strong>presenters</strong>

- <strong>app.jsx</strong> - The file is used to display the different screens depending on their hash.
- <strong>detailsPresenter.jsx</strong> - Presenter for the details of the selected song or artist, connecting them to our model.
- <strong>playlistPresenter.jsx</strong> - Presenter for the playlist, connecting it to our model.
- <strong>searchPresenter.jsx</strong> - Presenter for the searchbar as well as the search results, connecting them to our model. This is in component state.
- <strong>show.jsx</strong> - Used to be able to actually switch between different pages, component state.
- <strong>VueRoot.jsx</strong> - The root for our Vue project.

<strong>views</strong>

- <strong>detailsView.jsx</strong> - View file for the details page itself where the user can add a song or artist to the left or right side of the screen to see more detailed information of the songs/artists chosen. can add or remove song from playlist from here as well.
- <strong>playlistView.jsx</strong> - View file for the playlist itself where the user can see all of the songs they have added to the playlist, here they can see the title, artist name, album and duration of the song. The user may also remove songs from here as well.
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
