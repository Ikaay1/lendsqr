## Lendsqr

Dashboard of a mini web application.

Built with Javascript(ES6) and ReactJs.
For demo, visit https://lendsqr-ikaay.netlify.app

## Features

- View locations of some countries via pie chart
- Display the page views on a line graph

## Technologies used

- ReactJs: for handling our single-page application's user interface(view layer)
- Typescript: for static/strong typing
- [`react-loader-spinner`](https://www.npmjs.com/package/react-loader-spinner): for showing loading animation while fetching data from API
- [`react-icons`](https://www.npmjs.com/package/react-icons): for icons on the app
- SCSS: for better css styling approach
- Axios: for making API requests

## Implementation process

- Architecture: Package-By-Feature

The whole process of building this React App involves the following stages:-

1. Design/ Planning
2. Building a static version of the app
3. Setting up API and configuring proxy for API
4. Testing

#### 1. The Design/Planning stage

Ideally, I needed to divided the components in such a way that one component only has a single functionality. I also needed to account for component re-usability Eg. components for displaying error messages or app loading state.
Since the app is thought to be a basic one, I had two(2) top level components in mind for the UI design:

- Sidebar component: a view showing the navigation links.
- Main component: a view showing the implemented pie charts and line graph, the data gotten from the API.

#### 2. Building a static version of the app

This stage is just about building the folder structure creating the components, adding styling, populating the components with mock data. I created the components using a top to down approach - starting with bigger encapsulating one to smaller(least) ones. <br>
For me, main objective in this stage was to build the structure of the app and seeing how it would look like with real data, without having to worry about handling data and interactivity yet.

#### 3. Setting up API

In this stage, I setup my api logic to retrieve list of users, and individual user from the specified hosted backend.

#### 4. Testing

Testing basically helps you spot bugs on time. The more tests I write, the more confidence I have with my code. There are a few types/categories of testing code or an apps functionality. They include end-to-end, integration, unit tests, etc. They image below shows an example of a unit(component) test I wrote.

## Installation

1. Install [`node`](https://nodejs.org/en/download/), version 6 or greater

2. Clone the repo and cd into it

   ```
   git clone https://github.com/Ikaay1/lendsqr.git
   cd lendsqr
   ```

3. Install all dependencies

   ```
   npm install
   ```

4. Start the app

   ```
   npm start
   ```

5. Open running application

   ```
   http://localhost:3000/ or the specified url from the terminal
   ```

## Testing

> - `npm test`

## Author

- **Mgbemele Ikechukwu** - Software Developer and Soccer freak.
